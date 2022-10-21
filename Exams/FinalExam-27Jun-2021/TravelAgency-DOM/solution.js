window.addEventListener('load', solution);

function solution() {
  let fullNameInput = document.getElementById('fname');
  let emailInput = document.getElementById('email');
  let phoneNumberInput = document.getElementById('phone');
  let adressInput = document.getElementById('address');
  let postCodeInput = document.getElementById('code');
  let submitBtn = document.getElementById('submitBTN');
  let previewUlSection = document.getElementById('infoPreview');
  let editBtn = document.getElementById('editBTN');
  let continueBtn = document.getElementById('continueBTN');

  submitBtn.addEventListener('click', submitData);
  editBtn.addEventListener('click', editData);
  continueBtn.addEventListener('click', bookFlight);

  function submitData(event) {
    event.preventDefault();

    let fullName = fullNameInput.value;
    let email = emailInput.value;
    let phone = phoneNumberInput.value;
    let address = adressInput.value;
    let postCode = postCodeInput.value;

    // Check for wheater when inputs are empty should submit info;

    if (!fullName || !email) {
      return event.preventDefault();
    }

    let fullNameLi = createLi('Full Name', fullName);
    let emailLi = createLi('Email', email);
    let phoneLi = createLi('Phone Number', phone);
    let addressLi = createLi('Address', address);
    let postCodeLi = createLi('Postal Code', postCode);

    previewUlSection.appendChild(fullNameLi);
    previewUlSection.appendChild(emailLi);
    previewUlSection.appendChild(phoneLi);
    previewUlSection.appendChild(addressLi);
    previewUlSection.appendChild(postCodeLi);

    clearInputs()
    event.target.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    
  }

  function editData(event) {
    event.preventDefault();

    let parent = previewUlSection.children;

    fullNameInput.value = parent[0].textContent.split(': ')[1];
    emailInput.value = parent[1].textContent.split(': ')[1];
    phoneNumberInput.value = parent[2].textContent.split(': ')[1];
    adressInput.value = parent[3].textContent.split(': ')[1];
    postCodeInput.value = parent[4].textContent.split(': ')[1];

    for (let item of Array.from(parent)) {
      item.remove();
    }

    event.target.disabled = true;
    continueBtn.disabled = true;
    submitBtn.disabled = false;
  }

  function bookFlight(event) {
    event.preventDefault();

    let mainDiv = document.getElementById('block');
    for (let child of Array.from(mainDiv.children)) {
      child.remove()
    }

    let heading = document.createElement('h3');
    heading.textContent = 'Thank you for your reservation!'
    
    mainDiv.appendChild(heading);
  }

  function createLi(firstText, secondText) {
    let liItem = document.createElement('li');
    liItem.textContent = `${firstText}: ${secondText}`;
    return liItem;
  }

  function clearInputs() {
    fullNameInput.value = '';
    emailInput.value = '';
    phoneNumberInput.value = '';
    adressInput.value = '';
    postCodeInput.value = '';
  }
}
