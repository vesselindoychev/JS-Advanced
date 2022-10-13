const {expect} = require('chai');
const {isOddOrEven} = require('../02-evenOrOdd');

describe('Odd or Even Tests', () => {
    it('should return undefined if input is different from string', () => {
        expect(isOddOrEven(1)).to.be.equal(undefined);
        expect(isOddOrEven(['1', 2, 3])).to.be.equal(undefined);
        expect(isOddOrEven({name: 3})).to.be.equal(undefined);
    });

    it('should return even if input length is even', () => {
        expect(isOddOrEven('text')).to.be.equal('even');
    });

    it('should return odd if input length is odd', () => {
        expect(isOddOrEven('alabala')).to.be.equal('odd');
    })
})