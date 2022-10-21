
function solve(){
   let authorInput = document.getElementById('creator');
   let titleInput = document.getElementById('title');
   let categoryInput = document.getElementById('category');
   let contentInput = document.getElementById('content');
   let btnCreate = document.getElementsByClassName('btn create')[0];
   let postSection = document.getElementsByClassName('site-content')[0].children[0].children[0];
   

   btnCreate.addEventListener('click', createPost)

   function createPost(event) {
      

      let author = authorInput.value;
      let title = titleInput.value;
      let category = categoryInput.value;
      let content = contentInput.value; 

      if (!author || !title || !category || !content) {
         return event.preventDefault();
      }

      let article = createArticle(title, category, author, content);
      postSection.appendChild(article);
      // clearInputs();
      event.preventDefault();
      

   }

   function createArticle(title, category, author, content) {
      let article = document.createElement('article');

      let titleHeading = document.createElement('h1');
      titleHeading.textContent = title;

      let categoryP = document.createElement('p');
      let categoryStrong = document.createElement('strong');
      categoryStrong.textContent = category;
      categoryP.textContent = 'Category:';
      categoryP.appendChild(categoryStrong);

      let authorP = document.createElement('p');
      authorP.textContent = 'Creator:';
      let authorStrong = document.createElement('strong');
      authorStrong.textContent = author;
      authorP.appendChild(authorStrong);

      let contentP = document.createElement('p');
      contentP.textContent = content;

      let divBtns = document.createElement('div');
      divBtns.setAttribute('class', 'buttons');

      let deleteBtn = createBtn('btn delete', 'Delete');
      deleteBtn.addEventListener('click', deleteData);

      let archiveBtn = createBtn('btn archive', 'Archive');
      archiveBtn.addEventListener('click', archiveData);

      divBtns.appendChild(deleteBtn);
      divBtns.appendChild(archiveBtn);

      article.appendChild(titleHeading);
      article.appendChild(categoryP);
      article.appendChild(authorP);
      article.appendChild(contentP);
      article.appendChild(divBtns);

      return article;
   }

   function archiveData(event) {
      event.preventDefault();
      let titles = [];
      let ol = document.getElementsByClassName('archive-section')[0];
      let ol2 = ol.querySelectorAll('ol')[0];
      let title = event.target.parentElement.parentElement;
      let title2 = title.querySelectorAll('h1')[0];
      let parent = event.target.parentElement.parentElement;

      let liItem = document.createElement('li');
      liItem.textContent = title2.textContent;

      for (let li of Array.from(ol2.children)) {
         titles.push(li.textContent);
      }

      for (let liT of Array.from(ol2.children)){
         liT.remove();
      }

      titles.push(liItem.textContent);
      titles = titles.sort((a, b) => a.localeCompare(b));

      for (let t of titles) {
         let doneLi = document.createElement('li');
         doneLi.textContent = t;
         ol2.appendChild(doneLi);
      }

      
      
      
      parent.remove();
   }

   function deleteData(event) {
      event.preventDefault();

      let parent = event.target.parentElement.parentElement;
      parent.remove();
   }

   function createBtn(className, text) {
      let btn = document.createElement('button');
      btn.setAttribute('class', className);
      btn.textContent = text;

      return btn;
   }
}