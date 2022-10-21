class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
        this.productsInStock = [];
    }
    // products = ['Banana']
    loadProducts(products) {
        let output = [];
        for (let product of products) {
            let [ productName, quantity, price ] = product.split(' ');
            price = Number(price)
            quantity = Number(quantity);
            
            if(this.budgetMoney >= price) {
                if (this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] += quantity;
                    this.budgetMoney -= price;
                    output.push(`Successfully loaded ${quantity} ${productName}`)
                } else {
                    this.stockProducts[productName] = quantity;
                    this.budgetMoney -= price;
                    output.push(`Successfully loaded ${quantity} ${productName}`);
                }
            }
            else {
                output.push(`There was not enough money to load ${quantity} ${productName}`)
            }
            
        }
        return output.join('\n');  
    }
    // neededProducts = ['zele']
    addToMenu(meal, neededProducts, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`
        } 
        this.menu[meal] = {neededProducts: neededProducts, price}
        // this.menu[meal] = price;
        let mealCount = Object.keys(this.menu).length;
        if (mealCount === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        }
        return `Great idea! Now with the ${meal} we have ${mealCount} meals in the menu, other ideas?`
    }
    showTheMenu() {
        let output = [];
        if (!this.menu) {
            return "Our menu is not ready yet, please come later..."
        }
        for (let [key, value] of Object.entries(this.menu)) {
            output.push(`${key} - $ ${value.price}`);
        }
        return output.join('\n');
    }
    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        let availableProductsCopy = JSON.parse(JSON.stringify(this.stockProducts));
        let isQuantityEnough = true;
        let itemObj = this.menu[meal].neededProducts;
        for (let neededProduct of itemObj) {
            let [product, quantity] = neededProduct.split(' ');
            quantity = Number(quantity);

            if (availableProductsCopy.hasOwnProperty(product) && availableProductsCopy[product] >= quantity) {
                availableProductsCopy[product] -= quantity;
            } else {
                isQuantityEnough = false;
                break;
            }
        }

        if (!isQuantityEnough) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
        }
        this.stockProducts = availableProductsCopy;
        this.budgetMoney += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`

    }
}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
