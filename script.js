/**
 * SANEAMENTO RURAL - Sistema de Gestão de Vistorias
 * 
 * Logic refactored for simplicity and maintainability.
 * High-fidelity routes loaded from ROTAS.txt.
 */

// ============================================================
// CONFIGURAÇÕES E ESTADOS
// ============================================================
const CONFIG = {
    DEFAULT_CENTER: [-22.071520, -46.573321],
    DEFAULT_ZOOM: 15,
    SPEEDS: { all: 40, etes: 35, rural: 45 },
    ICON_PATHS: {
        pin: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
        drop: 'M12 21.5C8 18 4 14 4 9.5C4 4.5 9 1 12 1C15 1 20 4.5 20 9.5C20 14 16 18 12 21.5Z M12 5.5C11 5.5 10 6.5 10 7.5C10 8.5 11 9.5 12 9.5C13 9.5 14 8.5 14 7.5C14 6.5 13 5.5 12 5.5Z'
    }
};

let map, markersLayer, routeLines = [];
let currentFilter = 'all';

// ============================================================
// UTILITÁRIOS
// ============================================================
function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371000;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

const calcRouteDistance = (coords) => coords.reduce((acc, curr, i, arr) => 
    i === 0 ? 0 : acc + haversineDistance(arr[i-1][0], arr[i-1][1], curr[0], curr[1]), 0);

// ============================================================
// COMPONENTES DE UI
// ============================================================

function getMarkerIcon(data) {
    const isOrigin = data.id === 'origem';
    let iconClass = 'default-marker';
    
    if (isOrigin) iconClass = 'origin-marker';
    else if (data.nome?.includes('ETE')) iconClass = 'marker-ete';
    else if (data.id?.startsWith('eta')) iconClass = 'marker-eta';
    else if (data.nome?.match(/Aglomerado|Distrito/i)) iconClass = 'marker-distrito';
    else if (data.tipo?.includes('Água Bruta') || data.tipo?.includes('Abastecimento')) iconClass = 'marker-agua';
    else if (data.tipo?.includes('Distribuição') || data.tipo?.includes('Pressurização')) iconClass = 'marker-distribuicao';

    return L.divIcon({
        html: `<div class="custom-marker ${iconClass}"><svg viewBox="0 0 24 24" fill="currentColor"><path d="${isOrigin ? CONFIG.ICON_PATHS.pin : CONFIG.ICON_PATHS.drop}"/></svg></div>`,
        className: '', iconSize: [36, 36], iconAnchor: [18, 36], popupAnchor: [0, -40]
    });
}

function getPopupContent(data) {
    const statusText = data.status || 'Ativo';
    const statusL = statusText.toLowerCase();
    let statusClass = 'status-general';
    
    if (statusL.includes('operacional')) statusClass = 'status-success';
    else if (statusL.match(/inoperante|desativ/)) statusClass = 'status-danger';
    else if (statusL.match(/risco|crítico|subdimensionado|prioridade/)) statusClass = 'status-warning';
    else if (statusL.includes('ponto de partida')) statusClass = 'status-info';

    const renderSection = (title, content, extra = '') => 
        content && content !== '-' ? `<div class="popup-section"><strong>${title}</strong><p>${content}${extra}</p></div>` : '';

    return `
        <div class="popup-container">
            ${data.imagem ? `<img src="${data.imagem}" class="popup-image" onerror="this.style.display='none'">` : ''}
            <h3 class="popup-title">${data.nome}</h3>
            <div class="popup-badges"><span class="badge ${statusClass}">${statusText}</span></div>
            ${renderSection('Funcionamento', data.funcionamento)}
            ${renderSection('Equipamentos', data.equipamentos)}
            ${renderSection('Bombas e Motores', data.bombas, data.potencias ? ` <em>(${data.potencias})</em>` : '')}
            ${data.problemas ? `<div class="popup-section"><strong>Diagnóstico</strong><div class="pendencies-content">${data.problemas}</div></div>` : ''}
            ${renderSection('Plano de Ação', data.solicitacoes)}
            ${data.capex ? `<div class="popup-section"><strong>CAPEX</strong><p class="capex-text">${data.capex}</p></div>` : ''}
        </div>`;
}

