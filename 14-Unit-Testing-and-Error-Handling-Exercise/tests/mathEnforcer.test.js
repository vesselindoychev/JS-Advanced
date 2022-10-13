const {expect} = require('chai');
const {mathEnforcer} = require('../04-mathEnforcer');


describe('Math Enforcer', () => {
    it('should return an object',  () => {
        expect(typeof mathEnforcer).to.be.equal('object');
    });

    it('should return all functions as properties', () => {
        let obj = mathEnforcer;
        expect(obj).haveOwnProperty('addFive');
        expect(obj).haveOwnProperty('subtractTen');
        expect(obj).haveOwnProperty('sum');
    });

    describe('addFive', () => {
        it('should return undefined if the parameter is not a number', () => {
            let obj = mathEnforcer;
            expect(obj.addFive([1])).to.be.equal(undefined);
            expect(obj.addFive('1')).to.be.equal(undefined);
            expect(obj.addFive({number: 2})).to.be.equal(undefined);
        });

        it('should add 5 to the result and return it', () => {
            let obj = mathEnforcer;
            expect(obj.addFive(5)).to.be.equal(10);
            expect(obj.addFive(-5)).to.be.equal(0);
            expect(obj.addFive(1.25)).to.be.closeTo(6.25, 0.01);
        });
    });

    describe('subtractTen', () => {
        it('should return undefined if parameter is not a number', () => {
            let obj = mathEnforcer;
            expect(obj.subtractTen('1')).to.be.equal(undefined);
            expect(obj.subtractTen([1])).to.be.equal(undefined);
            expect(obj.subtractTen({number: 'ten'})).to.be.equal(undefined);
        });

        it('should subtract 10 from the result and return in', () => {
            let obj = mathEnforcer;
            expect(obj.subtractTen(10)).to.be.equal(0);
            // expect(obj.subtractTen(20.1)).to.be.equal(10.1);
            expect(obj.subtractTen(20.11)).to.be.closeTo(10.11, 0.01);
            expect(obj.subtractTen(-20)).to.be.equal(-30);
        });
    });

    describe('sum', () => {
        it('should return undefined if one or both of the numbers are not type of numbers', () => {
            let obj = mathEnforcer;
            expect(obj.sum(1, '1')).to.be.equal(undefined);
            expect(obj.sum('text', 2)).to.be.equal(undefined);
            expect(obj.sum('text', '2')).to.be.equal(undefined);
            expect(obj.sum([1, 2], 2)).to.be.equal(undefined);
        });

        it('should add the two numbers and return the result', () => {
            let obj = mathEnforcer;
            expect(obj.sum(10, 20)).to.be.equal(30);
            expect(obj.sum(20, -10)).to.be.equal(10);
            expect(obj.sum(4.21, 20)).to.be.closeTo(24.21, 0.01);
            expect(obj.sum(-10, -20)).to.be.equal(-30);
        });
    });
})