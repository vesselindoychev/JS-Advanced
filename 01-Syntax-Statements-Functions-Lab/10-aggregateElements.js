function aggregateElements(array) {
    let sumOfElements = 0;
    let sumOfInverseElements = 0;
    let concatText = "";

    for (let i = 0; i < array.length; i++) {
        sumOfElements += array[i];
        sumOfInverseElements += 1 / array[i];
        concatText += array[i];
    }

    console.log(sumOfElements);
    console.log(sumOfInverseElements);
    console.log(concatText);
}

aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])