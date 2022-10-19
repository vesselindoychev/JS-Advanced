window.addEventListener("load", solve);

function solve() {
    let recipientInput = document.getElementById('recipientName');
    let titleInput = document.getElementById('title');
    let messageInput = document.getElementById('message');
    let addBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');

    addBtn.addEventListener('click', add);
    resetBtn.addEventListener('click', reset);
    
    function add(event) {
        let listUl = document.getElementById('list');
        
        let title = titleInput.value;
        let recipient = recipientInput.value;
        let message = messageInput.value;

        if (!title || !recipient || !message) {
            
            return event.preventDefault();
        }

        let liItem = createLi(title, recipient, message);
        listUl.appendChild(liItem);
        debugger;
        recipientInput.value = '';
        titleInput.value = '';
        messageInput.value = '';

        event.preventDefault();
    }

    function reset(event) {
        recipientInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
        event.preventDefault()
        debugger
    }

    function createLi(title, recipient, message) {
        let liItem = document.createElement('li');

        let titleHeading = document.createElement('h4');
        titleHeading.textContent = `Title: ${title}`;

        let recipientHeading = document.createElement('h4');
        recipientHeading.textContent = `Recipient Name: ${recipient}`;

        let messageSpan = document.createElement('span');
        messageSpan.textContent = message;

        let divBtns = document.createElement('div');
        divBtns.setAttribute('id', 'list-action');

        let sendBtn = document.createElement('button');
        sendBtn.setAttribute('type', 'submit');
        sendBtn.setAttribute('id', 'send');
        sendBtn.textContent = 'Send';
        sendBtn.addEventListener('click', sendMail);

        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.setAttribute('id', 'delete');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteListData);

        divBtns.appendChild(sendBtn);
        divBtns.appendChild(deleteBtn);

        liItem.appendChild(titleHeading);
        liItem.appendChild(recipientHeading);
        liItem.appendChild(messageSpan);
        liItem.appendChild(divBtns);

        return liItem;
    }

    function sendMail(event) {
        let liParent = event.target.parentElement.parentElement;
        
        let sendList = document.getElementsByClassName('sent-list')[0];
        let recipient = liParent.children[1].textContent.split(': ')[1];
        let title = liParent.children[0].textContent.split(': ')[1];

        let liItem = createSendLi(recipient, title);
        sendList.appendChild(liItem);

        liParent.remove();
        event.preventDefault();
    }

    function createSendLi(recipient, title) {
        let liItem = document.createElement('li');
        let spanRecipient = document.createElement('span');
        spanRecipient.textContent = `To: ${recipient}`;

        let spanTitle = document.createElement('span');
        spanTitle.textContent = `Title: ${title}`;

        let divBtn = document.createElement('div');
        divBtn.setAttribute('class', 'btn');

        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.setAttribute('class', 'delete');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteData);

        divBtn.appendChild(deleteBtn);

        liItem.appendChild(spanRecipient);
        liItem.appendChild(spanTitle);
        liItem.appendChild(divBtn);

        return liItem;
    }

    function deleteListData(event) {
        let deleteList = document.getElementsByClassName('delete-list')[0];
        parentLi = event.target.parentElement.parentElement;

        let recipient = parentLi.children[1].textContent.split(': ')[1];
        let title = parentLi.children[0].textContent.split(': ')[1];

        let liItem = createDeleteSendLi(recipient, title);
        deleteList.appendChild(liItem);

        parentLi.remove();
        event.preventDefault();
    }

    function deleteData(event) {
        let deleteList = document.getElementsByClassName('delete-list')[0];
        let parentLi = event.target.parentElement.parentElement;

        let recipient = parentLi.children[0].textContent.split(': ')[1];
        let title = parentLi.children[1].textContent.split(': ')[1];
        
        let liItem = createDeleteSendLi(recipient, title);
        deleteList.appendChild(liItem);

        parentLi.remove();
        event.preventDefault();
    }

    function createDeleteSendLi(recipient, title) {
        let liItem = document.createElement('li');

        let spanRecipient = document.createElement('span');
        spanRecipient.textContent = `To: ${recipient}`;

        let spanTitle = document.createElement('span');
        spanTitle.textContent = `Title: ${title}`;

        liItem.appendChild(spanRecipient);
        liItem.appendChild(spanTitle);

        return liItem;
    }
    
}

