// ============================================================
// BANCO DE DADOS PRINCIPAL — ETEs e Centros Rurais
// ============================================================
const dadosETEs = [
  { id: "origem", nome: "Prefeitura Municipal de Andradas", status: "Ponto de Partida Oficial", funcionamento: "Sede administrativa — Partida para vistorias técnicas.", equipamentos: "-", bombas: "-", potencias: "-", problemas: "Ponto de encontro e saída oficial para as vistorias técnicas. Futura Nova ETE Jaguari-Mirim (Sede): processo biológico terciário projetado para atender a demanda centralizada.", solicitacoes: "Implantação da Nova ETE Jaguari-Mirim, licenciamento ambiental, regularização fundiária e obras de acesso (ponte e pavimentação).", capex: "Nova ETE Jaguari-Mirim: R$ 50.354.497,65", lat: -22.066532, lng: -46.568461 },
  { id: "ete-sao-cristovao", nome: "ETE Jardim São Cristóvão", tipo: "Tratamento de Esgoto", lat: -22.070079, lng: -46.604791, imagem: "Pontos_Images/79-ETE São Cristovão.Imagem.131102.jpg", status: "Operacional (Com patologias) / Reforma e Ampliação", funcionamento: "Lodos ativados em regime de aeração prolongada. Gravidade (atende bacia do ribeirão da Cava). Qméd: 46,71 L/s | Qmáx: 61,68 L/s (atende aprox. 8.525 hab).", equipamentos: "Canal de entrada, gradeamento (grossa/fina), caixa de areia/gordura, calha Parshall de 6\", 04 tanques de aeração com 12 aeradores superficiais, 04 decantadores secundários e recirculação. Prédio de desidratação com centrífuga e filtro prensa.", bombas: "Sistema de recirculação de lodo, bombas dosadoras de hipoclorito, desidratação mecânica (centrífuga subdimensionada) e estação elevatória de recirculação.", potencias: "", problemas: "Sistema de desidratação (centrífuga) subdimensionado. Patologias estruturais severas (trincas, infiltrações, armaduras expostas). Necessita impermeabilização nos tanques, reforma dos leitos de secagem, modernização de painéis elétricos. Sem sistema de cloração implantado. Ponto de lançamento em trecho de baixa autodepuração.", solicitacoes: "Ampliação e adequação completa: bombas dosadoras para desinfecção, medição ultrassônica, requalificação estrutural e adequação NR-10/NR-12.", capex: "R$ 5.087.068,00" },
  { id: "ete-amelia", nome: "ETE Jardim Amélia", tipo: "Tratamento de Esgoto", lat: -22.081381, lng: -46.594044, imagem: "Pontos_Images/41-ETE Jd Amélia.Imagem.091008.jpg", status: "Inoperante (Em by-pass) / Conversão em EEE", funcionamento: "Projetada para lodos ativados com aeração prolongada. Qméd: 6,22 m³/h | Qmáx: 10,70 m³/h.", equipamentos: "Gradeamento, caixas de areia/gordura, tanque de aeração em concreto (246,4 m³), decantador secundário (20,70 m³) e 10 leitos de secagem.", bombas: "02 bombas para recirculação de lodo (paradas); na nova fase: 02 bombas submersíveis em redundância.", potencias: "", problemas: "Totalmente inoperante (operando em by-pass). Estruturas sem impermeabilização, bombas paradas e ausência de cercamento de segurança (vandalismo).", solicitacoes: "Desativação permanente. Substituição por Estação Elevatória de Esgoto Compacta (EEEC 03) para bombeamento ao novo interceptor.", capex: "R$ 2.836.613,31" },
  { id: "ete-heloisa", nome: "ETE Jardim Heloísa", tipo: "Tratamento de Esgoto", lat: -22.096845, lng: -46.579513, imagem: "Pontos_Images/43-ETE Jd Heloísa.Imagem.094522.jpg", status: "Operacional (Vulnerável) / Conversão em EEE", funcionamento: "Lodos ativados com aeração prolongada. Qméd: 3,55 L/s | Qmáx: 6,15 L/s.", equipamentos: "EEE com 02 bombas submersíveis Sulzer (Robusta) em 01+01 (32,2 m³/h, 10 mca). Gradeamento, reator anaeróbio em PRFV (177 m³), aeração mecanizada (4,6 CV), 04 decantadores secundários e caixa cloradora de 10.000 L.", bombas: "02 Bombas submersíveis Sulzer (Robusta); 01 Aerador mecanizado; na nova fase: 02 bombas com inversor de frequência.", potencias: "Aerador: 4,6 CV", problemas: "Tanques PRFV com alta vulnerabilidade à radiação solar. Sistema de cloração rudimentar e elementos hidráulicos/civis inoperantes.", solicitacoes: "Desativação permanente e substituição por EEEC (Estação Elevatória Compacta EEEC 07).", capex: "R$ 2.836.613,31" },
  { id: "ete-portal-mantiqueira", nome: "ETE Portal da Mantiqueira", tipo: "Tratamento de Esgoto", lat: -22.069435, lng: -46.585201, imagem: "Pontos_Images/45-ETE Jd Mantiqueira.Imagem.102604.jpg", status: "Operacional (Requer Revitalização) / Conversão em EEE", funcionamento: "Lodos ativados com aeração prolongada.", equipamentos: "Canal de entrada (7,5 m), reator aerado com 02 aeradores mecânicos superficiais flutuantes de 10 CV cada, 10 leitos de secagem e tanque de contato com chicanas.", bombas: "02 bombas para recirculação de lodo; na nova fase: bombas submersíveis.", potencias: "02 aeradores mecânicos de 10 CV cada", problemas: "Sem dosagem de desinfetante implantada. Pequenos vazamentos no concreto, sistema hidráulico inoperante e ausência de muros/iluminação.", solicitacoes: "Revitalização completa imediata; plano final: desativação permanente e substituição por EEEC (Estação Elevatória Compacta EEEC 04).", capex: "R$ 2.836.613,31" },
  { id: "ete-santo-antonio", nome: "ETE Santo Antônio de Lisboa", tipo: "Tratamento de Esgoto", lat: -22.061439, lng: -46.581904, imagem: "Pontos_Images/47-ETE Santo Antônio.Imagem.131154.jpg", status: "Operacional (ETE Completa)", funcionamento: "Sistema completo: tanques anóxico/anaeróbico + lodos ativados. Qméd: 1,62 L/s | Qmáx: 2,91 L/s.", equipamentos: "Calha Parshall, decantador primário, reator aeróbio com 10 difusores de bolha fina tubulares, compressor de ar IBRAN CR4 (4 CV), bomba centrífuga (0,75 CV) para recirculação, decantador e tanque de contato.", bombas: "Difusores de bolha fina; compressor IBRAN CR4; bomba centrífuga de recirculação.", potencias: "Compressor: 4 CV; Recirculação: 0,75 CV", problemas: "Não possui sistema de tratamento de lodo no local (remoção via caminhão). Tanques PRFV com vulnerabilidade à exposição UV.", solicitacoes: "Manutenção rigorosa (proteção UV), sensores de qualidade e possível ampliação de leitos de secagem.", capex: "R$ 155.993,99 (Lote de melhorias)" },
  { id: "ete-bela-vista", nome: "ETE Alto da Bela Vista", tipo: "Tratamento de Esgoto", lat: -22.064199, lng: -46.578768, imagem: "Pontos_Images/1-ETE Bela Vista.Imagem.133221.jpg", status: "Operacional (Risco Estrutural) / Desativação para EEE", funcionamento: "Sistema combinado: Reator UASB + Filtro Biológico Submerso. Qméd: 1,54 L/s | Qmáx: 2,51 L/s.", equipamentos: "Gradeamento em fibra, Reator UASB (44,35 m³), decantador secundário (20.000 L) e caixa cloradora.", bombas: "Duas bombas submersíveis (na nova EEE).", potencias: "", problemas: "Medição de vazão manual. Tanques expostos à radiação UV e grave risco estrutural devido à instabilidade de edificações vizinhas.", solicitacoes: "Curto prazo: medição digital e proteção UV. Longo prazo: desativação e conversão em Estação Elevatória Compacta (EEEC 06).", capex: "R$ 2.836.613,31" },
  { id: "ete-recanto-serra", nome: "ETE Recanto da Serra", tipo: "Tratamento de Esgoto", lat: -22.058556, lng: -46.568511, imagem: "Pontos_Images/82-ETE Recanto da Serra.Imagem.143841.jpg", status: "Operacional (Subutilizada) / Desativação para EEE", funcionamento: "Tratamento primário e secundário com reator aeróbio. Proj. Qméd 5.544 L/h (opera muito abaixo por baixa ocupação).", equipamentos: "EEE com 02 bombas centrífugas (13-37 m³/h) com CLP. Reator Aeróbio (35,3 m³) com compressor de ar (4 CV) e bomba de recirculação (0,75 CV). Cloração com bomba microprocessada (0,043 L/h) e queimador de biogás (7 Nm³/h).", bombas: "02 bombas centrífugas; 01 compressor IBRAN CR4; 01 bomba de recirculação; 01 bomba dosadora.", potencias: "Compressor: 4 CV; Bomba Recirculação: 0,75 CV; Bomba EEE: 37 m³/6mca", problemas: "Vulnerabilidade solar dos componentes em PRFV. Subutilizada e com desgaste por falta de manutenção protetiva.", solicitacoes: "Manutenção contínua até desativação definitiva futura (substituição por EEEC interligada ao sistema principal).", capex: "R$ 2.836.613,31" },
  { id: "distrito-graminea", nome: "Distrito de Gramínea", status: "Prioridade SAA/SES (0% Cobertura)", funcionamento: "SAA com captação subterrânea e superficial precária. Sem coleta/tratamento de esgoto (In natura).", equipamentos: "SAA: Poço 1 (2,64 L/s com Alta dureza Ca²+ e Mg²+), Poço 2 (1,39 L/s) e 2 Captações superficiais inseguras. Reservatórios: 110 m³ totais.", bombas: "-", potencias: "Elevatória SES Projetada: 10 CV", problemas: "SAA: Ausência de filtração/correção de dureza; Incrustações na rede antiga de amianto. SES: 0% de cobertura com despejo total in natura.", solicitacoes: "SAA: Instalação de Abrandador para remoção de dureza, Novo reservatório 50m³ e Troca de rede (PEAD). SES: Rede coletora, Elevatória (10 CV) e ETE Compacta descentralizada.", capex: "SAA: R$ 2.270.000,00 | SES: R$ 5.430.000,00", lat: -22.1707, lng: -46.6286 },
  { id: "distrito-campestrinho", nome: "Distrito de Campestrinho", status: "Subdimensionado (Risco de Desabastecimento)", funcionamento: "Abastecimento via poços profundos requere reforço iminente. Sem cobertura de esgoto.", equipamentos: "SAA: Poço 1 (1,56 L/s - Dureza elevada) e Poço 2 (1,0 L/s). Reservação deficitária (78 m³).", bombas: "SAA: Bombas Submersas Leão MB R20A (Degradadas).", potencias: "Bombas: 12 CV", problemas: "SAA: Dureza da água elevada, motores desgastados e extrema necessidade do Poço 03. SES: 0% de cobertura no distrito.", solicitacoes: "SAA: Perfuração P3, Instalação de Abrandadores, Retrofit geral de Bombas/Reservatórios. SES: Implantação de ETE Compacta descentralizada com inversor.", capex: "SAA: R$ 2.220.000,00 | SES: R$ 5.620.000,00", lat: -22.143766, lng: -46.450575 },
  { id: "sao-jose-cachoeira", nome: "Aglomerado S. J. da Cachoeira", status: "Mais Crítico (0% Cobertura Geral)", funcionamento: "Abastecimento superficial contínuo e nenhuma coleta de esgoto.", equipamentos: "<b>SAA Captação:</b> 02 Fontes Superficiais instáveis e sem controle.<br><b>Reservação:</b> 4 unidades obsoletas (total 113 m³).", bombas: "-", potencias: "-", problemas: "<b>SAA:</b> Sem intervenção de tratamento de água (zero cloro/filtração) - Alta periculosidade à saúde.<br><b>SES:</b> 0% de Cobertura de esgoto (In natura).", solicitacoes: "<b>SAA:</b> Desativar captações superficiais, perfurar o P01, novo reservatório taça 30m³ e automação de cloro.<br><b>SES:</b> Implantação de Rede Coletora completa, Elevatória e ETE Compacta.", capex: "SAA: R$ 1.650.000,00 | SES: R$ 4.420.000,00", lat: -22.126464, lng: -46.559925 },
  { id: "bairro-oleo", nome: "Aglomerado Bairro Óleo", status: "Incompleto (Sem coleta de Esgoto)", funcionamento: "SAA com captação superficial e poço. O Distrito pende de qualquer infra de SES.", equipamentos: "<b>SAA Captação:</b> P1 12m³/h (Inativo) e P2 1.5-3m³/h. Duas captações superficiais precárias ativas.<br><b>Reservação:</b> 60 m³ + 30 m³.", bombas: "SAA: Bombas Submersas Leão", potencias: "12 CV", problemas: "<b>SAA:</b> A dependência das nascentes atuais gera instabilidade e insegurança hídrica.<br><b>SES:</b> 0% de Cobertura de esgoto.", solicitacoes: "<b>SAA:</b> Construir adutora para o P01, desativar nascentes superficiais, criar reservatório de 30m³ e reformar base técnica.<br><b>SES:</b> Implantação de Rede Coletora, Elevatória e ETE modular Compacta.", capex: "SAA: R$ 1.550.000,00 | SES: R$ 4.240.000,00", lat: -22.047688, lng: -46.667683 }
];

