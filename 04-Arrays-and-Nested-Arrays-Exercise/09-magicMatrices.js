function magicMatrix(matrix) {
    let initialValue = 0;
    
    for (row = 0; row < matrix.length - 1; row++) {
        let sumFirstRow = matrix[row].reduce((acc, el) => acc + el);
        let sumSecondRow = matrix[row + 1].reduce((acc, el) => acc + el);
        let sumColOne = 0;
        let sumColTwo = 0;

        for (col = 0; col < matrix.length; col++) {
            sumColOne += matrix[row][col];
            sumColTwo += matrix[row + 1][col];
            
        }

        if (sumFirstRow !== sumSecondRow || sumColOne !== sumColTwo) {
            return false
        }
    }
    return true
}

console.log(magicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ))

console.log(magicMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ))

console.log(magicMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ))