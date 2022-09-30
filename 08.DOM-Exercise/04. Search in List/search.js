function search() {
   let listItems = document.querySelectorAll('li');
   let seacrhedWords = document.getElementById('searchText').value;
   let result = [];
   let foundMatches = document.getElementById('result');
   for (let liItem of listItems) {
      
      let city = liItem.textContent;


      if (city.includes(seacrhedWords)) {
         result.push(1);
         liItem.style.fontWeight = 'bold';
         liItem.style.textDecoration = 'underline';
      } else {
         liItem.style.fontWeight = '400';
         liItem.style.textDecoration = 'none';
      }
      
   }
   
   foundMatches.textContent = `${result.length} matches found`;
}
