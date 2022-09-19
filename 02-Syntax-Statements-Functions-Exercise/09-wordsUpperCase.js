function upperCase(text) {
    let specialChars = [',', '?', '!', ' ', '.'];
    let filteredWord = '';
    let wordsArr = [];
    for (let ch of text) {
        if (specialChars.includes(ch)) {
            if (filteredWord.length >= 1) {
                wordsArr.push(filteredWord)
                filteredWord = '';
            }
            continue
        } else {
            filteredWord += ch.toUpperCase();

        }

    }
    
    if (filteredWord.length > 0) {
        wordsArr.push(filteredWord);
    
    }

    wordsArr = wordsArr.filter(e => String(e).trim());
    console.log(wordsArr.join(', '));
}

upperCase('Hi, how are you?')
upperCase('hello')
upperCase('Functions in JS can be nested, i.e. hold other functions')