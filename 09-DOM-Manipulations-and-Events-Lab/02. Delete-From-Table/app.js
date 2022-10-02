function deleteByEmail() {
    let inputEmail = document.querySelector('label input');
    let tableRows = document.querySelectorAll('tbody tr');
    let divResult = document.getElementById('result');

    for (let row of tableRows) {
        if (row.textContent.includes(inputEmail.value)) {
            row.remove()
            divResult.textContent = 'Deleted'
        } else {
            divResult.textContent = 'Not found.'
        }
    }

    // inputEmail.value = ''

    console.log(tableRows);

}


