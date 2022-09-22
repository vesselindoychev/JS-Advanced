function calorieObject(arr) {
    let result = {};
    
    for (let i = 0; i < arr.length; i += 2) {
        let product = arr[i];
        let calories = Number(arr[i + 1]);
        
        if (result[product] === undefined) {
            result[product] = calories;
        } else {
            result[product] += calories;
        }
    }
    console.log(result);
}

calorieObject(
    ['Yoghurt', '48', 'Rise', '138', 'Apple', '52']
)