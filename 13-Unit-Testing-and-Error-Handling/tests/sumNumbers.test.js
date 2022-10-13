const {expect} = require('chai');
const {sum} = require('../04-sumNumbers')


describe('Sum of Numbers Test', () => {
    it('should take an array as an argument', () => {
        let array = [1, 2, 3];
        expect(array).to.be.an('array');
    });
    it('should return NaN if array contains invalid data', () => {
        let array = [1, 'pesho', 'gosho'];
        expect(sum(array)).to.be.NaN;
    });
    it('should return sum of all arrays elements', () => {
        expect(sum([1, 2, 3])).to.be.equal(6);
        expect(sum([1, "2", 3])).to.be.equal(6);
        expect(sum([1, -2, 3])).to.be.equal(2);
        expect(sum([0, 0, 0])).to.be.equal(0);
    });
    it('should return zero if length of the array is zero', () => {
        expect(sum([])).to.be.equal(0);
    })
})