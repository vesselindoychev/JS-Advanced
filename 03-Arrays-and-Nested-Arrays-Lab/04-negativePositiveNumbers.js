function negativePositiveNumbers(numbers) {
    let filteredNumbers = [];

    for (let num of numbers) {
        if (num >= 0) {
            filteredNumbers.push(num);
        } else {
            filteredNumbers.unshift(num);
        }
    }

    
    console.log(filteredNumbers.join('\n'))
}

// negativePositiveNumbers([7, -2, 8, 9])
negativePositiveNumbers([3, -2, 0, -1])