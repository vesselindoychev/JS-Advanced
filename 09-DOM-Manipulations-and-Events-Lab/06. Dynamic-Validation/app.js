function validate() {
    let email = document.getElementById('email');


    

    email.addEventListener('change', function (event) {
        let isUpper = false;
        let res = [];
        let buff = '';
        function charIsLetter(char) {
            if (typeof char !== 'string') {
              return false;
            }
          
            return char.toLowerCase() !== char.toUpperCase();
          }

        for (symbol of event.target.value) {
            if (symbol === '@' || symbol === '.') {
                res.push(buff)
                buff = ''
            } else {
                if (charIsLetter(symbol) === false) {
                    buff += symbol
                } else {
                    if (symbol.toUpperCase() === symbol) {
                        isUpper = true
                        break;
                    } else {
                        buff += symbol
                    }
                }
            }
        }
        if (isUpper === true) {
            event.target.classList.add('error')
        } else {
            if (buff) {
                res.push(buff)
            }
    
            if (res.length === 3) {
                event.target.value = ''
                event.target.classList.remove('error')
                // event.target.style.borderColor = 'gray'
            } else {
                event.target.classList.add('error');
            }
        }
        
    })
    
    
}