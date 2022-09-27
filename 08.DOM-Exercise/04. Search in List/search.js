function search() {
   let listItems = document.querySelectorAll('li');
   let seacrhedWords = document.getElementById('searchText').value;
   let result = [];
   let foundMatches = document.getElementById('result');
   let btn = document.getElementsByTagName('button');

   for (let liItem of listItems) {
      let city = liItem.textContent;

      if (city.includes(seacrhedWords)) {
         result.push(1);
         liItem.style.fontWeight = 'bold';
         liItem.style.textDecoration = 'underline';
         
      }
   }
   foundMatches.textContent = `${result.length} matches found`;
   
}
