function diagonalSums(matrix) {
    let mainIndex = 0;
    let secondaryIndex = matrix[0].length - 1;

    let mainSum = 0;
    let secondarySum = 0;

    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][mainIndex];
        secondarySum += matrix[row][secondaryIndex];

        mainIndex++;
        secondaryIndex--;
    }

    console.log(mainSum + ' ' + secondarySum);
}

diagonalSums([[20, 40],
    [10, 60]]
   )

diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   )