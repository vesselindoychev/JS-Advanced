function solve() {
   let shoppingCart = document.getElementsByClassName('shopping-cart')[0];
   let textarea = document.getElementsByTagName('textarea')[0];
   let totalPrice = 0;
   let uniqueProducts = [];
   let checkoutDone = false;
   
   shoppingCart.addEventListener('click', function (event) {
      if (event.target.nodeName !== 'BUTTON') {
         return;
      }

      if (checkoutDone === true) {
         return;
      }
      
      let btn = event.target;
      
      if (Array.from(btn.classList).indexOf('add-product') >= 0) {
         let productParentElement = event.target.parentElement.parentElement;
      
         let productName = productParentElement.querySelectorAll('.product-title')[0].textContent;
         let productPrice = Number(productParentElement.querySelectorAll('.product-line-price')[0].textContent);
         
         

         textarea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
         totalPrice += Number(productPrice)
         if (!uniqueProducts.includes(productName)) {
            uniqueProducts.push(productName)
         }
      } else if (Array.from(btn.classList).indexOf('checkout') >= 0) {
         uniqueProducts = uniqueProducts.join(', ')
         textarea.textContent += `You bought ${uniqueProducts} for ${totalPrice.toFixed(2)}.`
         checkoutDone = true;
      }
      

      
      
   })
}