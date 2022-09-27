// function extractText() {
//     let listItems = document.querySelectorAll('ul li');
//     let textarea = document.getElementById('result');

//     for (let listItem of listItems) {
//         textarea.value += listItem.textContent + '\n';
//     }
// }


function extractText() {
    let textarea = document.getElementById('result');
    let listItems = document.querySelectorAll('li');

    for (let item of listItems) {
        textarea.value += item.textContent + '\n';
    }
    
}