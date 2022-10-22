const { expect } = require('chai');
const { dealership } = require('./dealership');

describe('Dealership Test', () => {
    describe('newCarCost func Test', () => {
        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }
        it('should return finalPrice', () => {
            let oldCarModel = 'Audi A4 B8';
            let newCarPrice = 200000;
            let discount = discountForOldCar[oldCarModel];
            let res = newCarPrice - discount
            expect(dealership.newCarCost(oldCarModel, newCarPrice)).to.be.equal(res)
        });
        it('should return new car price', () => {
            let oldCarModel = 'BMW 320D'
            expect(dealership.newCarCost(oldCarModel, 100000)).to.be.equal(100000);
        });
    })
    describe('carEquipment test', () => {
        it('should return selected extras', () => {
            let extras = ['heated seats', 'sliding roof', 'sport rims', 'navigation']
            let wantedExtrasIndex = [0, 3]
            expect(dealership.carEquipment(extras, wantedExtrasIndex)).to.deep.equal(['heated seats', 'navigation'])
        })



    })
    describe('euroCategory Test', () => {
        it('shoud add discount when euro category is grater or equal to 4', () => {
            let price = dealership.newCarCost('Audi A4 B8', 30000);
            let totalPrice = price - (price * 0.05);

            expect(dealership.euroCategory(4)).to.deep.equal(`We have added 5% discount to the final price: ${totalPrice}.`)
        })
        it('should return some message', () => {
            expect(dealership.euroCategory(3)).to.be.equal('Your euro category is low, so there is no discount from the final price!')
        })
    })
})