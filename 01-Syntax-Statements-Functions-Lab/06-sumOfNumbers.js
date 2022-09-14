function sumOfNumbers(firstNumber, secondNumber) {
    
    let result = 0
    firstNumber = Number(firstNumber)
    secondNumber = Number(secondNumber)

    for (let i = firstNumber; i < secondNumber + 1; i++) {
        result += i;
    }

    console.log(result);
}

sumOfNumbers('1', '5')
sumOfNumbers('-8', '20')

