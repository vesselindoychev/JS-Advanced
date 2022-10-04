function lockedProfile() {
    let btns = Array.from(document.querySelectorAll('input[type=radio]'));
    let showTextBtns = Array.from(document.getElementsByTagName('button'));
    

    for (let btn of showTextBtns) {
        btn.addEventListener('click', reveal);
    }

    function reveal(event) {
        let hiddenDiv = event.target.parentElement.querySelector('div')
        
        let currentRadioBtn = document.querySelector('input[type=radio]:checked').value
        
        
        if (currentRadioBtn === 'unlock') {
            hiddenDiv.style.display = 'inline'
            event.target.textContent = 'Hide it'
            event.target.addEventListener('click', hide)
        }
    }

    function hide(event) {
        let hiddenDiv = event.target.parentElement.querySelector('div');
        // let hiddenDivInputs = Array.from(event.target.parentElement.querySelector('div').querySelectorAll('input'));
        let currentRadioBtn = document.querySelector('input[type=radio]:checked').value;

        if (currentRadioBtn === 'unlock') {
            hiddenDiv.style.display = 'none'
            event.target.textContent = 'Show more'
            event.target.removeEventListener('click', hide)
        }
    }

    


}