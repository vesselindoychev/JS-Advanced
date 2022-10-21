window.addEventListener('load', solve);

function solve() {
    let modelInput = document.getElementById('model');
    let yearInput = document.getElementById('year');
    let descriptionInput = document.getElementById('description');
    let priceInput = document.getElementById('price');
    let addBtn = document.getElementById('add');
    let tBody = document.getElementById('furniture-list');
    let totalPriceTd = document.getElementsByClassName('total-price')[0];

    addBtn.addEventListener('click', addData);

    function addData(event) {
        let model = modelInput.value;
        let price = priceInput.value;
        let year = yearInput.value;
        let description = descriptionInput.value;

        if (!model || ! price || price < 0 || !year || year < 0 || !description) {
            return event.preventDefault()
        }

        let trItemInfo = createTrInfo(model, price);
        let trItemHidden = createTrHidden(year, description);
        tBody.appendChild(trItemInfo);
        tBody.appendChild(trItemHidden);

        clearData();
        event.preventDefault();
    }

    function createTrInfo(model, price) {
        let trInfo = document.createElement('tr');
        trInfo.setAttribute('class', 'info');

        let tdModel = document.createElement('td');
        tdModel.textContent = model;

        let tdPrice = document.createElement('td');
        tdPrice.textContent = Number(price).toFixed(2);

        let tdBtns = document.createElement('td');

        let moreInfoBtn = createBtn('moreBtn', 'More Info');
        moreInfoBtn.addEventListener('click', displayInfo);

        let buyBtn = createBtn('buyBtn', 'Buy it');
        buyBtn.addEventListener('click', buyItem);

        tdBtns.appendChild(moreInfoBtn);
        tdBtns.appendChild(buyBtn);

        trInfo.appendChild(tdModel);
        trInfo.appendChild(tdPrice);
        trInfo.appendChild(tdBtns);

    

        return trInfo;
    }

    function buyItem(event) {
        event.preventDefault();

        let mainParent = event.target.parentElement.parentElement.parentElement;
        let child1 = event.target.parentElement.parentElement;
        let index = Array.from(child1.parentElement.children).indexOf(child1);
        let searchedTr = mainParent.children[index + 1];
        let price = event.target.parentElement.parentElement.children[1].textContent;
        totalPriceTd.textContent = (Number(price) + Number(totalPriceTd.textContent)).toFixed(2);
        child1.remove();
        searchedTr.remove();
        

    }

    function displayInfo(event) {
        let mainParent = event.target.parentElement.parentElement.parentElement;
        let child1 = event.target.parentElement.parentElement;
        let index = Array.from(child1.parentElement.children).indexOf(child1);
        let searchedTr = mainParent.children[index + 1];
        
        
        if (event.target.textContent === 'More Info') {
            searchedTr.style.display = 'contents';
            event.target.textContent = 'Less Info'
            
        } else {
            searchedTr.style.display = 'none';
            event.target.textContent = 'More Info';
            
        }

        event.preventDefault();
    }

    function createTrHidden(year, description) {
        let trItemHidden = document.createElement('tr');
        trItemHidden.setAttribute('class', 'hide');
        trItemHidden.style.display = 'none';

        let tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${year}`;

        let tdDesc = document.createElement('td');
        tdDesc.setAttribute('colspan', '3');
        tdDesc.textContent = `Description: ${description}`;

        trItemHidden.appendChild(tdYear);
        trItemHidden.appendChild(tdDesc);

        return trItemHidden;
    }

    function createBtn(className, text) {
        let btn = document.createElement('button');
        btn.setAttribute('class', className);
        btn.textContent = text;

        return btn;
    }

    function clearData() {
        modelInput.value = '';
        yearInput.value = '';
        descriptionInput.value = '';
        priceInput.value = '';
    }

}
