function biggestElement(matrix) {
    let mainIndex = 0;
    let secondaryIndex = matrix[0].length - 1;
    let biggestNumber = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > biggestNumber) {
                biggestNumber = matrix[row][col]
            }
        }
    }

    return biggestNumber;
}

biggestElement([[20, 50, 10],
    [8, 33, 145]]
   )

biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   )