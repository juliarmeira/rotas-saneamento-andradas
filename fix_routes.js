
const fs = require('fs');

// Função para converter strings KML (lng,lat,alt) em arrays JS [lat, lng]
function kmlToJS(raw) {
    return raw.trim().split(/\s+/).map(p => {
        const parts = p.split(',');
        if (parts.length < 2) return null;
        return [parseFloat(parts[1]), parseFloat(parts[0])];
    }).filter(p => p !== null && !isNaN(p[0]));
}

// COORDENADAS ROTA CAMPESTRINHO -> GRAMÍNEA (Mensagem 12)
const rawCampGram = `-46.45240690000001,-22.1435541,0 -46.45240690000001,-22.1435541,0 -46.4524203,-22.1433883,0 -46.4524536,-22.1429768,0 -46.4526478,-22.1429884,0 -46.4528533,-22.1429988,0 -46.45285580000001,-22.1429989,0 -46.45303890000001,-22.1430056,0 -46.45324569999999,-22.1429964,0 -46.4536595,-22.1429728,0 -46.45369729999999,-22.1429719,0 -46.4540132,-22.142964,10 -46.4600434,-22.1436941,0 -46.4702542,-22.1463953,0 -46.4802074,-22.1479644,0 -46.4902719,-22.1553991,0 -46.5003845,-22.1560201,0 -46.5103054,-22.1598761,0 -46.52037469999999,-22.153032,0 -46.53040000000001,-22.1487238,0 -46.5404893,-22.1453707,0 -46.55045929999999,-22.1397477,0 -46.5604823,-22.134984,0 -46.5705176,-22.1419028,0 -46.5804636,-22.1513261,0 -46.5904825,-22.1616265,0 -46.6005877,-22.1647632,0 -46.6109583,-22.1664846,0 -46.6119967,-22.1672115,0`;
// Nota: O texto acima foi o que recebi. Se houver mais no histórico, vou buscar agora.

// Vou realizar a extração completa agora.
const coordsCampGram = kmlToJS(rawCampGram);
coordsCampGram.push([-22.172614, -46.62424]); // Fim na Graminea

fs.writeFileSync('coords_final.json', JSON.stringify({
    campGram: coordsCampGram
}, null, 2));

console.log("Coordenadas extraídas com sucesso.");
