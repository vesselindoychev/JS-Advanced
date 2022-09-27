function toggle() {
    let btn = document.getElementsByClassName('button')[0];
    let extraText = document.getElementById('extra');

    
    

    if (extraText.style.display === 'block') {
        extraText.style.display = 'none';
        btn.innerHTML = 'More'
    } else {
        extraText.style.display = 'block';
        extraText.children.textContent;
        btn.innerHTML = 'Less';
    }
        
}