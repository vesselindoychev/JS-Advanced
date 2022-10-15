class Company {
    constructor () {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || salary < 0 || !position || !department) {
            throw new Error('Invalid input!')
        }

        if (!this.departments[department]) {
            this.departments[department] = {
                averageSalary: 0,
                sumSalary: 0,
                employees: [],
            }
        }
        this.departments[department].employees.push({
            name,
            salary,
            position
        })
        this.updateDepartment(this.departments[department], salary);
        // this.departments[department].sumSalary += salary
        // this.departments[department].averageSalary = this.departments[department].sumSalary / this.departments[department].employees.length;


        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    updateDepartment(department, salary) {
        department.sumSalary += Number(salary);
        department.averageSalary = department.sumSalary / department.employees.length
    }

    bestDepartment() {
        let bestDepartment = Object.entries(this.departments).sort(([depNameOne, depInfoOne], [depNameTwo, depInfoTwo]) => {
            depInfoOne.averageSalary - depInfoTwo.averageSalary
        })[0]
        
        let sortedEmployees = bestDepartment[1].employees
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

        let buff = [];
        buff.push(`Best Department is: ${bestDepartment[0]}`)
        buff.push(`Average salary: ${bestDepartment[1].averageSalary.toFixed(2)}`)

        for (let emp of sortedEmployees) {
            buff.push(`${emp.name} ${emp.salary} ${emp.position}`)
        }
        return buff.join('\n')
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1000, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
