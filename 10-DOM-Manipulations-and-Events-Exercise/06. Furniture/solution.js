// function solve() {
//   let btns = document.querySelectorAll('button');
//   btns[0].addEventListener('click', generate);
//   btns[1].addEventListener('click', buy);

//   function generate() {
//     let currentItems = JSON.parse(document.querySelectorAll('textarea')[0].value);
//     let tableBody = document.getElementsByTagName('tbody')[0];
//     for (let item of currentItems) {
//       let tableRow = document.createElement('tr');
//       let td = document.createElement('td');
//       let itemImg = document.createElement('img');
//       itemImg.setAttribute('src', item.img)
//       td.appendChild(itemImg);
//       tableRow.appendChild(td);

//       let itemNameTd = document.createElement('td');
//       let itemName = document.createElement('p');
//       itemName.textContent = item.name;
//       itemNameTd.appendChild(itemName);
//       tableRow.appendChild(itemNameTd);

//       let itemPriceTd = document.createElement('td');
//       let itemPrice = document.createElement('p');
//       itemPrice.textContent = Number(item.price);
//       itemPriceTd.appendChild(itemPrice);
//       tableRow.appendChild(itemPriceTd);

//       let decFactorTd = document.createElement('td');
//       let decFactor = document.createElement('p');
//       decFactor.textContent = Number(item.decFactor);
//       decFactorTd.appendChild(decFactor);
//       tableRow.appendChild(decFactorTd);

//       let itemCheckBoxTd = document.createElement('td');
//       let itemCheckBox = document.createElement('input');
//       itemCheckBox.setAttribute('type', 'checkbox');
//       itemCheckBoxTd.appendChild(itemCheckBox);
//       tableRow.appendChild(itemCheckBoxTd);


//       tableBody.appendChild(tableRow);
//     }
//   }

//   function buy() {
//     let resultArea = document.querySelectorAll('textarea')[1];
//     let table = Array.from(document.querySelectorAll('tbody tr'));
//     let res = [];

//     for (let el of table) {
//       if (el.querySelector('input[type=checkbox]:checked')) {
//         let tableData = Array.from(el.querySelectorAll('td'));
//         let info = {
//           name: tableData[1].children[0].textContent,
//           price: tableData[2].children[0].textContent,
//           decFactor: tableData[3].children[0].textContent
//         }

//         res.push(info)
//       }
//     }

//     let names = '';
//     let totalPrice = 0;
//     let decFactor = 0;

//     for (let i = 0; i < res.length; i++) {
//       let item = res[i]
//       let sep = i == res.length - 1 ? "" : ", ";
//       names += item.name + sep;
//       totalPrice += Number(item.price);
//       decFactor += Number(item.decFactor)
//     }
    
//     decFactor /= res.length;

//     resultArea.value = `Bought furniture: ${names}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFactor}`
//   }
  
// }



function solve() {
  let textarea = document.querySelectorAll('textarea')[0];
  let btns = document.querySelectorAll('button');
  btns[1].addEventListener('click', buy);
  btns[0].addEventListener('click', generate);
  
  function generate() {
    let currentTextarea = JSON.parse(textarea.value);

    for (let item of currentTextarea) {
      let tableBody = document.getElementsByTagName('tbody')[0];
      let tableRow = document.createElement('tr');

      let imageTd = document.createElement('td');
      let imgDoc = document.createElement('img');
      imgDoc.setAttribute('src', item.img)
      imageTd.appendChild(imgDoc);
      tableRow.appendChild(imageTd);

      let nameTd = document.createElement('td');
      let nameP = document.createElement('p');
      nameP.textContent = item.name;
      nameTd.appendChild(nameP);
      tableRow.appendChild(nameTd);

      let priceTd = document.createElement('td');
      let priceP = document.createElement('p');
      priceP.textContent = item.price;
      priceTd.appendChild(priceP);
      tableRow.appendChild(priceTd);

      let decFactorTd = document.createElement('td');
      let decFactorP = document.createElement('p');
      decFactorP.textContent = item.decFactor;
      decFactorTd.appendChild(decFactorP);
      tableRow.appendChild(decFactorTd);

      let itemInputTd = document.createElement('td');
      let itemInput = document.createElement('input');
      itemInput.setAttribute('type', 'checkbox');
      itemInputTd.appendChild(itemInput);
      tableRow.appendChild(itemInputTd);

      tableBody.appendChild(tableRow);
      
    }

  }

  function buy() {
    let tableItems = Array.from(document.querySelectorAll('tbody tr'));
    let disbaledTextarea = document.querySelectorAll('textarea')[1];
    let resultNames = [];
    let totalPrice = 0;
    let avDecF = 0;
    let counter = 0;

    for (let checkedItem of tableItems) {
      let itemName = checkedItem.children[1].children[0].textContent;
      let itemPrice = Number(checkedItem.children[2].children[0].textContent);
      let decF = Number(checkedItem.children[3].children[0].textContent);
      if (checkedItem.children[4].children[0].checked) {
        if (!resultNames.includes(itemName)) {
          resultNames.push(itemName)
        } 
        totalPrice += itemPrice
        avDecF += decF
        counter += 1

      }
      
    }
    // console.log(resultNames.join(', '));
    disbaledTextarea.value += `Bought furniture: ${resultNames.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avDecF / counter}`
  }

  
}