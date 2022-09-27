function extract(content) {
    let openingSymbol = '(';
    let closingSymbol = ')';
    let result = [];
    let openingIndex = 0;
    closingIndex = 0;
    let text = document.getElementById('content').textContent;
    
    for (let i = 0; i < text.length; i++) {
        if (text[i] === openingSymbol) {
            openingIndex = i;
        } else if (text[i] === closingSymbol) {
            closingIndex = i;
            result.push(text.slice(openingIndex + 1, closingIndex));
        }
    }
    return result.join('; ');
    
}