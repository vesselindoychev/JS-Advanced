const {expect} = require('chai');
const {flowerShop} = require('./flowerShop');

describe('Flower Shop Test', () => {
    describe('calcPriceOfFlowers', () => {
        it('set invalid type of input and should throw an error', () => {
            expect(() => {flowerShop.calcPriceOfFlowers('Rose', 10.2, 3)}).to.throw('Invalid input!');
            expect(() => {flowerShop.calcPriceOfFlowers('Rose', 10.2, 3.1)}).to.throw('Invalid input!');
            expect(() => {flowerShop.calcPriceOfFlowers(['Rose'], 10, 3)}).to.throw('Invalid input!');
        });
        it('should return valid output', () => {
            let flower = 'Rose';
            let price = 10;
            let quantity = 3
            let result = price * quantity;
            expect(flowerShop.calcPriceOfFlowers(flower, price, quantity)).to.be.equal(`You need $${result.toFixed(2)} to buy ${flower}!`);
        });
    });
    describe('checkFlowersAvailable', () => {
        it('should return that flower is in stock', () => {
            let garden = ['Rose', 'Lily', 'Orchid'];
            let flower = 'Rose';
            expect(flowerShop.checkFlowersAvailable(flower, garden)).to.be.equal(`The ${flower} are available!`);
            flower = 'Lily'
            expect(flowerShop.checkFlowersAvailable(flower, garden)).to.be.equal(`The ${flower} are available!`);
        });
        it('should return message about that flower is out of stock or it is sold', () => {
            let garden = ['Rose', 'Lily', 'Orchid'];
            let flower = 'Kokiche';
            expect(flowerShop.checkFlowersAvailable(flower, garden)).to.be.equal(`The ${flower} are sold! You need to purchase more!`)
            flower = 'Minzuhar'
            expect(flowerShop.checkFlowersAvailable(flower, garden)).to.be.equal(`The ${flower} are sold! You need to purchase more!`)
        });
    });
    describe('sellFlowers', () => {
        it('if input is invalid should throw an error', () => {
            let garden = ['Rose', 'Lily'];
            
            expect(() => {flowerShop.sellFlowers(garden, '2')}).to.throw('Invalid input!');
            expect(() => {flowerShop.sellFlowers(garden, -1)}).to.throw('Invalid input!');
            expect(() => {flowerShop.sellFlowers(garden, 2)}).to.throw('Invalid input!');
            expect(() => {flowerShop.sellFlowers('Rose', 2)}).to.throw('Invalid input!');
        });
        it('should return some shop with flowers', () => {
            let garden = ['Rose', 'Lily', 'Orchid'];
            let space = 2;
            expect(flowerShop.sellFlowers(garden, space)).to.be.equal('Rose / Lily')
            space = 1;
            expect(flowerShop.sellFlowers(garden, space)).to.be.equal('Rose / Orchid');
            space = 0;
            expect(flowerShop.sellFlowers(garden, space)).to.be.equal('Lily / Orchid');
        })
    })
})