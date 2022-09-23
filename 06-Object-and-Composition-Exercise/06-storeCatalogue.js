function storeCatalogue(arr) {
    let products = {};
    let chars = [];
    for (let i of arr) {
        let [product, price] = i.split(' : ');
        
        if (products[product] === undefined) {
            products[product] = price;
        }
    }
    
    let sorted = Object.keys(products)
        .sort()
        .reduce((accumulator, key) => {
        accumulator[key] = products[key];

        return accumulator;
    }, {});

    for (let pair in sorted) {
        let firstChar = pair[0];
        

        if (!chars.includes(firstChar)) {
            chars.push(firstChar);
            console.log(firstChar);
        }

        console.log(`  ${pair}: ${products[pair]}`)
    }
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)