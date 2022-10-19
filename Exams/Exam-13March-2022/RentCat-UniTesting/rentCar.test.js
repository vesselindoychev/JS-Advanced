const {expect} = require('chai');
const {rentCar} = require('./rentCar');

describe('RentCar Test', () => {
    describe('searchCar test', () => {
        it('should throw an error if input is invalid', () => {
            expect(() => {rentCar.searchCar('1', 1)}).to.throw('Invalid input!')
            expect(() => {rentCar.searchCar('1', 'Corola')}).to.throw('Invalid input!')
            expect(() => {rentCar.searchCar(['BMW', 'Audi'], 1)}).to.throw('Invalid input!')
        });
        it('should add car models in array and return proper message', () => {
            
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'BMW')).to.be.equal(`There is 1 car of model BMW in the catalog!`)
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"], 'BMW')).to.be.equal(`There is 2 car of model BMW in the catalog!`)
        });
        it('should throw an error if no models mathing', () => {
            expect(() => {rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Mercedes')}).to.throw('There are no such models in the catalog!');
        });
    })

    describe('CalculatePriceOfCar Func Test', () => {
        it('should throw an error if input is invalid', () => {
            expect(() => {rentCar.calculatePriceOfCar('Audi', '20')}).to.throw('Invalid input');
            expect(() => {rentCar.calculatePriceOfCar(1, 20)}).to.throw('Invalid input');
            expect(() => {rentCar.calculatePriceOfCar(1, '20')}).to.throw('Invalid input');
        });
        it('should buy car if expected model in catalogue', () => {
            let catalogue = {
                Volkswagen: 20,
                Audi: 36,
                Toyota: 40,
                BMW: 45,
                Mercedes: 50
            };
            let days = 20
            let model = 'Audi';
            let cost = catalogue[model] * days
            expect(rentCar.calculatePriceOfCar(model, days)).to.be.equal(`You choose ${model} and it will cost $${cost}!`)
    
        });
        it('should throw an error if expected model not in catalogue', () => {
            let catalogue = {
                Volkswagen: 20,
                Audi: 36,
                Toyota: 40,
                BMW: 45,
                Mercedes: 50
            };
            let days = 20
            let model = 'Seat';
            expect(() => {rentCar.calculatePriceOfCar(model, days)}).to.throw(`No such model in the catalog!`);
        });
    })
    describe('CheckBudget Test', () => {
        it('should throw an error if input is invalid type', () => {
            expect(() => {rentCar.checkBudget(1, '2', 3)}).to.throw('Invalid input!');
            expect(() => {rentCar.checkBudget(1.2, 2, 3)}).to.throw('Invalid input!');
            expect(() => {rentCar.checkBudget(1.2, 2, '3')}).to.throw('Invalid input!');
        });
        it('should rent a car', () => {
            let costPerDay = 20;
            let days = 10;
            let budget = 200;
            
            expect(rentCar.checkBudget(costPerDay, days, budget)).to.be.equal('You rent a car!')
        });
        it('should return a message about lower budget', () => {
            let costPerDay = 20;
            let days = 10;
            let budget = 100;
            
            expect(rentCar.checkBudget(costPerDay, days, budget)).to.be.equal('You need a bigger budget!')
        })
    })
})