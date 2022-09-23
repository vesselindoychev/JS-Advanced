function lowestPrices(arr) {
    let result = {};
    for (let data of arr) {
        let [townName, productName, productPrice] = data.split(' | ');
        productPrice = Number(productPrice);

        if (result.hasOwnProperty(productName)) {
            let currentPrice = result[productName]['productPrice'];

            if (currentPrice > productPrice) {
                result[productName] = {townName, productPrice}
            }
        } else {
            result[productName] = {townName, productPrice}
        }
    }

    for (let key in result) {
        console.log(`${key} -> ${result[key]['productPrice']} (${result[key]['townName']})`)
    }
}

lowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)