// function solve() {
//     let addBtn = document.getElementById('add');
//     let openSection = document.querySelectorAll('section')[1];
//     let openSectionDiv = openSection.children[1];
    


//     let taskInput = document.getElementById('task');
//     let descriptionTextArea = document.getElementById('description');
//     let dueDateInput = document.getElementById('date');
//     let inputsArr = [taskInput, descriptionTextArea, dueDateInput];

//     addBtn.addEventListener('click', function (event) {
//         let isBlank = false;
//         for (let input of inputsArr) {
//             if (input.value === '') {
//                 isBlank = true;
//                 break;
//             }
//         }

//         if (!isBlank) {
//             let openArticle = document.createElement('article');

//             let header = document.createElement('h3');
//             header.textContent = taskInput.value;
//             openArticle.appendChild(header);

//             let descP = document.createElement('p');
//             descP.textContent = descriptionTextArea.value;
//             openArticle.appendChild(descP);

//             let dateP = document.createElement('p');
//             dateP.textContent = dueDateInput.value;
//             openArticle.appendChild(dateP);

//             let innerDiv = document.createElement('div');
//             innerDiv.setAttribute('class', 'flex')
//             openArticle.appendChild(innerDiv);

//             let startBtn = document.createElement('button');
//             startBtn.addEventListener('click', move)
//             startBtn.setAttribute('class', 'green');
//             startBtn.textContent = 'Start'
//             let deleteBtn = document.createElement('button');
//             deleteBtn.setAttribute('class', 'red');
//             deleteBtn.textContent = 'Delete'

//             innerDiv.appendChild(startBtn);
//             innerDiv.appendChild(deleteBtn);


//             openSectionDiv.appendChild(openArticle)
//         }

//     })

//     let startBtn = document.querySelector('.green')[1]
//     console.log(startBtn)
    

    
// }

function solve() {
    let taskElement = document.querySelector('#task');
    let descriptionElement = document.querySelector('#description');
    let dateElement = document.querySelector('#date');
    let addButtonElement = document.querySelector('#add');

    let sections = document.querySelectorAll('section');
    let openSection = sections[1];
    let inProgressSection = sections[2];
    let completeSection = sections[3];

    addButtonElement.addEventListener('click', addTask);

    function createElement(type, text, className) {
        let result = document.createElement(type);
        result.textContent = text;

        if (className) {
            result.className = className;
        }
        return result;
    }

    function addTask(e) {
        e.preventDefault();

        if (taskElement.value === '' || descriptionElement.value === '' || dateElement.value === '') {
            return;
        }

        let articleCreate = createElement('article');
        let h3Create = createElement('h3', taskElement.value);
        let p1Create = createElement('p', 'Description: ' + descriptionElement.value);
        let p2Create = createElement('p', 'Due Date: ' + dateElement.value);
        let divCreate = createElement('div', undefined, 'flex');

        let startButton = createElement('button', 'Start', 'green');
        let deleteButton = createElement('button', 'Delete', 'red');

        articleCreate.appendChild(h3Create);
        articleCreate.appendChild(p1Create);
        articleCreate.appendChild(p2Create);

        divCreate.appendChild(startButton);
        divCreate.appendChild(deleteButton);
        articleCreate.appendChild(divCreate);

        openSection.children[1].appendChild(articleCreate);
        
        taskElement.value = '';
        descriptionElement.value = '';
        dateElement.value = '';

        startButton.addEventListener('click', () => {
            inProgressSection.children[1].appendChild(articleCreate);
            let finishButton = createElement('button', 'Finish', 'orange');
            divCreate.appendChild(finishButton);
            startButton.remove();

            finishButton.addEventListener('click', () => {
                completeSection.children[1].appendChild(articleCreate);
                divCreate.remove();
            })
        });

        deleteButton.addEventListener('click', () => {
            articleCreate.remove();
        });
    }
}