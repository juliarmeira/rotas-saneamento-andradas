const fs = require('fs');

const content = fs.readFileSync('pontos.txt', 'utf8');

function getAllRoutes(text) {
    const regex = /<name>([\s\S]*?)<\/name>[\s\S]*?<LineString>[\s\S]*?<coordinates>([\s\S]*?)<\/coordinates>/g;
    let match;
    const routes = [];
    while ((match = regex.exec(text)) !== null) {
        const name = match[1].trim();
        const coordsStr = match[2].trim();
        const pts = coordsStr.split(/\s+/).filter(c => c.trim());
        if (pts.length > 50) {
            routes.push({ name, count: pts.length, start: pts[0], end: pts[pts.length-1] });
        }
    }
    return routes;
}

const allRoutes = getAllRoutes(content);
console.log(JSON.stringify(allRoutes, null, 2));
