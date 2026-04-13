const fs = require('fs');

const rotasTxt = fs.readFileSync('ROTAS.txt', 'utf8');

const segments = [
    { name: "Prefeitura → ETE Recanto da Serra", key: /Prefeitura\s*->\s*Recanto\s*da\s*Serra/i, type: "ete", color: "#38bdf8" },
    { name: "ETE Recanto da Serra → ETE Alto da Bela Vista", key: /Recanto\s*da\s*Serra\s*->\s*Alto\s*do\s*Bela\s*vista/i, type: "ete", color: "#a78bfa" },
    { name: "ETE Alto da Bela Vista → ETE Santo Antônio Lisboa", key: /Alto\s*do\s*Bela\s*Vista\s*->\s*St\.\s*Antonio\s*Lisboa/i, type: "ete", color: "#34d399" },
    { name: "ETE Santo Antônio Lisboa → ETE Portal da Mantiqueira", key: /St\.\s*Antonio\s*Lisboa\s*->\s*Jd\.\s*Mantiqueira\s*2/i, type: "ete", color: "#fb923c" },
    { name: "ETE Portal da Mantiqueira → ETE São Cristóvão", key: /Jd\.\s*Mantiqueira\s*->\s*S.o\s*Cristovao/i, type: "ete", color: "#f472b6" },
    { name: "ETE São Cristóvão → ETE Jardim Amélia", key: /Jd\.\s*S.o\s*Crist.vao\s*->\s*Jd\.\s*Amelia/i, type: "ete", color: "#facc15" },
    { name: "ETE Jardim Amélia → ETE Jardim Heloísa", key: /Jd\.\s*Am.lia\s*->\s*Jd\.\s*Heloisa/i, type: "ete", color: "#60a5fa" },
    { name: "Prefeitura → S.J. da Cachoeira", key: /pREFEITURA\s*->\s*S.O\s*JOSE\s*DA\s*CACHOEIRA/i, type: "rural", color: "#22d3ee" },
    { name: "S.J. da Cachoeira → Campestrinho", key: /JOSE\s*DA\s*CACHOEIRA\s*->\s*CAMP?ES?TRINHO/i, type: "rural", color: "#818cf8" },
    { name: "Campestrinho → Distrito de Gramínea", key: /cAMPESTRINHO\s*->\s*GRAMINEA/i, type: "rural", color: "#fb7185" },
    { name: "Prefeitura → Aglomerado Bairro Óleo", key: /pREFEITURA\s*->\s*OLEO/i, type: "rural", color: "#34d399" }
];

// 1. Find the position of every marker
const occurrences = [];
segments.forEach((seg, i) => {
    const match = rotasTxt.match(seg.key);
    if (match) {
        occurrences.push({ index: match.index, segIndex: i });
    }
});

// Sort by position
occurrences.sort((a, b) => a.index - b.index);

const finalETEs = [];
const finalRurais = [];

function extractLineString(block) {
    // Find the LineString that has the most coordinates
    const regex = /<LineString>[\s\S]*?<coordinates>([\s\S]*?)<\/coordinates>/gi;
    let bestPoints = null;
    let maxCount = 0;
    
    let match;
    while ((match = regex.exec(block)) !== null) {
        const points = match[1].trim().split(/\s+/).map(p => {
            const parts = p.split(',');
            if (parts.length < 2) return null;
            return [parseFloat(parts[1]), parseFloat(parts[0])];
        }).filter(p => p && !isNaN(p[0]));
        
        if (points.length > maxCount) {
            maxCount = points.length;
            bestPoints = points;
        }
    }
    return bestPoints;
}

occurrences.forEach((occ, i) => {
    const seg = segments[occ.segIndex];
    process.stdout.write(`Processing: ${seg.name}... `);
    
    const start = occ.index;
    const end = (i + 1 < occurrences.length) ? occurrences[i+1].index : rotasTxt.length;
    
    const block = rotasTxt.substring(start, end);
    const coords = extractLineString(block);
    
    if (coords && coords.length > 2) {
        const entry = {
            id: `seg-${seg.type}-${occ.segIndex}`,
            nome: seg.name,
            cor: seg.color,
            coords: coords
        };
        if (seg.type === 'ete') finalETEs.push(entry);
        else finalRurais.push(entry);
        console.log(`OK (${coords.length} pts)`);
    } else {
        console.log(`FAILED (Block length: ${block.length})`);
    }
});

const output = `// Auto-generated from ROTAS.txt
const rotasETEs = ${JSON.stringify(finalETEs, null, 2)};

const rotasRurais = ${JSON.stringify(finalRurais, null, 2)};
`;

fs.writeFileSync('routes_data.js', output);
console.log('\nroutes_data.js update complete.');
