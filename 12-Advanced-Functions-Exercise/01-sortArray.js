function solve(arr, text) {
    if (text === 'asc') {
        arr = arr.sort((a, b) => a - b)
    } else {
        arr = arr.sort((a, b) => b - a)
    }

    return arr;
}

solve([14, 7, 17, 6, 8], 'asc')
solve([14, 7, 17, 6, 8], 'desc')