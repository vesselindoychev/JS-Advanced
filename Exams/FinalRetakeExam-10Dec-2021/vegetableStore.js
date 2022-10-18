class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
        this.addedProducts = [];
    }

    // vegetables = [ Array ] of strings
    loadingVegetables(vegetables) {
        let currentlyAddedVegs = [];
        for (let veg of vegetables) {
            let [ type, quantity, price ] = veg.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            if (!this.addedProducts.includes(type)) {
                this.addedProducts.push(type);
                this.availableProducts.push({type, quantity, price});
                currentlyAddedVegs.push(type)
                continue
            }
            for (let obj of this.availableProducts) {
                if (obj.type === type) {
                    obj.quantity += quantity;
                    obj.price = obj.price < price ? price : obj.price;
                    break;
                }
            }
        }
        if (currentlyAddedVegs.length > 0) {
            return `Successfully added ${currentlyAddedVegs.join(', ')}`
        }
        
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        
        for (let selectedVeg of selectedProducts) {
            let [ type, quantity ] = selectedVeg.split(' ');
            quantity = Number(quantity);

            if (!this.addedProducts.includes(type)) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            for (let obj of this.availableProducts) {
                if (obj.type === type) {
                    if (quantity > obj.quantity) {
                        throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
                    }
                    totalPrice += obj.price * quantity;
                    obj.quantity -= quantity;

                }
            }
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        if (!this.addedProducts.includes(type)) {
            throw  new Error(`${type} is not available in the store.`)
        }
        for (let obj of this.availableProducts) {
            if (obj.type === type) {
                if (quantity > obj.quantity) {
                    obj.quantity = 0;
                    return `The entire quantity of the ${type} has been removed.`
                }
                obj.quantity -= quantity;
                return `Some quantity of the ${type} has been removed.`
            }
        }
    }

    revision() {
        let output = [];
     
        output.push("Available vegetables:")


        let sortedArr = this.availableProducts.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
        for (let el of sortedArr) {
            output.push(`${el.type}-${el.quantity}-$${el.price}`)
        }

        output.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
        return output.join('\n')
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
