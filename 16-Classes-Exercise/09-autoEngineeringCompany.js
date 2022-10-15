function auto(arr) {
    let carObj = {};
    let res = {}
    for (let el of arr) {
        let [brand, model, quantity] = el.split(' | ');
        quantity = Number(quantity);

        if (!carObj[brand]) {
            carObj[brand] = []
        }
        carObj[brand].push(model, quantity)
    }

    for (let [key, value] of Object.entries(carObj)) {
        console.log(key)
        for (let i=0; i < value.length; i+=2) {
            let model = value[i];
            let quantity = value[i + 1];
            
            if (!res[model]) {
                res[model] = 0
                
            }
            res[model] += quantity;
            
           
        }

        for (let info in res) {
            console.log(`###${info} -> ${res[info]}`)
        }

        
        res = {};
        
    }

   
}

auto(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)