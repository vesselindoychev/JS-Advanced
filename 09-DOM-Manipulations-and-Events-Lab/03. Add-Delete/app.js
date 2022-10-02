function addItem() {
    let textInput = document.getElementById('newItemText');
    let ulItem = document.getElementById('items');
    let liItem = document.createElement('li');
    let aTag = document.createElement('a');
    aTag.href = '#'

    liItem.textContent = textInput.value
    aTag.textContent = '[Delete]';
    ulItem.appendChild(liItem)
    liItem.appendChild(aTag)

    aTag.addEventListener('click', function (event) {
        event.target.parentElement.remove()
    })

    textInput.value = ''
}


