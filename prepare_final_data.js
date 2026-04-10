const fs = require('fs');

const content = fs.readFileSync('pontos.txt', 'utf8');

function extractCoordsByName(name, minPoints) {
    const regex = new RegExp(`<name>\\s*${name}\\s*<\\/name>[\\s\\S]*?<LineString>[\\s\\S]*?<coordinates>([\\s\\S]*?)<\\/coordinates>`, 'g');
    let match;
    let best = null;
    while ((match = regex.exec(content)) !== null) {
        const pts = match[1].trim().split(/\s+/).filter(c => c.trim()).map(c => {
            const [lng, lat] = c.split(',').map(Number);
            return [lat, lng];
        });
        if (pts.length >= minPoints && (!best || pts.length > best.length)) {
            best = pts;
        }
    }
    return best;
}

const prefCamp = extractCoordsByName("MG-455", 1500);
// For campGram, the name is just "Estr. Campestrinho" in the 2388 pts version
const campGram = extractCoordsByName("Estr. Campestrinho", 2000);
const gramOleo = extractCoordsByName("Saída p/ Andradas", 1800);

console.log('Result sizes:', prefCamp?.length, campGram?.length, gramOleo?.length);

const result = {
    "Prefeitura -> Campestrinho": prefCamp,
    "Campestrinho -> Graminea": campGram,
    "Graminea -> Oleo": gramOleo
};

fs.writeFileSync('final_routes.json', JSON.stringify(result, null, 2));
