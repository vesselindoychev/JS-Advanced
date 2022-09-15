function supermarket(fruit, weightInGrams, pricePerKg) {
    let weightInKg = weightInGrams / 1000
    let needMoney = weightInKg * pricePerKg

    console.log(`I need $${needMoney.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
    

}

supermarket('orange', 2500, 1.80)