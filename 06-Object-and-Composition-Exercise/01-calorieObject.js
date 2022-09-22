function calorieObject(arr) {
    let result = {};
    for (i = 0; i < arr.length; i += 2) {
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

calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])