const fs = require('fs');

const finalRoutes = JSON.parse(fs.readFileSync('final_routes.json', 'utf8'));
let routesData = fs.readFileSync('routes_data.js', 'utf8');

function updateRouteByNome(nome, newCoords) {
    // Regex matches the coords array block after a specific nome
    const regex = new RegExp(`(nome:\\s*['"]${nome}['"][\\s\\S]*?coords:\\s*\\[)([\\s\\S]*?)(\\])`, 'm');
    
    // Convert array to string and remove the outer [ and ]
    let coordsString = JSON.stringify(newCoords, null, 2);
    // Remove first [ and last ]
    coordsString = coordsString.trim().slice(1, -1).trim();
    
    routesData = routesData.replace(regex, `$1\n      ${coordsString}\n    $3`);
}

updateRouteByNome('Campestrinho → Distrito de Gramínea', finalRoutes['Campestrinho -> Graminea']);
updateRouteByNome('Distrito de Gramínea → Bairro do Óleo', finalRoutes['Graminea -> Oleo']);

// Split Prefeitura -> Campestrinho
const fullPrefCamp = finalRoutes['Prefeitura -> Campestrinho'];
const sjCachoeiraCoord = [-22.12876, -46.55870];

function findSplitIndex(coords, target) {
    let minIdx = 0;
    let minDist = Infinity;
    for (let i = 0; i < coords.length; i++) {
        const d = Math.hypot(coords[i][0] - target[0], coords[i][1] - target[1]);
        if (d < minDist) {
            minDist = d;
            minIdx = i;
        }
    }
    return minIdx;
}

const splitIdx = findSplitIndex(fullPrefCamp, sjCachoeiraCoord);
const prefSJ = fullPrefCamp.slice(0, splitIdx + 1);
const sjCamp = fullPrefCamp.slice(splitIdx);

updateRouteByNome('Prefeitura → S.J. da Cachoeira', prefSJ);
updateRouteByNome('S.J. Cachoeira → Campestrinho', sjCamp);

fs.writeFileSync('routes_data.js', routesData);
console.log('routes_data.js atualizado com sucesso (via nome)!');
