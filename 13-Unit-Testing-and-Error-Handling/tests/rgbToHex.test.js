const {expect} = require('chai');
const {rgbToHexColor} = require('../06-rgbToHex');

describe('RGB to Hex Color', () => {
    it('should return undefined if any of the parameters are of invalid type', () => {
        expect(rgbToHexColor(1, '2', 3)).to.be.undefined;
        expect(rgbToHexColor([1], 2, 3)).to.be.undefined;
        expect(rgbToHexColor(1, 2.1, 3)).to.be.undefined;
        expect(rgbToHexColor(1, '2', {color: 1})).to.be.undefined;
    });

    it('should return undefined if any of the parameters are out of range', () => {
        expect(rgbToHexColor(-1, 20, 256)).to.be.undefined;
        expect(rgbToHexColor(1, 300, 255)).to.be.undefined;
        expect(rgbToHexColor(1, 20, -100)).to.be.undefined;
    });

    it('should return the same color in hex if all of the parameters are valid', () => {
        expect(rgbToHexColor(1, 2, 3)).to.be.equal('#010203');
        expect(rgbToHexColor(0, 255, 30)).to.be.equal('#00FF1E');
        expect(rgbToHexColor(100, 34, 2)).to.be.equal('#642202');
        expect(rgbToHexColor(255, 162, 45)).to.be.equal('#FFA22D');
    })
})