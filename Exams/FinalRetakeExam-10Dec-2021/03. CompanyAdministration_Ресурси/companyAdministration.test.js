const {expect} = require('chai');
const {assert} = require('chai');
const {companyAdministration} = require('./companyAdministration');


describe('companyAdministration Test', () => {
    describe('hiringEmployee Test', () => {
        it('should throw an error if position is not equal to Programmer', () => {
            expect(() => {companyAdministration.hiringEmployee('Vesko', 'Engineer', 1.5)}).to.throw(`We are not looking for workers for this position.`)
        });
        it('should not hire the person if position is equal to Programmer, but years of experience are not enough', () => {
            expect(companyAdministration.hiringEmployee('Vesko', 'Programmer', 1.5)).to.be.equal(`Vesko is not approved for this position.`)
        });
        it('should hire the person if position is equal to Programmer and year of experience are enough', () => {
            expect(companyAdministration.hiringEmployee('Vesko', 'Programmer', 3)).to.be.equal(`Vesko was successfully hired for the position Programmer.`)
        });
    })

    describe('calculateSalary Test', () => {
        it('should throw an error if hours are smaller than zero or is set invalid type differen from number', () => {
            expect(() => {companyAdministration.calculateSalary('12')}).to.throw('Invalid hours')
            expect(() => {companyAdministration.calculateSalary(-1)}).to.throw('Invalid hours')
        });
        it('should return total Salary earned when working hours are under 160', () => {
            let hours = 100;
            let payPerHour = 15;
            let totalAmount = payPerHour * hours;
            expect(companyAdministration.calculateSalary(hours)).to.be.equal(totalAmount);
            hours = 160;
            totalAmount = payPerHour * hours;
            expect(companyAdministration.calculateSalary(hours)).to.be.equal(totalAmount);
        });
        it('shoud return total salary earned when working hours are above 160', () => {
            let hours = 180;
            let payPerHour = 15;
            let totalAmount = payPerHour * hours;
            expect(companyAdministration.calculateSalary(hours)).to.be.equal(totalAmount + 1000)
        });
    })

    describe('firedEmployee Test', () => {
        it('shoud throw an error if is set invalid type of input', () => {
            expect(() => {companyAdministration.firedEmployee('George, Peter', 1)}).to.throw('Invalid input');
            expect(() => {companyAdministration.firedEmployee(['George', 'Peter'], '1')}).to.throw('Invalid input');
            expect(() => {companyAdministration.firedEmployee(['George', 'Peter'], 2)}).to.throw('Invalid input');
            expect(() => {companyAdministration.firedEmployee(['George', 'Peter'], -1)}).to.throw('Invalid input');
        });
        it('should return a result without one employee, because he is fired', () => {
            let employees = ['Peter', 'George', 'Michal'];
            let index = 0;
            expect(companyAdministration.firedEmployee(employees, index)).to.be.equal('George, Michal')
            index = 1
            expect(companyAdministration.firedEmployee(employees, index)).to.be.equal('Peter, Michal')
            index = 2
            expect(companyAdministration.firedEmployee(employees, index)).to.be.equal('Peter, George')
        })
    })
})