const dadosOutrosPontos = [
  { id: "ponto-2", nome: "Reservatório 01 (Campestrinho)", tipo: "Água Bruta", lat: -22.134108, lng: -46.449506, imagem: "Pontos_Images/AndradasÁgua Bruta.Imagem.115344.jpg", funcionamento: "Nascente 02", status: "Operacional" },
  { id: "ponto-3", nome: "UBS (Gramínea)", tipo: "Rede de Distribuição", lat: -22.168785, lng: -46.624831, imagem: "Pontos_Images/GramíneaRede de Distribuição.Imagem.161220.jpg", funcionamento: "", status: "Operacional" },
  { id: "ponto-4", nome: "Poço 1 (Gramínea)", tipo: "Água Bruta", lat: -22.171733, lng: -46.628283, imagem: "Pontos_Images/GramíneaÁgua Bruta.Imagem.162227.jpg", funcionamento: "Água Bruta", status: "Operacional" },
  { id: "ponto-5", nome: "Reservatório 01 (Gramínea)", tipo: "Água Bruta", lat: -22.171567, lng: -46.628311, imagem: "Pontos_Images/GramíneaRede de Distribuição , Água Bruta.Imagem.162340.jpg", funcionamento: "Nascente 1 , Nascente 2 , Poço 1", status: "Operacional" },
  { id: "ponto-6", nome: "Reservatório 01 (Campestrinho)", tipo: "Água Bruta", lat: -22.143812, lng: -46.452566, imagem: "Pontos_Images/CampestrinhoRede de Distribuição , Água Bruta.Imagem.180337.jpg", funcionamento: "Poço 01", status: "Operacional" },
  { id: "ponto-7", nome: "Nascente 01 (Gramínea)", tipo: "Água Bruta", lat: -22.171586, lng: -46.628294, imagem: "Pontos_Images/7.Imagem.163635.jpg", funcionamento: "Água Bruta", status: "Operacional" },
  { id: "ponto-8", nome: "Reservatório 01-B (Campestrinho)", tipo: "Água Bruta", lat: -22.143745, lng: -46.452553, imagem: "Pontos_Images/8.Imagem.172901.jpg", funcionamento: "Nascente 02", status: "Operacional" },
  { id: "ponto-9", nome: "Reservatório 02 (Campestrinho)", tipo: "Água Bruta", lat: -22.143561, lng: -46.452507, imagem: "Pontos_Images/9.Imagem.173907.jpg", funcionamento: "Nascente 01", status: "Operacional" },
  { id: "ponto-800", nome: "Poço 2 / Reservatório 02 (Gramínea)", tipo: "Água Bruta", lat: -22.172614, lng: -46.624240, imagem: "Pontos_Images/800.Imagem.134959.jpg", funcionamento: "", status: "Operacional" },
  { id: "ponto-10", nome: "UBS (Campestrinho)", tipo: "Rede de Distribuição", lat: -22.143395, lng: -46.452899, imagem: "", funcionamento: "Reservatório 01 e 02", status: "Operacional" },
  { id: "ponto-11", nome: "Escola (Campestrinho)", tipo: "Rede de Distribuição", lat: -22.143530, lng: -46.452326, imagem: "", funcionamento: "Reservatório 02", status: "Operacional" },
  { id: "ponto-12", nome: "Escola (Gramínea)", tipo: "Rede de Distribuição", lat: -22.169769, lng: -46.626959, imagem: "", funcionamento: "", status: "Operacional" }
];

