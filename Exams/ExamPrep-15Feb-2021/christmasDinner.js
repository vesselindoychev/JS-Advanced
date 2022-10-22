class ChristmasDinner {
    constructor(budget) {
        if (budget < 0) {
            throw new Error("The budget cannot be a negative number")
        }
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
        this.addedDishes = [];
        this.addedGuests = [];
    }
    

    shopping(product) {
        let productName = product[0];
        let price = Number(product[1])
        // let [productName, price] = product.split(', ');
        if (this.budget < price) {
            throw new Error("Not enough money to buy this product");
        }
        this.products.push(productName);
        this.budget -= price;
        return `You have successfully bought ${productName}!`
    }

    recipes(recipe) {
        let recipeName = recipe.recipeName;
        let productsList = recipe.productsList;
        
        for (let p of productsList) {
            if (!this.products.includes(p)) {
                throw new Error("We do not have this product")
            }
        }
        this.dishes.push({
            recipeName,
            productsList
        })
        this.addedDishes.push(recipeName);
        return `${recipeName} has been successfully cooked!`
    }
    inviteGuests(name, dish) {
        if (!this.addedDishes.includes(dish)) {
            throw new Error("We do not have this dish");
        }
        if (this.addedGuests.includes(name)) {
            throw new Error("This guest has already been invited");
        }
        this.addedGuests.push(name);
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }
    showAttendance() {
        let output = [];

        for (let [g, d] of Object.entries(this.guests)) {
            for (let dish of this.dishes) {
                if (dish.recipeName === d) {
                    output.push(`${g} will eat ${d}, which consists of ${dish.productsList.join(', ')}`);
                    break;
                }
            }
            
        }
        return output.join('\n')
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);
dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});
dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());