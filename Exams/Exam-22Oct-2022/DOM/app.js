window.addEventListener("load", solve);

function solve() {
  let firstNameInput = document.getElementById('first-name');
  let lastNameInput = document.getElementById('last-name');
  let ageInput = document.getElementById('age');
  let storyTitleInput = document.getElementById('story-title');
  let genreSelect = document.getElementById('genre');
  let storyTextInput = document.getElementById('story');
  let previewUl = document.getElementById('preview-list');
  let mainDiv = document.getElementById('main');


  let publishBtn = document.getElementById('form-btn');


  publishBtn.addEventListener('click', publishData) 

  function publishData(event) {
    event.preventDefault();

    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let age = ageInput.value;
    let genre = genreSelect.value;
    let title = storyTitleInput.value;
    let text = storyTextInput.value;

    if (!firstName || !lastName || !age || !title || !text) {
      return event.preventDefault();
    }

    let liItem = createLi(firstName, lastName, age, genre, title, text);
    previewUl.appendChild(liItem);

    clearInputs();
    event.target.disabled = true;
    
  }

  function createLi(firstName, lastName, age, genre, title, text) {
    let liItem = document.createElement('li');
    liItem.setAttribute('class', 'story-info');

    let article = document.createElement('article');

    let fullNameHeading = document.createElement('h4');
    fullNameHeading.textContent = `Name: ${firstName} ${lastName}`;

    let ageP = document.createElement('p');
    ageP.textContent = `Age: ${age}`;

    let titleP = document.createElement('p');
    titleP.textContent = `Title: ${title}`;

    let genreP = document.createElement('p');
    genreP.textContent = `Genre: ${genre}`;

    let textP = document.createElement('p');
    textP.textContent = text;

    article.appendChild(fullNameHeading);
    article.appendChild(ageP);
    article.appendChild(titleP);
    article.appendChild(genreP);
    article.appendChild(textP);

    let saveBtn = createBtn('save-btn', 'Save Story');
    saveBtn.addEventListener('click', saveData);
    
    let editBtn = createBtn('edit-btn', 'Edit Story');
    editBtn.addEventListener('click', editData);

    let deleteBtn = createBtn('delete-btn', 'Delete Story');
    deleteBtn.addEventListener('click', deleteData);

    liItem.appendChild(article);
    liItem.appendChild(saveBtn);
    liItem.appendChild(editBtn);
    liItem.appendChild(deleteBtn);

    return liItem;
  }

  function deleteData(event) {
    event.preventDefault();

    let parent = event.target.parentElement;
    parent.remove();

    publishBtn.disabled = false;
  }

  function saveData(event) {
    event.preventDefault();

    for (let divChild of Array.from(mainDiv.children)) {
      divChild.remove()
    }

    let heading = document.createElement('h1');
    heading.textContent = "Your scary story is saved!"
    mainDiv.appendChild(heading);

  }

  function editData(event) {
    event.preventDefault();

    let parent = event.target.parentElement;
    let currentArticle = parent.querySelectorAll('article')[0];
    let btns = parent.querySelectorAll('button');

    let fullName = currentArticle.children[0].textContent.split(': ')[1];
    let fname = fullName.split(' ')[0];
    let lname = fullName.split(' ')[1];

    let age = currentArticle.children[1].textContent.split(': ')[1];
    let title = currentArticle.children[2].textContent.split(': ')[1];
    let genre = currentArticle.children[3].textContent.split(': ')[1];
    let text = currentArticle.children[4].textContent

    firstNameInput.value = fname;
    lastNameInput.value = lname;
    ageInput.value = age;
    storyTitleInput.value = title;
    genreSelect.value = genre;
    storyTextInput.value = text;

    for (let btn of Array.from(btns)) {
      btn.disabled = true;
    }
    
    publishBtn.disabled = false;
    parent.remove();
    
  }

  function createBtn(className, btnText) {
    let btn = document.createElement('button');
    btn.setAttribute('class', className);
    btn.textContent = btnText;

    return btn;
  }

  function clearInputs() {
    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    storyTitleInput.value = '';
    storyTextInput.value = '';
  }
}
