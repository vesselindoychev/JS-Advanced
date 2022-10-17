class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

function extendConstructor(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}

extendConstructor(Person);
let person = new Person('Maria', '123@awd')

console.log(person.toSpeciesString())