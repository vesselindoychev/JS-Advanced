class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
        this.string = innerString;
    }

    toString() {
        if (this.innerLength >= this.innerString.length) {
            return this.innerString;
        } else {
            return this.innerString.substring(0, this.innerLength) + '...'
        }
        
    }

    increase(length) {
        this.innerLength += length;
        
    }

    decrease(length) {
        this.innerLength = Math.max(0, this.innerLength - length)
        
    }
}

let test = new Stringer("TestTest", 2);
console.log(test.toString());
test.decrease(3);
console.log(test.toString());
test.increase(2);
console.log(test.toString());
test.decrease(2);
console.log(test.toString());
test.increase(2);
console.log(test.toString());
test.increase(3);
console.log(test.toString());
test.increase(1);
console.log(test.toString());
test.decrease(-1);
console.log(test.toString());
test.decrease(2);
console.log(test.toString());