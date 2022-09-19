function biggerHalf(arr) {
    let filteredArr = arr.sort((a, b) => a - b);
    index = Math.floor(filteredArr.length / 2);
    
    return filteredArr.slice(index, filteredArr.length)
}

biggerHalf([4, 7, 2, 5])
biggerHalf([3, 19, 14, 7, 2, 19, 6])