const dadosETEs = [
  { 
    id: "origem", 
    nome: "Prefeitura Municipal de Andradas", 
    tipo: "Ponto de Partida", 
    status: "Institucional", 
    processo: "-",
    capacidade: "-", 
    infraestrutura: "-",
    pendencias: "Ponto de encontro e saída oficial para as vistorias técnicas.", 
    diretrizPlano: "-",
    capex: "-",
    lat: -22.066532, lng: -46.568461
  },
  { 
    id: "ete-sao-cristovao", 
    nome: "ETE Jardim São Cristóvão (Sede)", 
    tipo: "ETE Principal", 
    status: "Operacional (Com patologias)", 
    processo: "Lodos ativados em regime de aeração prolongada.",
    capacidade: "Qméd: 46,71 L/s | Qmáx: 61,68 L/s (atende aprox. 8.525 habitantes).", 
    infraestrutura: "Canal de entrada, gradeamento, caixa de areia/gordura, calha Parshall de 6\", 04 tanques de aeração equipados com 12 aeradores superficiais, 04 decantadores secundários e recirculação. Prédio de desidratação possui centrífuga e filtro prensa.",
    pendencias: "O sistema de desidratação (centrífuga) está subdimensionado. Apresenta patologias estruturais severas (trincas, infiltrações e armaduras expostas nos prédios), necessita de impermeabilização nos tanques, reforma dos leitos de secagem, modernização de painéis elétricos e não possui sistema de cloração implantado. A eficiência atual é comprometida pelo ponto de lançamento em trecho de baixa autodepuração.", 
    diretrizPlano: "Ampliação e adequação completa, incluindo instalação de bombas dosadoras para desinfecção, medição ultrassônica, requalificação estrutural e adequação às normas NR-10/NR-12.",
    capex: "R$ 5.087.068,00",
    lat: -22.070079, lng: -46.604791
  },
  { 
    id: "ete-amelia", 
    nome: "ETE Jardim Amélia", 
    tipo: "ETE a desativar", 
    status: "Inoperante (Em by-pass)", 
    processo: "Projetada para lodos ativados com aeração prolongada.",
    capacidade: "Qméd: 6,22 m³/h | Qmáx: 10,70 m³/h.", 
    infraestrutura: "Gradeamento, caixas de areia/gordura, tanque de aeração em concreto (246,4 m³), decantador secundário (20,70 m³) e 10 leitos de secagem.",
    pendencias: "Totalmente inoperante no momento (operando em by-pass). Estruturas sem impermeabilização específica, bombas paradas e ausência de cercamento de segurança, sofrendo com vandalismo.", 
    diretrizPlano: "Desativação permanente. Será substituída por uma Estação Elevatória de Esgoto Compacta (EEEC) para bombeamento ao novo interceptor.",
    capex: "-",
    lat: -22.081381, lng: -46.594044
  },
  { 
    id: "ete-heloisa", 
    nome: "ETE Jardim Heloísa", 
    tipo: "ETE a desativar", 
    status: "Operacional (Vulnerável)", 
    processo: "Lodos ativados com aeração prolongada (tratamento aeróbio e decantação).",
    capacidade: "Qméd: 3,55 L/s | Qmáx: 6,15 L/s.", 
    infraestrutura: "EEE associada com 02 bombas submersíveis Sulzer (Robusta) operando em 01+01 (vazão 32,2 m³/h, 10 mca). Gradeamento, reator anaeróbio em PRFV (177 m³), aeração mecanizada com equipamento de 4,6 CV, 04 decantadores secundários e caixa cloradora de 10.000 L.",
    pendencias: "Tanques PRFV com alta vulnerabilidade à radiação solar. Sistema de cloração rudimentar e elementos hidráulicos/civis inoperantes.", 
    diretrizPlano: "Desativação permanente e substituição por EEEC.",
    capex: "-",
    lat: -22.096845, lng: -46.579513
  },
  { 
    id: "ete-portal-mantiqueira", 
    nome: "ETE Portal da Mantiqueira", 
    tipo: "ETE a desativar", 
    status: "Operacional (Requer Revitalização)", 
    processo: "Lodos ativados com aeração prolongada.",
    capacidade: "-", 
    infraestrutura: "Canal de entrada (7,5 m), reator aerado com 02 aeradores mecânicos superficiais flutuantes de 10 CV cada, 10 leitos de secagem e tanque de contato com chicanas.",
    pendencias: "Sem dosagem de desinfetante implantada. Pequenos vazamentos no concreto, sistema hidráulico inoperante e ausência de muros/iluminação.", 
    diretrizPlano: "Demanda revitalização completa imediata, mas o plano final é desativação permanente e substituição por EEEC.",
    capex: "-",
    lat: -22.069435, lng: -46.585201
  },
  { 
    id: "ete-santo-antonio", 
    nome: "ETE Santo Antônio de Lisboa", 
    tipo: "ETE Completa", 
    status: "Operacional", 
    processo: "Sistema completo (tanques anóxico/anaeróbico + lodos ativados).",
    capacidade: "Qméd: 1,62 L/s | Qmáx: 2,91 L/s.", 
    infraestrutura: "Calha Parshall, decantador primário, reator aeróbio equipado com 10 difusores de bolha fina tubulares de membrana, compressor de ar IBRAN CR4 de 4 CV e bomba centrífuga de 0,75 CV para recirculação, decantador e tanque de contato.",
    pendencias: "Não possui sistema de tratamento de lodo no local (remoção via caminhão). Tanques em PRFV apresentam vulnerabilidade à exposição UV.", 
    diretrizPlano: "Manutenção rigorosa (aplicação de proteção UV), sensores de qualidade e possível ampliação de leitos de secagem.",
    capex: "R$ 155.993,99 (Lote de melhorias)",
    lat: -22.061439, lng: -46.581904
  },
  { 
    id: "ete-bela-vista", 
    nome: "ETE Alto da Bela Vista", 
    tipo: "ETE a desativar", 
    status: "Operacional (Risco Estrutural)", 
    processo: "Sistema combinado (Reator UASB + Filtro Biológico Submerso).",
    capacidade: "Qméd: 1,54 L/s | Qmáx: 2,51 L/s.", 
    infraestrutura: "Gradeamento em fibra, Reator UASB (44,35 m³), decantador secundário (20.000 L) e caixa cloradora.",
    pendencias: "Medição de vazão manual. Tanques expostos à radiação UV e grave risco estrutural devido à instabilidade de edificações vizinhas.", 
    diretrizPlano: "Curto prazo: medição digital e proteção UV. Longo prazo: desativação e conversão em EEEC.",
    capex: "-",
    lat: -22.064199, lng: -46.578768
  },
  { 
    id: "ete-recanto-serra", 
    nome: "ETE Recanto da Serra", 
    tipo: "ETE a desativar", 
    status: "Operacional (Subutilizada)", 
    processo: "Tratamento primário e secundário com reator aeróbio.",
    capacidade: "Proj. Qméd 5.544 L/h (opera muito abaixo por baixa ocupação).", 
    infraestrutura: "EEE corporando 02 bombas centrífugas (13-37 m³/h) com CLP. Reator Aeróbio (35,3 m³) com compressor de ar (4 CV) e bomba de recirculação (0,75 CV). Cloração com bomba microprocessada (0,043 L/h) e queimador de biogás (7 Nm³/h).",
    pendencias: "Vulnerabilidade solar dos componentes construídos em PRFV.", 
    diretrizPlano: "Manutenção contínua até a desativação definitiva futura (substituição por EEEC).",
    capex: "-",
    lat: -22.058556, lng: -46.568511
  }
];

