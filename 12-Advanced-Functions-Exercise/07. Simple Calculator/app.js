function calculator() {
    let selector1;
    let selector2;
    let resultSelector;

    let calcAction =   {
        init: (firstSelector, secondSelector, selectorResult) => {
            selector1 = document.querySelector(firstSelector);
            selector2 = document.querySelector(secondSelector);
            resultSelector = document.querySelector(selectorResult);
        },
        add: () => {
            let firstNumber = Number(selector1.value);
            let secondNumber = Number(selector2.value);
            resultSelector.value = firstNumber + secondNumber;
            
        },
        subtract: () => {
            let firstNumber = Number(selector1.value);
            let secondNumber = Number(selector2.value);
            resultSelector.value = firstNumber - secondNumber;
        }
    }
    return calcAction
    
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 



