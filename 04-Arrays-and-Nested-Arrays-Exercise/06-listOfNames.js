function listOfNames(arr) {
    let order = 0;
    let result = [];
    let sortedArr = arr.sort((a, b) => a.localeCompare(b))
    
    for (let name of sortedArr) {
        order ++;
        result.push(`${order}.${name}`)
    }

    console.log(result.join('\n'))
}


listOfNames(["John", "Bob", "Christina", "Ema", 'bill'])