function rectangle (width, height, color) {
    function colorFunc() {
        return color[0].toUpperCase() + color.substring(1)
    }
    
    
    return {
        width, 
        height,
        color: colorFunc(),
        calcArea() {
            return width * height;
        }
    };
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
