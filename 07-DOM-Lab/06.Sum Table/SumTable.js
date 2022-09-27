function sumTable() {
    let rows = document.querySelectorAll('tr');
    let sum = 0;
    let result = document.getElementById('sum');
    for (let i = 1; i < rows.length - 1; i++) {
        let price = Number(rows[i].children[1].textContent);
        sum += price;
    }
    result.textContent = sum;
}