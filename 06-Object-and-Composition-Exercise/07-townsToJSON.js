function townsToJSON(input) {
    let result = [];
    let townObj = {};

    for (let el of input) {
        let data = el.split(' | ');
        let town = data[0].substring(1).trim();
        let firstParam = data[1];
        let secondParam = data[2].substring(0, data[2].length - 1).trim();

        if (town === 'Town') {
            continue
        } else {
            firstParam = parseFloat(Number(firstParam).toFixed(2));
            secondParam = parseFloat(Number(secondParam).toFixed(2));
            townObj = {
                Town: town,
                Latitude: firstParam,
                Longitude: secondParam
            }
            
            result.push(townObj);
        }
        
    }
    console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)