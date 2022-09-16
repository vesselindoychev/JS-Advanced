function validityChecker(x1, y1, x2, y2) {
    let result;
    let formula;
    let arr = [x1, y1, x2, y2];
    
    for (let i = 0; i < 3; i++) {
        
        x1 = arr[0];
        y1 = arr[1];
        x2 = arr[2];
        y2 = arr[3];
        if (i == 0) {
            x2 = 0;
            y2 = 0;
            formula = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
            result = Number.isInteger(formula);
            filteredResult = result == false ? `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid` : `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
            console.log(filteredResult)
        } else if (i == 1) {
            x1 = 0;
            y1 = 0;
            formula = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
            result = Number.isInteger(formula);
            filteredResult = result == false ? `{${x2}, ${y2}} to {${x1}, ${y1}} is invalid` : `{${x2}, ${y2}} to {${x1}, ${y1}} is valid`;
            console.log(filteredResult)
        } else {
            formula = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
            result = Number.isInteger(formula);
            filteredResult = result == false ? `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid` : `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
            console.log(filteredResult)
       
        }
    }
}


validityChecker(3, 0, 0, 4)
console.log('-----')
validityChecker(2, 1, 1, 1)