function create(words) {
   let mainDiv = document.getElementById('content')
   for (let word of words) {
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');
      pElement.textContent = word
      pElement.style.display = 'none'
      divElement.appendChild(pElement)
      mainDiv.appendChild(divElement)
   }

   console.log(mainDiv.children)

   for (let div of mainDiv.childNodes) {
      div.addEventListener('click', function (event) {
         let pElement = event.target.children[0]
         pElement.style.display = ''
      })
   }

   
}