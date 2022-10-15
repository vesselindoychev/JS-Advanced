function juice(arr) {
    let juiceObj = {};
    let res = {};
    for (let el of arr) {
        let [ juice, quantity ] = el.split(' => ')
        quantity = Number(quantity);

        if (!juiceObj.hasOwnProperty(juice)) {
            juiceObj[juice] = 0
        } 
        juiceObj[juice] += quantity;
        
        
        if (juiceObj[juice] >= 1000) {
            if (!res.hasOwnProperty(juice)) {
                res[juice] = 0;
            }
        }

        while (juiceObj[juice] >= 1000) {
            juiceObj[juice] -= 1000;
            res[juice] += 1;   
        }
    }
    
    for (let [key, value] of Object.entries(res)) {
        console.log(`${key} => ${value}`)
    }
    
}

juice(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
)
console.log('-----')
juice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)