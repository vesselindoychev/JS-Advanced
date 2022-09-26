function jansNotation(arr) {
    let numbers = [];
    let operations = [];
    
    for (let el of arr) {
        if (typeof (el) === 'number') {
            numbers.push(el);
        } else {
            operations.push(el)
            if (numbers.length > 1) {
                let numbersLength = numbers.length;
                let operator = el;
                let firstNum = numbers[numbersLength - 2];
                let secondNum = numbers[numbersLength - 1];
                let sum = 0;

                switch (operator) {
                    case '+':
                        sum = firstNum + secondNum;
                        break
                    case '-':
                        sum = firstNum - secondNum;
                        break;
                    case '*':
                        sum = firstNum * secondNum;
                        break;
                    case '/':
                        sum = firstNum / secondNum;
                }
                operations.pop();
                numbers.splice(numbersLength - 2, 2);
                numbers.push(sum);

            }
        }
        
    }

    if (numbers.length > 1) {
        console.log('Error: too many operands!')
    } else if (operations.length > 0) {
        console.log('Error: not enough operands!')
    } else {
        console.log(numbers[0]);
    }   
}

jansNotation(
    [5,
        3,
        4,
        '*',
        '-']

)

jansNotation(
    [3,
        4,
        '+']

)

jansNotation([7,
    33,
    8,
    '-']
)

jansNotation([15,
    '/']
)

jansNotation(
    [31, 2, '+', 11, '/']
)

jansNotation([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/'])