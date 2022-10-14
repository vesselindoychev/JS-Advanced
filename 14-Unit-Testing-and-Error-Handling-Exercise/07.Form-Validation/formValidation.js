// function validate() {

//     let usernameField = document.getElementById('username');
//     let password = document.getElementById('password');
//     let confirmPassword = document.getElementById('confirm-password');
//     let email = document.getElementById('email');
//     let submitBtn = document.getElementById('submit');
//     let isCompanyCheckbox = document.getElementById('company');
//     let companyFieldset = document.getElementById('companyInfo');
//     let companyNumber = document.getElementById('companyNumber');
//     let div = document.getElementById('valid');

//     submitBtn.addEventListener('click', validateForm);
//     isCompanyCheckbox.addEventListener('change', () => {
//         if (isCompanyCheckbox.checked) {
//             companyFieldset.style.display = 'block';
//         } else {
//             companyFieldset.style.display = 'none';
//         }
//     })


//     function validateForm(event) {
//         event.preventDefault();
//         let valid = true;
//         debugger
//         validateUsername(usernameField);
//         validateEmail(email);
//         validatePassword(password);
//         validatePassword(confirmPassword);
        
        

//         if (password.value !== confirmPassword.value) {
//             password.style.borderColor = 'red';
//             confirmPassword.style.borderColor = 'red';
//             valid = false;
//         }

//         if (isCompanyCheckbox.checked) {
//             validateCompanyNumber(companyNumber);

//         }
        

//         function validateUsername(username) {
           
//             if (username.value.length > 20 || username.value.length < 3) {
//                 valid = false;
                
//             } else {
//                 for (let ch of username.value) {
//                     if (isNumber(ch)) {
//                         continue
//                     } else if (charIsLetter(ch)) {
//                         continue
//                     }
//                     valid = false;
//                     break; 
//                 }
//             }

//             if (!valid) {
//                 username.style.borderColor = 'red';
                
//             } else {
//                 username.style.borderColor = '';
//             }
//         }

//         function validatePassword(password) {
            
//             if (password.value.length > 15 || password.value.length < 5) {
//                 valid = false;
                
//             } else {
//                 for (let s of password.value) {
//                     if (isNumber(s) || charIsLetter(s) || s === '_') {
//                         continue
//                     }
//                     valid = false;
//                     break; 
//                 }
//             }

//             if (!valid) {
//                 password.style.borderColor = 'red';
//             } else {
//                 password.style.borderColor = '';
//             }
//         }

//         function validateEmail(email) {
            
//             let result = [];
//             for (let ch of email.value) {
//                 if (ch === '@' || ch === '.') {
//                     result.push(ch)
//                 }
//             }

//             if (!result.includes('@') || !result.includes('.')) {
//                 valid = false;
//             }

//             if (!valid) {
//                 email.style.borderColor = 'red';
//             } else {
//                 email.style.borderColor = ''
//             }
//         }

//         function validateCompanyNumber(number) {

            
            
//             if (Number(number.value) < 1000 || Number(number.value) > 9999) {
//                 valid = false;
//             }

//             if (!valid) {
//                 companyNumber.style.borderColor = 'red';
//             } else {
//                 companyNumber.style.borderColor = '';
//             }
//         }

//         if (!valid) {
//             div.style.display = 'none';
//         } else {
//             div.style.display = 'block';
//         }

        
//     }




//     function charIsLetter(char) {
//         if (typeof char !== 'string') {
//             return false;
//         }
//         return char.toLowerCase() !== char.toUpperCase();
//     }

//     function isNumber(char) {
//         if (typeof char !== 'string') {
//           return false;
//         }
      
//         if (char.trim() === '') {
//           return false;
//         }
      
//         return !isNaN(char);
//       }

// }

function validate() {
    let usernameElement = document.querySelector('#username');
    let emailElement = document.querySelector('#email');
    let passwordElement = document.querySelector('#password');
    let confirmElement = document.querySelector('#confirm-password');
    let submitElement = document.querySelector('#submit');
    let validElement = document.querySelector('#valid');

    let isCompanyElement = document.querySelector('#company');
    let companyInfoElement = document.querySelector('#companyInfo');
    let companyNumberElement = document.querySelector('#companyNumber');


    submitElement.addEventListener('click', validateForm);
    isCompanyElement.addEventListener('change', () => {
        if (isCompanyElement.checked) {
            companyInfoElement.style.display = 'block';
        } else {
            companyInfoElement.style.display = 'none';
        }
    })

    function validateForm(e) {
        e.preventDefault();

        let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        let passwordPattern = /^\w{5,15}$/;
        let confirmPattern = /^\w{5,15}$/;
        let emailPattern = /@(\w)*\./;

        let valid = true;

        checkIfValid(usernameElement, usernamePattern);
        checkIfValid(passwordElement, passwordPattern);
        checkIfValid(confirmElement, confirmPattern);
        checkIfValid(emailElement, emailPattern);
        if (passwordElement.value !== confirmElement.value) {
            passwordElement.style.borderColor = 'red';
            confirmElement.style.borderColor = 'red';
            valid = false;
        }

        if (isCompanyElement.checked) {
            if (Number(companyNumberElement.value) < 1000 || Number(companyNumberElement.value) > 9999) {
                companyNumberElement.style.borderColor = 'red';
                valid = false;
            } else {
                companyNumberElement.style.borderColor = '';
            }
        }

        function checkIfValid(element, pattern) {
            if (!pattern.test(element.value)) {
                element.style.borderColor = 'red';
                valid = false;
            } else {
                element.style.borderColor = '';
            }
        }

        if (valid) {
            validElement.style.display = 'block';
        } else {
            validElement.style.display = 'none';
        }
    }
}