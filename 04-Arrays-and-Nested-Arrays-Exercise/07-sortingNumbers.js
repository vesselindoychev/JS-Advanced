function solve(arr) {
    let arrLen = arr.length;
    let sortedArrInAsc = arr.sort((a, b) => a - b);
    // console.log(sortedArrInAsc);
    let filteredArr = [];
    for (let i = 0; i < arrLen / 2; i++) {
        filteredArr.push(arr.shift());
        filteredArr.push(arr.pop());
    }

    // console.log(filteredArr);
    return filteredArr;
}


solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])