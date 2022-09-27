// function calc() {
//     let num1 = Number(document.getElementById('num1').value);
//     let num2 = Number(document.getElementById('num2').value);
    
//     let sum = num1 + num2;
//     document.getElementById('sum').value = sum;
// }

function calc() {
    let firstNumber = document.getElementById('num1').value;
    let secondNumber = document.getElementById('num2').value;
    
    let sum = Number(firstNumber) + Number(secondNumber);
    let result = document.getElementById('sum');
    result.value = sum;
    
}