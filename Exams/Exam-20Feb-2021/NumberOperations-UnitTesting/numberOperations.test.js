const { expect } = require('chai');
const {assert} = require('chai');
const { numberOperations } = require('./numberOperations');


describe('NumberOperarions Test', () => {
    describe('powNumber Test', () => {
        it('return result', () => {
            expect(numberOperations.powNumber(2)).to.be.equal(4);
            expect(numberOperations.powNumber(10)).to.be.equal(100);
        });
    })
    describe('NumberChecker Test', () => {
        it('should throw an error if input is not a number', () => {
            expect(() => { numberOperations.numberChecker('one') }).to.throw('The input is not a number!');
            expect(() => { numberOperations.numberChecker({ number: 1 }) }).to.throw('The input is not a number!');
        });
        it('if number is lower than 100 return message', () => {
            expect(numberOperations.numberChecker(99)).to.be.equal('The number is lower than 100!');
        });
        it('if number is grater or equal to 100 return message', () => {
            expect(numberOperations.numberChecker(100)).to.be.equal('The number is greater or equal to 100!')
        });
    })
    describe('sumArray Test', () => {

        // let longerArr = array1
        // let rounds = array2.length
        // 1 + 6; 2 + 7; 3 + 8;
        // [7, 9, 11]
        it('should return result', () => {
            let array1 = [1, 2, 3, 4, 5];
            let array2 = [6, 7, 8, 10];
            const longerArr = array1.length > array2.length ? array1 : array2;
            const rounds = array1.length < array2.length ? array1.length : array2.length;

            const resultArr = [];

            for (let i = 0; i < rounds; i++) {
                resultArr.push(array1[i] + array2[i]);
            }

            resultArr.push(...longerArr.slice(rounds));

            assert.equal(numberOperations.sumArrays(array1, array2), resultArr)
            // expect(numberOperations.sumArrays(array1, array2)).to.be.equal(resultArr);
        })


    })
})