// Initialize Leaflet Map
// Set default view to Andradas approx coords
const map = L.map('map', {
    zoomControl: false // will add custom position if needed, or leave default top-left but below header
}).setView([-22.0664, -46.5684], 14);

// Add Zoom Control at bottom right
L.control.zoom({
    position: 'bottomright'
}).addTo(map);

// Map tiles - Google Satellite (Pure, sem labels de comércio)
L.tileLayer('http://mt0.google.com/vt/lyrs=s&hl=pt-BR&x={x}&y={y}&z={z}', {
    attribution: '&copy; Google Maps',
    maxZoom: 20
}).addTo(map);

let routingControl = null;
let markersLayer = null;

// Automation logic handles the load now

function processKMLSequence(kmlText) {
    // Show Loader
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';
    
    // Slight delay to allow browser to render the loader before blocking CPU
    setTimeout(() => {
        try {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(kmlText, "text/xml");
            
            // In KML, coordinates are usually in <Point><coordinates>...</coordinates></Point>
            const placemarks = xmlDoc.getElementsByTagName("Placemark");
            if (placemarks.length === 0) {
                alert("Não foram encontrados pontos (Placemarks) no ficheiro KML.");
                loader.style.display = 'none';
                return;
            }

            const pointsData = [];

            for (let i = 0; i < placemarks.length; i++) {
                const placemark = placemarks[i];
                
                // Get Name
                let name = "Ponto " + (i + 1);
                const nameNode = placemark.getElementsByTagName("name")[0];
                if (nameNode) name = nameNode.textContent.trim();

                // Get Coordinates
                const pointNode = placemark.getElementsByTagName("Point")[0];
                if (pointNode) {
                    const coordsNode = pointNode.getElementsByTagName("coordinates")[0];
                    if (coordsNode) {
                        const coordsStr = coordsNode.textContent.trim().split(/\s+/)[0]; 
                        const lonLat = coordsStr.split(',');
                        if (lonLat.length >= 2) {
                            const lon = parseFloat(lonLat[0]);
                            const lat = parseFloat(lonLat[1]);
                            pointsData.push({ name: name, latLng: L.latLng(lat, lon) });
                        }
                    }
                }
            }
            
            if (pointsData.length === 0) {
                 alert("Não foi possível extrair coordenadas dos pontos no ficheiro KML.");
                 loader.style.display = 'none';
                 return;
            }

            renderMapPoints(pointsData, loader);

        } catch (error) {
            console.error("Parse Error:", error);
            alert("Ocorreu um erro inesperado ao processar o arquivo KML.");
            loader.style.display = 'none';
        }
    }, 100); 
}

