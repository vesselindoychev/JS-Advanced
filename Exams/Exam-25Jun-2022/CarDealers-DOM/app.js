window.addEventListener("load", solve);

function solve() {
  let makeInput = document.getElementById('make');
  let modelInput = document.getElementById('model');
  let yearInput = document.getElementById('year');
  let fuelSelectInput = document.getElementById('fuel');
  let originalPriceInput = document.getElementById('original-cost');
  let sellingPriceInput = document.getElementById('selling-price');
  let publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', publish);
  
  
  function publish(event) {
    let tBody = document.getElementById('table-body');
    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;
    let fuelType = fuelSelectInput.value;
    let originalPrice = originalPriceInput.value;
    let sellingPrice = sellingPriceInput.value;

    if (!make || !model || !year || !originalPrice || !sellingPrice || Number(originalPrice) > Number(sellingPrice)) {
      return;
    }

    
    let trItem = createTr(make, model, year, fuelType, originalPrice, sellingPrice);
    tBody.appendChild(trItem);
    makeInput.value = '';
    modelInput.value = '';
    yearInput.value = '';
    fuelSelectInput.value = '';
    originalPriceInput.value = '';
    sellingPriceInput.value = '';

    event.preventDefault();
    
  }

  function createTr(make, model, year, fuelType, originalPrice, sellingPrice) {
    let trItem = document.createElement('tr');
    trItem.setAttribute('class', 'row');

    let tdMake = document.createElement('td');
    tdMake.textContent = make;

    let tdModel = document.createElement('td');
    tdModel.textContent = model;

    let tdYear = document.createElement('td');
    tdYear.textContent = year;

    let tdFuelType = document.createElement('td');
    tdFuelType.textContent = fuelType;

    let tdOriginalPrice = document.createElement('td');
    tdOriginalPrice.textContent = originalPrice;

    let tdSellingPrice = document.createElement('td');
    tdSellingPrice.textContent = sellingPrice;

    let tdButtons = document.createElement('td');
    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'action-btn edit');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', editAdvert);

    let sellBtn = document.createElement('button');
    sellBtn.setAttribute('class', 'action-btn sell');
    sellBtn.textContent = 'Sell';
    sellBtn.addEventListener('click', sellCar);

    tdButtons.appendChild(editBtn)
    tdButtons.appendChild(sellBtn);

    trItem.appendChild(tdMake);
    trItem.appendChild(tdModel)
    trItem.appendChild(tdYear);
    trItem.appendChild(tdFuelType);
    trItem.appendChild(tdOriginalPrice);
    trItem.appendChild(tdSellingPrice);
    trItem.appendChild(tdButtons);
    debugger
    return trItem;
  }

  function editAdvert(event) {
    let trParent = event.target.parentElement.parentElement;
    let tds = trParent.querySelectorAll('td');

    makeInput.value = tds[0].textContent;
    modelInput.value = tds[1].textContent;
    yearInput.value = tds[2].textContent;
    fuelSelectInput.value = tds[3].textContent;
    originalPriceInput.value = tds[4].textContent;
    sellingPriceInput.value = tds[5].textContent;

    trParent.remove();
    event.preventDefault();
  }

  function sellCar(event) {
    let soldCarList = document.getElementById('cars-list');
    let profit = document.getElementById('profit');
    
    let trParent = event.target.parentElement.parentElement;
    let tds = trParent.querySelectorAll('td');
    
    let make = tds[0].textContent;
    let model = tds[1].textContent;
    let year = tds[2].textContent;
    let originalPrice = Number(tds[4].textContent);
    let sellingPrice = Number(tds[5].textContent);
    let price = sellingPrice - originalPrice;

    let liItem = createLi(make, model, year, price)

    let earnedMoney = 0;
    for (let i = 0; i < liItem.children.length; i++) {
      if (i == 2) {
        earnedMoney += Number(liItem.children[i].textContent);
      }
      
    }
    profit.textContent = (earnedMoney + Number(profit.textContent)).toFixed(2);
    soldCarList.appendChild(liItem);
    trParent.remove();
    event.preventDefault();
  }

  function createLi(make, model, year, price) {
    
    let liItem = document.createElement('li');
    liItem.setAttribute('class', 'each-list');

    let carInfoSpan = document.createElement('span');
    carInfoSpan.textContent = `${make} ${model}`;

    let yearSpan = document.createElement('span');
    yearSpan.textContent = year;
    
    let priceSpan = document.createElement('span');
    priceSpan.textContent = price;

    liItem.appendChild(carInfoSpan);
    liItem.appendChild(yearSpan);
    liItem.appendChild(priceSpan);

    return liItem;
  }
}
