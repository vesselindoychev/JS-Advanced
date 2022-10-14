class Person {
    constructor (fName, lName) {
        this.fName = fName;
        this.lName = lName; 
    }

    get fullName() {
        return `${this.fName} ${this.lName}`;
    }
}

let person = new Person('Vesko', 'Doychev');
console.log(person.fullName)