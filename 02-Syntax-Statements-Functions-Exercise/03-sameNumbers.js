function sameNumbers(number) {
    let digits = number.toString();
    let firstDigit = digits[0];
    let sumOfDigits = Number(firstDigit);
    let isSame = true

    for (let i = 1; i < digits.length; i ++) {
        if (digits[i] !== firstDigit) {
            isSame = false;
        }
        sumOfDigits += Number(digits[i])
    }

    console.log(isSame)
    console.log(sumOfDigits)
    

}

sameNumbers(2222222)
console.log('--------')
sameNumbers(1234)