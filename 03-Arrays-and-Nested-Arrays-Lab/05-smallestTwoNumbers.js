function smallestTwoNumbers(numbers) {
    let sortedNumbers = numbers.sort((a, b) => a - b);
    let result = sortedNumbers.slice(0, 2);
    
    console.log(result.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5])
smallestTwoNumbers([3, 0, 10, 4, 7, 3])