window.addEventListener('load', solve);

function solve() {
    let productType = document.getElementById('type-product');
    let descriptionInput = document.getElementById('description');
    let clientNameInput = document.getElementById('client-name');
    let clientPhoneInput = document.getElementById('client-phone');
    let form = document.querySelectorAll('form')[0];
    let completeSection = document.getElementById('completed-orders');
    let clearBtn = document.getElementsByClassName('clear-btn')[0];
    clearBtn.addEventListener('click', clearData);

    form.addEventListener('submit', submit);

    function submit(event) {
        let receivedSection = document.getElementById('received-orders');
        let optionType = productType.value;
        let description = descriptionInput.value;
        let clientName = clientNameInput.value;
        let clientPhone = clientPhoneInput.value;
        
        let startRepairBtn = document.createElement('button');
        startRepairBtn.setAttribute('class', 'start-btn');
        startRepairBtn.textContent = 'Start repair';
        startRepairBtn.addEventListener('click', startRepair);

        let finishRepairBtn = document.createElement('button');
        finishRepairBtn.setAttribute('class', 'finish-btn');
        finishRepairBtn.disabled = true;
        finishRepairBtn.textContent = 'Finish repair';
        finishRepairBtn.addEventListener('click', finishRepair);

        
        if (!description || !clientName || !clientPhone) {
            return;
        }

        let divItem = createOrder(optionType, clientName, clientPhone, description);
        divItem.appendChild(startRepairBtn);
        divItem.appendChild(finishRepairBtn);
        receivedSection.appendChild(divItem);
        

        descriptionInput.value = '';
        clientNameInput.value = '';
        clientPhoneInput.value = '';
        event.preventDefault();
        
    }

    function startRepair(event) {
        event.target.disabled = true;
        let finishRepairBtn = event.target.parentElement.children[4];
        finishRepairBtn.disabled = false;
    }

    function finishRepair(event) {
        
        let receivedDiv = event.target.parentElement;
        

        let clientInfo = receivedDiv.children[1].textContent.split(': ');
        let clientInfo2 = clientInfo[1].split(', ')
        let descriptionInfo = receivedDiv.children[2].textContent.split(': ');

        let optionType = receivedDiv.children[0].textContent.split(': ')[1];
        let clientName = clientInfo2[0];
        let clientPhone = clientInfo2[1];
        let description = descriptionInfo[1];
        
        let divItem = createOrder(optionType, clientName, clientPhone, description);
        completeSection.appendChild(divItem);

        event.target.parentElement.remove();
    }

    function clearData(event) {
        
        // While loop failed me, so i used for each with array from
        let allCompletedDivs = completeSection.querySelectorAll('.container')
        
        Array.from(allCompletedDivs).forEach(allCompletedDivs => allCompletedDivs.remove());
        
    }

    function createOrder(optionType, clientName, clientPhone, description) {
        let divItem = document.createElement('div');
        divItem.setAttribute('class', 'container');

        let productTitle = document.createElement('h2');
        productTitle.textContent = `Product type for repair: ${optionType}`;

        let clientTitle = document.createElement('h3');
        clientTitle.textContent = `Client information: ${clientName}, ${clientPhone}`;

        let descriptionTitle = document.createElement('h4');
        descriptionTitle.textContent = `Description of the problem: ${description}`

        divItem.appendChild(productTitle);
        divItem.appendChild(clientTitle);
        divItem.appendChild(descriptionTitle);

        return divItem;
    }
}