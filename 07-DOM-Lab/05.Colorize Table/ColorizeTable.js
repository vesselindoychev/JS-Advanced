function colorize() {
    let rows = document.querySelectorAll('tr');
    
    for (let i = 1; i < rows.length; i ++) {
        if (i % 2 !== 0) {
            rows[i].style.background = 'Teal'
        }
        console.log(rows[i]);
    }

    
}