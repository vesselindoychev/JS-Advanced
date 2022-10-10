function solve(area, vol, input) {
    input = JSON.parse(input);
    let result = [];

    for (let row of input) {
        let calculatedArea = area.call(row);
        let calculatedVolume = vol.call(row);
        result.push({
            area: calculatedArea,
            volume: calculatedVolume
        });
    }

    return result;
}

let area = function area() {
    return Math.abs(this.x * this.y);
};


let vol = function vol() {
    return Math.abs(this.x * this.y * this.z);
};


let result = solve(
    area, 
    vol, 
    `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
)

console.log(result);