// ============================================================
// LÓGICA DO MAPA
// ============================================================

function setupMap() {
    map = L.map('map', { zoomControl: false }).setView(CONFIG.DEFAULT_CENTER, CONFIG.DEFAULT_ZOOM);
    L.control.zoom({ position: 'bottomright' }).addTo(map);
    L.tileLayer('http://mt0.google.com/vt/lyrs=s&hl=pt-BR&x={x}&y={y}&z={z}', {
        attribution: '&copy; Google Maps', maxZoom: 20
    }).addTo(map);
    markersLayer = L.layerGroup().addTo(map);
    
    // Custom Locate Me Button
    const LocateControl = L.Control.extend({
        options: { position: 'bottomright' },
        onAdd: function() {
            const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control custom-locate-btn');
            container.innerHTML = '🎯';
            container.title = 'Minha Localização';
            container.onclick = function() {
                map.locate({ setView: true, maxZoom: 16 });
            };
            return container;
        }
    });
    new LocateControl().addTo(map);
    
    map.on('locationfound', (e) => {
        L.circle(e.latlng, e.accuracy).addTo(map);
        L.marker(e.latlng).addTo(map).bindPopup("Você está aqui").openPopup();
    });

    map.on('locationerror', (e) => {
        alert("Não foi possível obter sua localização: " + e.message);
    });

    // Dashboard Toggle Logic
    const dashboard = document.getElementById('route-dashboard');
    const toggle = document.getElementById('dashboard-toggle');
    if (toggle && dashboard) {
        toggle.onclick = () => dashboard.classList.toggle('expanded');
    }
}

function updateMarkers(filter) {
    markersLayer.clearLayers();
    let points = [...dadosETEs, ...dadosOutrosPontos, ...dadosEEATs];
    
    if (filter === 'etes') {
        points = dadosETEs.filter(d => d.id === 'origem' || d.nome.includes('ETE'));
    } else if (filter === 'boosters') {
        points = [...dadosETEs.filter(d => d.id === 'origem'), ...dadosEEATs.filter(d => d.id.startsWith('booster'))];
    } else if (filter === 'eeat') {
        points = [...dadosETEs.filter(d => d.id === 'origem'), ...dadosEEATs.filter(d => d.id.startsWith('eeat'))];
    } else if (filter === 'eta') {
        points = [...dadosETEs.filter(d => d.id === 'origem' || d.id.startsWith('eta'))];
    } else if (filter === 'rural') {
        points = [...dadosETEs.filter(d => d.id === 'origem' || !d.nome.includes('ETE')), ...dadosOutrosPontos, ...dadosEEATs];
    }

    points.forEach(data => {
        if (!data.lat || !data.lng) return;
        L.marker([data.lat, data.lng], { icon: getMarkerIcon(data) })
            .addTo(markersLayer)
            .bindTooltip(data.nome, { permanent: true, direction: 'bottom', className: 'custom-tooltip', offset: [0, 10] })
            .bindPopup(getPopupContent(data), { 
                minWidth: window.innerWidth < 768 ? window.innerWidth * 0.8 : 320, 
                maxWidth: 400,
                className: 'responsive-popup'
            });
    });
    
    return points.map(p => [p.lat, p.lng]);
}

