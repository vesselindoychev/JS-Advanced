window.addEventListener('load', solve);

function solve() {
    let genreInput = document.getElementById('genre');
    let songNameInput = document.getElementById('name');
    let authorInput = document.getElementById('author');
    let dateInput = document.getElementById('date');
    let addBtn = document.getElementById('add-btn');
    let allHitsDiv = document.getElementsByClassName('all-hits-container')[0];
    let savedSongsDiv = document.getElementsByClassName('saved-container')[0];
    let divLikes = document.getElementsByClassName('likes')[0];
    let pLikes = divLikes.querySelectorAll('p')[0];

    
    addBtn.addEventListener('click', addData);

    function addData(event) {
        let genre = genreInput.value;
        let songName = songNameInput.value;
        let author = authorInput.value;
        let date = dateInput.value;
        debugger;
        if (!genre || !songName || !author || !date) {
            return event.preventDefault()
        }

        let hitsDiv = createDiv(genre, songName, author, date);

        let saveBtn = createBtn('save-btn', 'Save song');
        saveBtn.addEventListener('click', saveSong);

        let likeBtn = createBtn('like-btn', 'Like song');
        likeBtn.addEventListener('click', likeSong);

        let deleteBtn = createBtn('delete-btn', 'Delete')
        deleteBtn.addEventListener('click', deleteSong);


        hitsDiv.appendChild(saveBtn);
        hitsDiv.appendChild(likeBtn);
        hitsDiv.appendChild(deleteBtn);
        allHitsDiv.appendChild(hitsDiv);

        clearInputFields();
        debugger;
        event.preventDefault();
    }

    function createDiv(genre, songName, author, date) {
        let divItem = document.createElement('div');
        divItem.setAttribute('class', 'hits-info');

        let image = document.createElement('img');
        image.src = './static/img/img.png';

        let genreHeading = document.createElement('h2');
        genreHeading.textContent = `Genre: ${genre}`;

        let songNameHeading = document.createElement('h2');
        songNameHeading.textContent = `Name: ${songName}`;

        let authorHeading = document.createElement('h2');
        authorHeading.textContent = `Author: ${author}`;

        let dateHeading = document.createElement('h3');
        dateHeading.textContent = `Date: ${date}`

        divItem.appendChild(image);
        divItem.appendChild(genreHeading);
        divItem.appendChild(songNameHeading);
        divItem.appendChild(authorHeading);
        divItem.appendChild(dateHeading);
       

        return divItem;

    }

    function saveSong(event) {
        let parent = event.target.parentElement;

        let genre = parent.children[1].textContent.split(': ')[1];
        let songName = parent.children[2].textContent.split(': ')[1];
        let author = parent.children[3].textContent.split(': ')[1];
        let date = parent.children[4].textContent.split(': ')[1];

        let hitsDiv = createDiv(genre, songName, author, date);

        let deleteBtn = createBtn('delete-btn', 'Delete');
        deleteBtn.addEventListener('click', deleteSong);

        hitsDiv.appendChild(deleteBtn);
        savedSongsDiv.appendChild(hitsDiv);

        parent.remove();
        event.preventDefault();
    }

    function deleteSong(event) {
        let parent = event.target.parentElement;
        parent.remove()

        event.preventDefault()
    }

    function likeSong(event) {
        let likes = Number(pLikes.textContent.split(': ')[1])
        let text = pLikes.textContent.split(': ')[0]
        likes += 1
        pLikes.textContent = `${text}: ${likes}`
        
        event.target.disabled = true;


        event.preventDefault();
    }

    function createBtn(className, text) {
        let btn = document.createElement('button');
        btn.setAttribute('class', className);
        btn.textContent = text;
        return btn;
    }

    function clearInputFields() {
        genreInput.value = '';
        songNameInput.value = '';
        authorInput.value = '';
        dateInput.value = '';
    }
}