// ============================================================
// MAPA LEAFLET
// ============================================================
const map = L.map('map', { zoomControl: false }).setView([-22.0664, -46.5684], 14);
L.control.zoom({ position: 'bottomright' }).addTo(map);
L.tileLayer('http://mt0.google.com/vt/lyrs=s&hl=pt-BR&x={x}&y={y}&z={z}', {
    attribution: '&copy; Google Maps', maxZoom: 20
}).addTo(map);

let markersLayer = null;
let routeLines = [];
window.currentRouteFilter = 'all';

// ============================================================
// HAVERSINE — Cálculo de distância real entre coordenadas
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

function calcRouteDistance(coords) {
    let total = 0;
    for (let i = 0; i < coords.length - 1; i++) {
        total += haversineDistance(coords[i][0], coords[i][1], coords[i+1][0], coords[i+1][1]);
    }
    return total;
}

// ============================================================
// RENDERIZAÇÃO PRINCIPAL
// ============================================================
function renderMap() {
    if (markersLayer) markersLayer.clearLayers();
    else markersLayer = L.layerGroup().addTo(map);
    
    // Limpar linhas de rota anteriores
    routeLines.forEach(l => map.removeLayer(l));
    routeLines = [];

    const filter = window.currentRouteFilter;

    // Decidir quais pontos mostrar
    let visiblePoints = [...dadosETEs, ...dadosOutrosPontos];
    if (filter === 'etes') {
        visiblePoints = dadosETEs.filter(d => d.id === 'origem' || (d.nome && d.nome.includes('ETE')));
    } else if (filter === 'rural') {
        visiblePoints = [...dadosETEs.filter(d => d.id === 'origem' || !d.nome.includes('ETE')), ...dadosOutrosPontos];
    }

    // Renderizar marcadores
    for (const data of visiblePoints) {
        if (!data.lat || !data.lng) continue;
        const point = L.latLng(data.lat, data.lng);
        const isOrigin = data.id === 'origem';

        const pinPath = 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z';
        const dropPath = 'M12 21.5C8 18 4 14 4 9.5C4 4.5 9 1 12 1C15 1 20 4.5 20 9.5C20 14 16 18 12 21.5Z M12 5.5C11 5.5 10 6.5 10 7.5C10 8.5 11 9.5 12 9.5C13 9.5 14 8.5 14 7.5C14 6.5 13 5.5 12 5.5Z';

        let iconClass = 'default-marker';
        if (data.id === 'origem') iconClass = 'origin-marker';
        else if (data.nome && data.nome.includes('ETE')) iconClass = 'marker-ete';
        else if (data.nome && (data.nome.includes('Aglomerado') || data.nome.includes('Distrito'))) iconClass = 'marker-distrito';
        else if (data.tipo && data.tipo.includes('Água Bruta')) iconClass = 'marker-agua';
        else if (data.tipo && data.tipo.includes('Distribuição')) iconClass = 'marker-distribuicao';

        const customIcon = L.divIcon({
            html: `<div class="custom-marker ${iconClass}"><svg viewBox="0 0 24 24" fill="currentColor"><path d="${isOrigin ? pinPath : dropPath}"/></svg></div>`,
            className: '', iconSize: [36, 36], iconAnchor: [18, 36], popupAnchor: [0, -40]
        });

        const statusText = data.status || 'Ativo';
        const statusL = statusText.toLowerCase();
        let statusClass = 'status-general';
        if (statusL.includes('operacional')) statusClass = 'status-success';
        if (statusL.includes('inoperante') || statusL.includes('desativ')) statusClass = 'status-danger';
        if (statusL.includes('risco') || statusL.includes('crítico') || statusL.includes('subdimensionado') || statusL.includes('prioridade')) statusClass = 'status-warning';
        if (statusL === 'ponto de partida oficial') statusClass = 'status-info';

        const safeProblemas = data.problemas || '-';
        const problemasHtml = safeProblemas.trim().startsWith('<') ? safeProblemas : `<p>${safeProblemas}</p>`;
        let capexSection = data.capex && data.capex !== '-' ? `<div class="popup-section"><strong>Visão CAPEX</strong><p class="capex-text">${data.capex}</p></div>` : '';

        const popup = `
            <div class="popup-container">
                ${data.imagem ? `<img src="${data.imagem}" class="popup-image" alt="${data.nome}" onerror="this.style.display='none'">` : ''}
                <h3 class="popup-title">${data.nome}</h3>
                <div class="popup-badges"><span class="badge ${statusClass}">${statusText}</span></div>
                ${data.funcionamento && data.funcionamento !== '-' ? `<div class="popup-section"><strong>Funcionamento</strong><p>${data.funcionamento}</p></div>` : ''}
                ${data.equipamentos && data.equipamentos !== '-' ? `<div class="popup-section"><strong>Equipamentos e Infraestrutura</strong><p>${data.equipamentos}</p></div>` : ''}
                ${data.bombas && data.bombas !== '-' ? `<div class="popup-section"><strong>Bombas e Motores</strong><p>${data.bombas}${data.potencias && data.potencias !== '-' ? ` <em>(${data.potencias})</em>` : ''}</p></div>` : ''}
                ${safeProblemas !== '-' ? `<div class="popup-section"><strong>Diagnóstico de Patologias</strong><div class="pendencies-content">${problemasHtml}</div></div>` : ''}
                ${data.solicitacoes && data.solicitacoes !== '-' ? `<div class="popup-section highlight-section"><strong>Plano de Ação da Concessão</strong><p>${data.solicitacoes}</p></div>` : ''}
                ${capexSection}
            </div>`;

        L.marker(point, { icon: customIcon })
            .addTo(markersLayer)
            .bindTooltip(data.nome, { permanent: true, direction: 'bottom', className: 'custom-tooltip', offset: [0, 10] })
            .bindPopup(popup, { minWidth: 320, maxWidth: 360, closeButton: true });
    }

    // Enquadrar mapa
    const allPts = visiblePoints.filter(d => d.lat && d.lng).map(d => L.latLng(d.lat, d.lng));
    if (allPts.length > 0) map.fitBounds(L.latLngBounds(allPts), { padding: [80, 80] });

    // Desenhar rotas e calcular métricas
    const dashboard = document.getElementById('route-dashboard');
    const segmentsList = document.getElementById('route-segments');

    // Determinar qual conjunto de rotas usar
    let activeRoutes = null;
    let avgSpeed = 35; // km/h
    
    if (filter === 'all' && typeof rotasETEs !== 'undefined' && typeof rotasRurais !== 'undefined') {
        activeRoutes = [...rotasETEs, ...rotasRurais];
        avgSpeed = 40; // Média ponderada
    } else if (filter === 'etes' && typeof rotasETEs !== 'undefined') {
        activeRoutes = rotasETEs;
        avgSpeed = 35; // urbano
    } else if (filter === 'rural' && typeof rotasRurais !== 'undefined') {
        activeRoutes = rotasRurais;
        avgSpeed = 45; // estrada rural
    }

    if (activeRoutes) {
        let totalDist = 0;
        let segmentsHtml = '';

        activeRoutes.forEach(seg => {
            const line = L.polyline(seg.coords, {
                color: seg.cor, weight: 5, opacity: 0.9, smoothFactor: 1
            }).addTo(map);
            routeLines.push(line);

            const segDist = calcRouteDistance(seg.coords);
            totalDist += segDist;
            const segKm = (segDist / 1000).toFixed(1);
            const segTime = Math.ceil((segDist / 1000) / avgSpeed * 60);

            segmentsHtml += `
                <div class="segment-item" style="border-left: 3px solid ${seg.cor}; padding-left: 8px; margin-bottom: 6px;">
                    <span class="seg-name">${seg.nome}</span>
                    <span class="seg-stats">${segKm} km • ~${segTime} min</span>
                </div>`;
        });

        const totalKm = (totalDist / 1000).toFixed(1);
        const totalMinutes = Math.ceil((totalDist / 1000) / avgSpeed * 60);
        const hours = Math.floor(totalMinutes / 60);
        const mins = totalMinutes % 60;

        document.getElementById('route-distance').textContent = `${totalKm} km`;
        document.getElementById('route-time').textContent = hours > 0 ? `${hours}h ${mins}m` : `${mins} min`;
        
        // Atualiza o texto de velocidade no label (agora sem ID fixo)
        const speedLabel = dashboard.querySelector('.stat-label');
        if (speedLabel) speedLabel.textContent = `Tempo Previsto (~${avgSpeed}km/h)`;
        
        if (segmentsList) segmentsList.innerHTML = segmentsHtml;
        dashboard.classList.remove('hidden');

        // Fit bounds to route
        const allRouteCoords = activeRoutes.flatMap(s => s.coords);
        map.fitBounds(L.latLngBounds(allRouteCoords), { padding: [60, 60] });

    } else {
        dashboard.classList.add('hidden');
    }
}

// ============================================================
// BOTÕES DE FILTRO
// ============================================================
window.setRouteFilter = function(filter) {
    window.currentRouteFilter = filter;
    document.querySelectorAll('.route-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-route-${filter}`).classList.add('active');
    renderMap();
};

// ============================================================
// INICIALIZAÇÃO
// ============================================================
window.addEventListener('DOMContentLoaded', () => renderMap());