function updateRoutes(filter) {
    routeLines.forEach(l => map.removeLayer(l));
    routeLines = [];

    let routes = [];
    if (filter === 'all') {
        routes = []; // Hide all routes for 'All' view to keep it clean
    } else if (filter === 'etes') {
        routes = typeof rotasETEs !== 'undefined' ? rotasETEs : [];
    } else if (filter === 'rural') {
        routes = typeof rotasRurais !== 'undefined' ? rotasRurais : [];
    }

    const dashboard = document.getElementById('route-dashboard');
    const segmentsList = document.getElementById('route-segments');
    const speed = CONFIG.SPEEDS[filter] || 40;

    if (routes.length === 0) {
        dashboard?.classList.add('hidden');
        return [];
    }

    let totalDist = 0;
    let html = '';

    routes.forEach((seg, idx) => {
        const line = L.polyline(seg.coords, { 
            color: seg.cor, 
            weight: 5, 
            opacity: 0.85,
            className: 'routing-line-glow'
        }).addTo(map);
        
        // Add click listener to the line itself
        line.on('click', () => {
            const isMobile = window.innerWidth <= 768;
            map.fitBounds(line.getBounds(), { padding: isMobile ? [20, 20] : [50, 50] });
            line.setStyle({ weight: 8, opacity: 1 });
            setTimeout(() => line.setStyle({ weight: 5, opacity: 0.85 }), 2000);
        });

        routeLines.push(line);

        const d = calcRouteDistance(seg.coords);
        totalDist += d;
        html += `
            <div class="segment-item" style="border-left: 3px solid ${seg.cor}" onclick="focusSegment(${idx})">
                <span class="seg-name">${seg.nome}</span>
                <span class="seg-stats">📏 ${(d/1000).toFixed(1)} km • ⏱️ ~${Math.ceil((d/1000)/speed*60)} min</span>
            </div>`;
    });

    const totalKm = (totalDist / 1000).toFixed(1);
    const totalMins = Math.ceil((totalDist / 1000) / speed * 60);
    
    document.getElementById('route-distance').textContent = `${totalKm} km`;
    document.getElementById('route-time').textContent = totalMins > 60 ? `${Math.floor(totalMins/60)}h ${totalMins%60}m` : `${totalMins} min`;
    
    const speedLabel = dashboard.querySelector('.stat-label:last-of-type') || { textContent: "" };
    speedLabel.textContent = `⏱️ Tempo (~${speed}km/h)`;
    
    if (segmentsList) segmentsList.innerHTML = html;
    
    dashboard?.classList.remove('hidden');
    return routes.flatMap(s => s.coords);
}

window.focusSegment = (index) => {
    const line = routeLines[index];
    if (line) {
        const isMobile = window.innerWidth <= 768;
        map.fitBounds(line.getBounds(), { padding: isMobile ? [40, 40] : [60, 60] });
        line.setStyle({ weight: 10, opacity: 1 });
        setTimeout(() => line.setStyle({ weight: 5, opacity: 0.85 }), 1500);
        
        // Minimize dashboard on mobile after focus if not already expanded
        const dashboard = document.getElementById('route-dashboard');
        if (isMobile && dashboard && !dashboard.classList.contains('expanded')) {
            // Keep it visible but potentially collapsed
        }
    }
};

function renderMap() {
    const markerCoords = updateMarkers(currentFilter);
    const routeCoords = updateRoutes(currentFilter);
    
    const allCoords = [...markerCoords, ...routeCoords];
    if (allCoords.length > 0) {
        const isMobile = window.innerWidth <= 768;
        map.fitBounds(L.latLngBounds(allCoords), { 
            padding: isMobile ? [30, 30] : [50, 50],
            paddingTopLeft: isMobile ? [0, 80] : [0, 0] // Account for header on mobile
        });
    }
}

// ============================================================
// EVENTOS
// ============================================================

window.setRouteFilter = (filter) => {
    currentFilter = filter;
    document.querySelectorAll('.route-btn').forEach(btn => 
        btn.classList.toggle('active', btn.id === `btn-route-${filter}`));
    renderMap();
};

window.addEventListener('DOMContentLoaded', () => {
    setupMap();
    renderMap();
});
