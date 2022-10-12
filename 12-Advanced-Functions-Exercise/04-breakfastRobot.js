function solution() {
    let ingredientsStore = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
    }

    return function inputHandler(input) {
        let actionHandler = cmdOption()
        let [ command, microelement, quantity ] = input.split(' ');
        quantity = Number(quantity)
        return actionHandler[command](microelement, quantity)
    }

    function cmdOption() {
        return {
            restock: (microelement, quantity) => {
                ingredientsStore[microelement] = ingredientsStore[microelement] + quantity
                return 'Success'; 
            },
            prepare: (recipe, quantity) => {
                let isDone = true;
                let text = '';
                let copyIngredientStore = JSON.parse(JSON.stringify(ingredientsStore));
                for (let key in recipes[recipe]) {
                    if (recipes[recipe][key] * quantity > ingredientsStore[key]) {
                        isDone = false;
                        text = `Error: not enough ${key} in stock`
                        break
                    } 
                    copyIngredientStore[key] -= (quantity * recipes[recipe][key])
                }
                if (!isDone) {
                    return text;
                }
                ingredientsStore = copyIngredientStore;
                return 'Success'
            },
            report: () => {
                let reportResult = [];
                for (let [key, value] of Object.entries(ingredientsStore)) {
                    reportResult.push(`${key}=${value}`)
                }
                return reportResult.join(' ')
            }
        }
    }   
}

let manager = solution (); 
// console.log(manager("restock flavour 50")); 
// console.log(manager("prepare lemonade 4")); 
// console.log(manager("report")); 

console.log(manager('restock flavour 50'))
console.log(manager('prepare lemonade 4'))
console.log(manager('restock carbohydrate 10'))
console.log(manager('restock flavour 10'))
console.log(manager('prepare apple 1'))
console.log(manager('restock fat 10'))
console.log(manager('prepare burger 1'))
console.log(manager('report'))
 







