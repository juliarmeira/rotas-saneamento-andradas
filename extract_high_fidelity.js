const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('pontos.txt', 'utf8');

function extractCoordsFromSection(sectionContent) {
    // Look for the largest coordinates block in this section
    const lineStringRegex = /<LineString>[\s\S]*?<coordinates>([\s\S]*?)<\/coordinates>[\s\S]*?<\/LineString>/g;
    let match;
    let largestCoords = "";
    
    while ((match = lineStringRegex.exec(sectionContent)) !== null) {
        const coords = match[1].trim();
        if (coords.length > largestCoords.length) {
            largestCoords = coords;
        }
    }
    
    if (!largestCoords) return [];

    return largestCoords.split(/\s+/).filter(c => c.trim()).map(c => {
        const [lng, lat] = c.split(',').map(Number);
        return [lat, lng]; // Leaflet format
    });
}

// Split by markers
const parts = content.split(/campestrinho ate graminea|GRaminea ate o oleo/i);

const prefCamp = extractCoordsFromSection(parts[0]);
const campGram = parts[1] ? extractCoordsFromSection(parts[1]) : [];
const gramOleo = parts[2] ? extractCoordsFromSection(parts[2]) : [];

console.log(`Prefeitura -> Campestrinho: ${prefCamp.length} pontos`);
console.log(`Campestrinho -> Graminea: ${campGram.length} pontos`);
console.log(`Graminea -> Oleo: ${gramOleo.length} pontos`);

const output = {
    prefCamp,
    campGram,
    gramOleo
};

fs.writeFileSync('extracted_coords.json', JSON.stringify(output, null, 2));
console.log('Coordenadas salvas em extracted_coords.json');
