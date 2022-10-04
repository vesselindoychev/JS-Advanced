function addItem() {
    let textInput = document.getElementById('newItemText');
    let valueInput = document.getElementById('newItemValue');
    let selectText = document.getElementById('menu');
    // let btn = document.querySelector('input[type=button]');
    // btn.addEventListener('click', function (event) {
    let optionText = document.createElement('option');
    optionText.textContent = textInput.value;
    optionText.value = valueInput.value;

    selectText.appendChild(optionText);
    valueInput.value = ''
    textInput.value = ''
    // })
    // console.log(document.querySelector('input[type=button]'))
    // function add(event) {
        
    // }
    
    
    // console.log()
}