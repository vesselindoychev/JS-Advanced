// window.addEventListener("load", solve);

function solve() {
    let firsNameInput = document.getElementById('fname');
    let lastNameInput = document.getElementById('lname');
    let emailinput = document.getElementById('email');
    let dateOfBirthInput = document.getElementById('birth');
    let positionInput = document.getElementById('position');
    let salaryInput = document.getElementById('salary');
    let hireBtn = document.getElementById('add-worker');
    let budget = document.getElementById('sum');

    hireBtn.addEventListener('click', hireWorker);

    function hireWorker(event) {
        let tableBody = document.getElementById('tbody');
        

        let fName = firsNameInput.value;
        let lName = lastNameInput.value;
        let email = emailinput.value;
        let dateOfBirth = dateOfBirthInput.value;
        let position = positionInput.value;
        let salary = salaryInput.value;
        
        if (!fName || !lName || !email || !dateOfBirth || !position || !salary) {
            return event.preventDefault()
        }
       
        let trItem = createTableRow(fName, lName, email, dateOfBirth, position, salary);
        tableBody.appendChild(trItem)

        let sum = 0;
        for (let tr of tableBody.children) {
            sum += Number(tr.children[5].textContent);
        }

        budget.textContent = sum.toFixed(2);


        firsNameInput.value = '';
        lastNameInput.value = '';
        emailinput.value = '';
        dateOfBirthInput.value = '';
        positionInput.value = '';
        salaryInput.value = '';


        event.preventDefault();
    }

    function createTableRow(fName, lName, email, dateOfBirth, position, salary) {
        let trItem = document.createElement('tr');

        let fNameTd = document.createElement('td');
        fNameTd.textContent = fName;

        let lNameTd = document.createElement('td');
        lNameTd.textContent = lName;

        let emailTd = document.createElement('td');
        emailTd.textContent = email;

        let dateOfBirthTd = document.createElement('td');
        dateOfBirthTd.textContent = dateOfBirth;

        let positionTd = document.createElement('td');
        positionTd.textContent = position;

        let salaryTd = document.createElement('td');
        salaryTd.textContent = salary

        let btnTd = document.createElement('td');

        let fireBtn = document.createElement('button');
        fireBtn.textContent = 'Fired';
        fireBtn.setAttribute('class', 'fired');
        fireBtn.addEventListener('click', fireWorker);

        let editBtn = document.createElement('button')
        editBtn.textContent = 'Edit';
        editBtn.setAttribute('class', 'edit');
        editBtn.addEventListener('click', editData);

        btnTd.appendChild(fireBtn);
        btnTd.appendChild(editBtn);


        trItem.appendChild(fNameTd);
        trItem.appendChild(lNameTd);
        trItem.appendChild(emailTd);
        trItem.appendChild(dateOfBirthTd);
        trItem.appendChild(positionTd);
        trItem.appendChild(salaryTd);
        trItem.appendChild(btnTd);

        return trItem;
    }

    function editData(event) {
        let parentEl = event.target.parentElement.parentElement;

        firsNameInput.value = parentEl.children[0].textContent;
        lastNameInput.value = parentEl.children[1].textContent;
        emailinput.value = parentEl.children[2].textContent;
        dateOfBirthInput.value = parentEl.children[3].textContent;
        positionInput.value = parentEl.children[4].textContent;
        salaryInput.value = parentEl.children[5].textContent;

        let sum = Number(budget.textContent);
        sum -= Number(parentEl.children[5].textContent)
        budget.textContent = sum;
        
        parentEl.remove();

        event.preventDefault();
    }

    function fireWorker(event) {
        let parentEl = event.target.parentElement.parentElement;
        let salary = parentEl.children[5].textContent;

        let sum = Number(budget.textContent);
        sum -= Number(salary)
        budget.textContent = sum;

        parentEl.remove();
        event.preventDefault();
    }
}


solve()