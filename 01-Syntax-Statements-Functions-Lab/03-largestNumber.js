function largestNumber(...params) {
    let largestNumber = params[0];

    for(let i = 1; i < params.length; i++) {
        if (largestNumber < params[i]) {
            largestNumber = params[i]
        }
    }

    console.log(`The largest number is ${largestNumber}.`)
}

largestNumber(5, -3, 16)
largestNumber(-3, -5, -22.5)
