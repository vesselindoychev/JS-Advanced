const {expect} = require('chai');
const {lookupChar} = require('../03-charLookUp');

describe('lookupChar', () => {
    it('should return undefined if string is actually not a string or index is not integer', () => {
        expect(lookupChar(1, 1)).to.be.equal(undefined);
        expect(lookupChar('text', '1')).to.be.equal(undefined);
        expect(lookupChar('text', 1.1)).to.be.equal(undefined);
        expect(lookupChar(['text'], 1)).to.be.equal(undefined);
        expect(lookupChar({name: 'text'}, 1)).to.be.equal(undefined);

    });

    it('should return incorrect index if string length is smaller or equal to the index or index is smaller than zero', () => {
        expect(lookupChar('text', 4)).to.be.equal('Incorrect index');
        expect(lookupChar('text', 5)).to.be.equal('Incorrect index');
        expect(lookupChar('tex', 4)).to.be.equal('Incorrect index');
        expect(lookupChar('text', -1)).to.be.equal('Incorrect index');
    });

    it('should return the char at the specified index', () => {
        expect(lookupChar('text', 3)).to.be.equal('t')
        expect(lookupChar('text', 0)).to.be.equal('t')
        expect(lookupChar('text', 1)).to.be.equal('e')
    })
})