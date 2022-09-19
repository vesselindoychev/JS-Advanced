function sumFirstLast(arr) {
    let firstEl = Number(arr[0]);
    let lastEl = Number(arr[arr.length - 1]);

    return firstEl + lastEl
}

sumFirstLast(['20', '30', '40'])