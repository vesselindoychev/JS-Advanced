function subtract() {

    let firstInput = document.getElementById('firstNumber').disabled = false;
    let secondInput = document.getElementById('secondNumber').disabled = false;
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;

    firstNumber.disabled = false;

    let sum = Number(firstNumber) - Number(secondNumber);
    document.getElementById('result').textContent = sum;
}