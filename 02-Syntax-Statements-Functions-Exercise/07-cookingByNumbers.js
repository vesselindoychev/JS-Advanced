function cookingByNumbers(...params) {
    let number = Number(params[0]);
    let word;
    for (let i = 1; i < params.length; i++) {
        word = params[i];
        switch (word) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3; 
                break;
            case 'fillet':
                number *= 0.8
                number = number.toFixed(1);
                break;
        }
        console.log(number);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
console.log('--------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake','fillet')