function addItem() {
    let inputText = document.getElementById('newItemText');
    let liItem = document.createElement('li');
    let ul = document.getElementById('items');

    liItem.textContent = inputText.value
    ul.appendChild(liItem)

    inputText.value = '';

}


