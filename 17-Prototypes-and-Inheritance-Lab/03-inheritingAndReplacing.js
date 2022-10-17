function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email
        }
        toString() {
            
            // return `Person ${this.toString()}`
            // return `${Object.getPrototypeOf(this).constructor.name} ${this.toString()}`
            let info = [];
            for (let [key, value] of Object.entries(this)) {
                info.push(`${key}: ${value}`);
            }
            return `${Object.getPrototypeOf(this).constructor.name} (${info.join(', ')})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject
        }
        // toString() {
        //     return `Teacher ${this.toString()}`
        // }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        // toString() {
        //     return `Student ${this.toString()}`
        // }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let person = new Person('Vesko', 'defaultemail.bg')
console.log(person)