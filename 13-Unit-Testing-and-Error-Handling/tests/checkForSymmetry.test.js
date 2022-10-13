const {expect} = require('chai');
const {isSymmetric} = require('../05-checkForSymmetry');


describe('is array symmetric', () => {
    it('should taka an array as an argument', () => {
        let arr = [1, 'pesho', 2];
        expect(arr).to.be.an('array');
        // expect(arr).to.be.true;
    });

    it('should take an array as an argument and if it is array should return true', () => {
        let arr = [];
        let result = isSymmetric(arr);
        expect(result).to.be.true;
    })

    it('should return false if input is not an array', () => {
        let arr = 'Not input';
        // let arr = [1, 2, '3']
        let result = isSymmetric(arr);
        // expect(isSymmetric('not an array')).to.be.false;
        expect(result).to.be.false;
        expect(isSymmetric(2)).to.be.false;
    });

    it('should return true if input is a symmetric array', () => {
        let arr = [1, 2, 3, 4, 3, 2, 1];
        let result = isSymmetric(arr);
        expect(result).to.be.true;
    });
    
    it('should return false if input is not a symmetric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
        expect(isSymmetric([1, 2, 3, 2])).to.be.false;
        expect(isSymmetric([1, '2', 3, 2, 1])).to.be.false;

    })
})