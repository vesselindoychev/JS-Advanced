const {expect} = require('chai');
const {createCalculator} = require('../07-addAndSubtract');

describe('create calculator', () => {
    it('should return an object', () => {
        expect(typeof createCalculator()).to.be.equal('object');
    });

    it('should return an object with all of the functions as properties', () => {
        let obj = createCalculator();
        expect(obj).to.haveOwnProperty('add');
        expect(obj).to.haveOwnProperty('subtract');
        expect(obj).to.haveOwnProperty('get');
    });
    it('internal sum cannot be modified', () => {
        expect(createCalculator().value).to.be.equal(undefined);
    });
    it('add function takes a parameter and adds it to the internal sum', () => {
        let calc = createCalculator();
        calc.add(1);
        expect(calc.get()).to.be.equal(1);

        calc.add('10');
        expect(calc.get()).to.be.equal(11);
    });

    it('subtract function takes a parameter and subtracts it from the internal sum', () => {
        let calc = createCalculator();
        calc.add(20);
        calc.subtract(10);
        expect(calc.get()).to.be.equal(10);

        calc.subtract('5');
        expect(calc.get()).to.be.equal(5);
    });

    it('get function should return internal sum', () => {
        let calc = createCalculator();
        expect(calc.get()).to.be.equal(0);
    }) 
        
    
})