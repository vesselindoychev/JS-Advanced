function add(number) {
    function sum(anotherNumber) {
        number += anotherNumber;
        return sum
    }
    sum.toString = function() {
        return number;
    }
    return sum;
}

console.log(add(1)(2)(3)(4));
