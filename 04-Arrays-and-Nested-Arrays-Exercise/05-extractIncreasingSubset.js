function extractIncreasingSubsetFromArray(arr) {
    let biggerNumber = 0;
    let result = [];

    for (let currentNumber of arr) {
        if (currentNumber >= biggerNumber) {
            biggerNumber = currentNumber;
            result.push(biggerNumber);
        }
    }

    return result;
    // console.log(result);
}

extractIncreasingSubsetFromArray([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )

extractIncreasingSubsetFromArray(	[1, 
    2, 
    3,
    4]
    )

extractIncreasingSubsetFromArray([20, 
    3, 
    2, 
    15,
    6, 
    1]
    )