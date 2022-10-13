function notify(message) {
  let divItem = document.getElementById('notification');
  divItem.textContent = message
  divItem.style.display = 'block';
  
  divItem.addEventListener('click', function(event) {
    divItem.style.display = 'none'
    
  }) 
 
}