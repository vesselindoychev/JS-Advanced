function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableRows = document.querySelectorAll('tbody tr');
      let searchedWord = document.getElementById('searchField');
      
      for (let row of tableRows) {
         row.className = ''
         if (row.textContent.includes(searchedWord.value)) {
            row.className = 'select'
         }
      }
      
      searchedWord.value = '';
   }
   
}