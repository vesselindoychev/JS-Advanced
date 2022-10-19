const {expect} = require('chai');
const {carService} = require('./03. Car Service_Resources');

describe('carService Test', () => {
    describe('isItExpensive func Test', () => {
        it('should return message about more expensice repair when input is equal to Engine or Transmission', () => {
            expect(carService.isItExpensive('Engine')).to.be.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Transmission')).to.be.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it('should return message about cheaper repair when input is not equal to Engine or Transmission', () => {
            expect(carService.isItExpensive('GearBox')).to.be.equal(`The overall price will be a bit cheaper`);
        });
    })

    describe('discount func Test', () => {
        it('should throw an error when input is different type of number', () => {
            expect(() => {carService.discount('10', '100')}).to.throw('Invalid input');
            expect(() => {carService.discount(10, '100')}).to.throw('Invalid input');
            expect(() => {carService.discount('10', 100)}).to.throw('Invalid input');
        });
        it('should return proper discount when parts are between 2 and 7 inclusive', () => {
            let discountPercentage = 15;
            let result = (discountPercentage / 100) * 100
            expect(carService.discount(3, 100)).to.be.equal(`Discount applied! You saved ${result}$`)
            expect(carService.discount(7, 100)).to.be.equal(`Discount applied! You saved ${result}$`)
        });
        it('should return proper discount when parts are grater than 7', () => {
            let discountPercentage = 30;
            let result = (discountPercentage / 100) * 100
            expect(carService.discount(8, 100)).to.be.equal(`Discount applied! You saved ${result}$`)
        });
        it('should not have a discount when parts are lower or equal than 2', () => {
            expect(carService.discount(2, 100)).to.be.equal("You cannot apply a discount");
        });
    })

    describe('partsToBuy Func Test', () => {
        it('should throw an error when input is invalid', () => {
            expect(() => {carService.partsToBuy([1, 2, 3], '1')}).to.throw("Invalid input");
            expect(() => {carService.partsToBuy('1', [1, 2, 3])}).to.throw("Invalid input");
            expect(() => {carService.partsToBuy({parts: 'stick'}, '1')}).to.throw("Invalid input");
        });
        it('should return total sum of bought parts', () => {
            let totalSum = 0;
            let partsCatalog = [{part: "blowoff valve", price: 145}, {part: "coil springs", price: 230}]
            let neededParts = ["blowoff valve", "coil springs"];
            totalSum = 375;
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.be.equal(totalSum);
            
            partsCatalog = [{part: "blowoff valve", price: 145}, {part: "coil springs", price: 230}, {part: 'exhaust', price: 300}]
            neededParts = ["blowoff valve", "coil springs"];
            totalSum = 375;
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.be.equal(totalSum);
            
            partsCatalog = [{part: "blowoff valve", price: 145}, {part: "coil springs", price: 230}, {part: 'exhaust', price: 300}]
            neededParts = ["blowoff valve", "coil springs", 'dpf filter'];
            totalSum = 375;
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.be.equal(totalSum);
            
            partsCatalog = []
            neededParts = ["blowoff valve", "coil springs", 'dpf filter'];
            totalSum = 0;
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.be.equal(totalSum);
            
            
        })
    })
})