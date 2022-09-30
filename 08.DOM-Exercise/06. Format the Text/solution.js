function solve() {
  let textarea = document.getElementById('input').value;
  let div = document.getElementById('output');
  div.innerHTML = '';
  let splittedText = textarea.split('.').filter(x=> x.length > 0);
  
  for (let i = 0; i < splittedText.length; i+= 3) {
    let result = [];
    for (let x = 0; x < 3; x++) {
      if (splittedText[i + x]) {
        result.push(splittedText[i + x]);
      }
    }
    let resultText = result.join('. ') + '.';
    div.innerHTML += `<p>${resultText}</p>`;
  }
  
}