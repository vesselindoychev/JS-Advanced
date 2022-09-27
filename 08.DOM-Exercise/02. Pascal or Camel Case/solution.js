function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  text = text.split(' ');
  let result = '';
  let brakeBool = false;
  for (let i = 0; i < text.length; i++) {

    if (brakeBool) {
      break;
    }

    let newWord = text[i].toLowerCase();
    


    switch (convention) {
      case 'Camel Case':
        if (i === 0) {
          result += newWord;
          break;
        } else {
          result += newWord[0].toUpperCase() + newWord.substring(1);
          break;
        }
      case 'Pascal Case':
        result += newWord[0].toUpperCase() + newWord.substring(1);
        break;
      default:
        result += 'Error!';
        brakeBool = true;
        break;
    }
  }

  document.getElementById('result').textContent = result;
}