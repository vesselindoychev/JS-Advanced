function solve() {
  let btns = document.querySelectorAll('button');
  btns[0].addEventListener('click', generate);
  btns[1].addEventListener('click', buy);

  function generate(event) {
    let currentItems = JSON.parse(document.querySelectorAll('textarea')[0].value);
    let tableBody = document.getElementsByTagName('tbody')[0];
    for (let item of currentItems) {
      let tableRow = document.createElement('tr');
      let td = document.createElement('td');
      let itemImg = document.createElement('img');
      itemImg.setAttribute('src', item.img)
      td.appendChild(itemImg);
      tableRow.appendChild(td);

      let itemNameTd = document.createElement('td');
      let itemName = document.createElement('p');
      itemName.textContent = item.name;
      itemNameTd.appendChild(itemName);
      tableRow.appendChild(itemNameTd);

      let itemPriceTd = document.createElement('td');
      let itemPrice = document.createElement('p');
      itemPrice.textContent = Number(item.price);
      itemPriceTd.appendChild(itemPrice);
      tableRow.appendChild(itemPriceTd);

      let decFactorTd = document.createElement('td');
      let decFactor = document.createElement('p');
      decFactor.textContent = Number(item.decFactor);
      decFactorTd.appendChild(decFactor);
      tableRow.appendChild(decFactorTd);

      let itemCheckBoxTd = document.createElement('td');
      let itemCheckBox = document.createElement('input');
      itemCheckBox.setAttribute('type', 'checkbox');
      itemCheckBoxTd.appendChild(itemCheckBox);
      tableRow.appendChild(itemCheckBoxTd);


      tableBody.appendChild(tableRow);
    }
  }

  function buy(event) {

  }
  
}