const {expect} = require('chai');
const {testNumbers} = require('./testNumbers');

describe('TestNumbers', () => {
    describe('sumNumbers func Tests', () => {
        it('should return undefined when input is different type of number', () => {
            expect(testNumbers.sumNumbers(1, '2')).to.be.equal(undefined);
            expect(testNumbers.sumNumbers('1', '2')).to.be.equal(undefined);
            expect(testNumbers.sumNumbers('1', 2)).to.be.equal(undefined);
        });
        it('should return the sum between the two numbers when they are valid', () => {
            expect(testNumbers.sumNumbers(1, 2)).to.be.equal(`${3}.00`)
            expect(testNumbers.sumNumbers(-1, -2)).to.be.equal(`${-3}.00`)
        });
    })
    describe('numberChecker Test', () => {
        it('should throw an error when input is not a number', () => {
            expect(() => {testNumbers.numberChecker('one')}).to.throw('The input is not a number!');
            expect(() => {testNumbers.numberChecker([1, 2])}).to.throw('The input is not a number!');
            
        });
        it('should return even number', () => {
            expect(testNumbers.numberChecker(2)).to.be.equal('The number is even!')
        });
        it('should return odd number', () => {
            expect(testNumbers.numberChecker(3)).to.be.equal('The number is odd!')
        })
    })
    describe('averageSumSalary Test', () => {
        it('should return the result', () => {
            let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            
            expect(testNumbers.averageSumArray(arr)).to.be.equal(5)
        })
    })
})