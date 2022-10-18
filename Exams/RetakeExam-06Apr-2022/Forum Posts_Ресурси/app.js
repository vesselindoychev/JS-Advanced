window.addEventListener("load", solve);

function solve() {
  let titleInput = document.getElementById('post-title');
  let categoryInput = document.getElementById('post-category');
  let contentTextarea = document.getElementById('post-content');
  document.getElementById('publish-btn').addEventListener('click', publish);


  let reviewUl = document.getElementById('review-list');
  let clearBtn = document.getElementById('clear-btn').addEventListener('click', clear);


  function publish(event) {
    let titleValue = titleInput.value;
    let categoryValue = categoryInput.value;
    let contentValue = contentTextarea.value;

    if (!titleValue || !categoryValue || !contentValue) {
      return;
    }

    createPost(titleValue, categoryValue, contentValue);
    titleInput.value = '';
    categoryInput.value = '';
    contentTextarea.value = '';
  }

  function createPost(titleValue, categoryValue, contentValue) {

    let liItem = document.createElement('li');
    liItem.setAttribute('class', 'rpost');

    let articleItem = createArticle(titleValue, categoryValue, contentValue);
    
    // LOOK BUTTONS MAY BE THE FOLLOWING => btn.setAttribute('class', 'action-btn', 'edit') 

    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'action-btn edit');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', edit);

    let approveBtn = document.createElement('button');
    approveBtn.setAttribute('class', 'action-btn approve');
    approveBtn.textContent = 'Approve';
    approveBtn.addEventListener('click', approve);

    liItem.appendChild(articleItem);
    liItem.appendChild(approveBtn);
    liItem.appendChild(editBtn);

    reviewUl.appendChild(liItem);

    return liItem;
  }

  function createArticle(titleValue, categoryValue, contentValue) {
    let article = document.createElement('article');

    let headingTitle = document.createElement('h4');
    headingTitle.textContent = titleValue;

    let pCategory = document.createElement('p');
    pCategory.textContent = `Category: ${categoryValue}`;

    let pContent = document.createElement('p');
    pContent.textContent = `Content: ${contentValue}`;

    article.appendChild(headingTitle);
    article.appendChild(pCategory);
    article.appendChild(pContent);

    return article;
  }

  function edit(event) {
    
    let articleElements = event.target.parentElement.children[0];
    let title = articleElements.children[0];
    let category = (articleElements.children[1].textContent).split(': ')[1];
    let content = (articleElements.children[2].textContent).split(': ')[1];

    titleInput.value = title.textContent;
    categoryInput.value = category;
    contentTextarea.value = content;

    event.target.parentElement.remove();

    event.preventDefault();
  }

  function approve(event) {
    let publishedUl = document.getElementById('published-list');

    let articleElements = event.target.parentElement.children[0];
    let title = articleElements.children[0].textContent;
    let category = (articleElements.children[1].textContent).split(': ')[1];
    let content = (articleElements.children[2].textContent).split(': ')[1];

    event.target.parentElement.remove()
    // 
    let liItem = document.createElement('li');
    liItem.setAttribute('class', 'rpost');
    let articleItem = createArticle(title, category, content);

    liItem.appendChild(articleItem);

    publishedUl.appendChild(liItem);

    event.preventDefault();
  }

  function clear(event) {
    let publishedUl = document.getElementById('published-list');
    let child = publishedUl.lastElementChild;
    while (child) {
      publishedUl.removeChild(child);
      child = publishedUl.lastElementChild;
    }
    event.preventDefault();
  }

}
