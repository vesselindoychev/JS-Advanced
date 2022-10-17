function Person(firstName, lastName) {
    return {
        firstName, 
        lastName,

        get fullName() {
            return this.firstName + ' ' + this.lastName;
        },

        set fullName(value) {
            let parts = value.split(' ');
            if (parts.length === 2) {
                this.firstName = parts[0];
                this.lastName = parts[1];
            }
        }
    }
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); 