function renderMapPoints(pointsData, loader) {
            // Prepare Map Layers
            if (routingControl) {
                map.removeControl(routingControl);
            }
            if (markersLayer) {
                markersLayer.clearLayers();
            } else {
                markersLayer = L.layerGroup().addTo(map);
            }
            
            const waypointsForRouting = [];
            
            // Define approximate coordinate for the City Hall (origem) since it's typically missing from the KML
            const prefeituraCoords = L.latLng(-22.0665, -46.5684);
            
            // Helper function to normalize strings for matching
            const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            
            // Map JSON IDs to KML name keywords
            const nameMapping = {
                "origem": "prefeitura",
                "ete-sao-cristovao": "cristovao",
                "ete-amelia": "amelia",
                "ete-heloisa": "heloisa",
                "ete-portal-mantiqueira": "mantiqueira",
                "ete-santo-antonio": "antonio",
                "ete-bela-vista": "bela vista",
                "ete-recanto-serra": "recanto"
            };

            for (let i = 0; i < dadosETEs.length; i++) {
                const data = dadosETEs[i];
                let point = null;
                
                // First check if pointsData has an exact match via coordinates already pre-processed (isFallback means it's coming from DB)
                let matchedKmlPoint = pointsData.find(p => p.isFallback && p.name === data.nome);
                
                if (!matchedKmlPoint && !pointsData[0]?.isFallback) {
                    const keyword = nameMapping[data.id];
                    matchedKmlPoint = pointsData.find(p => p.name && norm(p.name).includes(keyword));
                }
                
                if (matchedKmlPoint) {
                    point = matchedKmlPoint.latLng;
                } else if (data.id === "origem") {
                    // Fallback para a prefeitura se não houver no KML
                    point = prefeituraCoords;
                } else if (data.lat && data.lng) {
                     // Internal database fallback
                    point = L.latLng(data.lat, data.lng);
                } else {
                    console.warn(`Ponto não encontrado no KML para: ${data.nome}`);
                    continue; // Skip if ETE is not in KML and no fallback
                }
                
                waypointsForRouting.push(point);
                
                const isOrigin = (data.id === "origem");
                
                // SVG Paths
                const pinOriginPath = 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z';
                const dropETEPath = 'M12 21.5C8 18 4 14 4 9.5C4 4.5 9 1 12 1C15 1 20 4.5 20 9.5C20 14 16 18 12 21.5Z M12 5.5C11 5.5 10 6.5 10 7.5C10 8.5 11 9.5 12 9.5C13 9.5 14 8.5 14 7.5C14 6.5 13 5.5 12 5.5Z';
                
                const svgPath = isOrigin ? pinOriginPath : dropETEPath;
                const iconClass = isOrigin ? 'origin-marker' : 'default-marker';

                const iconHtml = `
                    <div class="custom-marker ${iconClass}">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="${svgPath}"/>
                        </svg>
                    </div>
                `;
                    
                const customIcon = L.divIcon({
                    html: iconHtml,
                    className: '', // disable default leaflet styles
                    iconSize: [36, 36],
                    iconAnchor: [18, 36],
                    popupAnchor: [0, -40] // shift popup above icon
                });

                // Status logic for badges
                const statusL = data.status.toLowerCase();
                let statusClass = "status-general";
                
                if (statusL.includes("operacional") && !statusL.includes("patologias") && !statusL.includes("risco") && !statusL.includes("revitalização")) {
                    statusClass = "status-success";
                }
                if (statusL.includes("inoperante") || statusL.includes("desativar")) {
                    statusClass = "status-danger";
                }
                if (statusL.includes("patologia") || statusL.includes("revitalização") || statusL.includes("risco")) {
                    statusClass = "status-warning";
                }
                if (statusL === "institucional") {
                    statusClass = "status-info";
                }
                
                // Handle HTML inside pendencias string safely or inject raw if it contains tags
                const pendenciasHtml = data.pendencias.trim().startsWith('<') 
                    ? data.pendencias 
                    : `<p>${data.pendencias}</p>`;

                let capexSection = "";
                if (data.capex && data.capex !== "-") {
                    capexSection = `
                        <div class="popup-section">
                            <strong>CAPEX Previsto</strong>
                            <p class="capex-text">${data.capex}</p>
                        </div>
                    `;
                }

                const popupContent = `
                    <div class="popup-container">
                        <h3 class="popup-title">${data.nome}</h3>
                        <div class="popup-badges">
                            <span class="badge ${statusClass}">${data.status}</span>
                        </div>
                        
                        ${data.processo && data.processo !== "-" ? `
                        <div class="popup-section">
                            <strong>Processo</strong>
                            <p>${data.processo}</p>
                        </div>
                        ` : ''}
                        
                        ${data.capacidade && data.capacidade !== "-" ? `
                        <div class="popup-section">
                            <strong>Capacidade Operacional</strong>
                            <p>${data.capacidade}</p>
                        </div>
                        ` : ''}
                        
                        ${data.infraestrutura && data.infraestrutura !== "-" ? `
                        <div class="popup-section">
                            <strong>Infraestrutura e Equipamentos</strong>
                            <p>${data.infraestrutura}</p>
                        </div>
                        ` : ''}

                        <div class="popup-section">
                            <strong>Patologias e Pendências</strong>
                            <div class="pendencies-content">
                                ${pendenciasHtml}
                            </div>
                        </div>
                        
                        <div class="popup-section highlight-section">
                            <strong>Plano de Intervenção</strong>
                            <p>${data.diretrizPlano}</p>
                        </div>
                        
                        ${capexSection}
                    </div>
                `;

                L.marker(point, {icon: customIcon})
                    .addTo(markersLayer)
                    .bindTooltip(data.nome, {
                        permanent: true,
                        direction: 'bottom',
                        className: 'custom-tooltip',
                        offset: [0, 10]
                    })
                    .bindPopup(popupContent, { 
                        minWidth: 320, 
                        maxWidth: 360,
                        closeButton: true 
                    });
            }
            
            if (waypointsForRouting.length > 0) {
                // Focus Map
                const bounds = L.latLngBounds(waypointsForRouting);
                map.fitBounds(bounds, { padding: [80, 80] });

                // Routing
                routingControl = L.Routing.control({
                    waypoints: waypointsForRouting,
                    routeWhileDragging: false,
                    addWaypoints: false,
                    draggableWaypoints: false,
                    show: false, // Prevents side panel
                    createMarker: function() { return null; }, 
                    lineOptions: {
                        styles: [{
                            color: '#38bdf8', 
                            opacity: 0.8, 
                            weight: 5,
                            className: 'routing-line-glow'
                        }]
                    },
                    router: L.Routing.osrmv1({
                        language: 'pt',
                        profile: 'driving'
                    })
                })
                .on('routesfound', function(e) {
                     if(loader) loader.style.display = 'none';
                })
                .on('routingerror', function(e) {
                     console.error("Routing error:", e);
                     if(loader) loader.style.display = 'none';
                })
                .addTo(map);

                if(loader) {
                    setTimeout(() => {
                        loader.style.display = 'none';
                    }, 5000);
                }
            } else {
                 if(loader) loader.style.display = 'none';
            }
}

// Function to automatically load the built-in database points on startup
function initDatabasePoints() {
    const loader = document.getElementById('loader');
    if(loader) loader.style.display = 'flex';
    
    setTimeout(() => {
        let defaultPointsData = [];
        dadosETEs.forEach(data => {
            if (data.lat && data.lng) {
                defaultPointsData.push({
                    name: data.nome,
                    latLng: L.latLng(data.lat, data.lng),
                    isFallback: true
                });
            }
        });
        
        renderMapPoints(defaultPointsData, loader);
    }, 500);
}

// Start immediately loading from KML file on local server, fallback to DB
window.addEventListener('DOMContentLoaded', () => {
    const kmlFilename = "ETE's KML.kml";
    
    fetch(encodeURI(kmlFilename))
        .then(response => {
            if (!response.ok) {
                throw new Error("KML file not found on local server.");
            }
            return response.text();
        })
        .then(kmlText => {
            processKMLSequence(kmlText);
        })
        .catch(err => {
            console.warn("Não foi possível carregar o KML local (" + err.message + "). Usando fallback hardcoded.");
            initDatabasePoints();
        });
});
