const {expect} = require('chai');
const {chooseYourCar} = require('./chooseYourCar');

describe('ChooseYourCar Tests', () => {
    describe('choosingType Test Func', () => {
        it('should throw an error if the year is less than 1900 and grater than 2022', () => {
            expect(() => {chooseYourCar.choosingType('Sedan', 'Red', 1899)}).to.throw("Invalid Year!");
            expect(() => {chooseYourCar.choosingType('Sedan', 'Red', 2023)}).to.throw("Invalid Year!");
        });
        it('should throw an error if type is different from Sedan', () => {
            expect(() => {chooseYourCar.choosingType('Coupe', 'Red', '2021')}).to.throw("This type of car is not what you are looking for.");
        });
        it('should return proper message if year is grater or equal to 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'Red', 2010)).to.be.equal(`This Red Sedan meets the requirements, that you have.`);
            expect(chooseYourCar.choosingType('Sedan', 'Red', 2022)).to.be.equal(`This Red Sedan meets the requirements, that you have.`);
        });
        it('should retirn proper message if the year is lower than 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'Red', 2009)).to.be.equal(`This Sedan is too old for you, especially with that Red color.`)
            expect(chooseYourCar.choosingType('Sedan', 'Red', 1900)).to.be.equal(`This Sedan is too old for you, especially with that Red color.`)
        });
    })
    describe('brandName Test Func', () => {
        it('should throw an error if input is invalid', () => {
            let brandsArr = ['BMW', 'Skoda', 'Audi']
            expect(() => {chooseYourCar.brandName('BMW', 0.1)}).to.throw("Invalid Information!");
            expect(() => {chooseYourCar.brandName(brandsArr, -1)}).to.throw("Invalid Information!");
            expect(() => {chooseYourCar.brandName(brandsArr, 3)}).to.throw("Invalid Information!");
            expect(() => {chooseYourCar.brandName(brandsArr, 4)}).to.throw("Invalid Information!");
        });
        it('should return the final brands', () => {
            let brandsArr = ['BMW', 'Skoda', 'Audi'];
            let index = 0;

            expect(chooseYourCar.brandName(brandsArr, index)).to.be.equal('Skoda, Audi');
            
        });
    })
    describe('CarFuelConsumption Test Func', () => {
        it('should throw an error of input is invalid', () => {
            expect(() => {chooseYourCar.carFuelConsumption('1', 2)}).to.throw("Invalid Information!");
            expect(() => {chooseYourCar.carFuelConsumption(1, 0)}).to.throw("Invalid Information!");
            expect(() => {chooseYourCar.carFuelConsumption(1, -1)}).to.throw("Invalid Information!");
            expect(() => {chooseYourCar.carFuelConsumption(1, '2')}).to.throw("Invalid Information!");
            expect(() => {chooseYourCar.carFuelConsumption(0, 2)}).to.throw("Invalid Information!");
            expect(() => {chooseYourCar.carFuelConsumption(-1, 2)}).to.throw("Invalid Information!");
        });
        it('should return proper message if litersPerHundredKm is lower or equal to 7', () => {
            let consumptedFuelInLiters = 175;
            let distanceInKilometers = 2500;
            let litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);
            expect(chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLiters)).to.be.equal(`The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`);
            
            consumptedFuelInLiters = 100;
            distanceInKilometers = 2500;
            litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);
            expect(chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLiters)).to.be.equal(`The car is efficient enough, it burns ${litersPerHundredKm} liters/100 km.`);
        });
        it('should return proper message if car burns more than 7l/km', () => {
            let consumptedFuelInLiters = 250;
            let distanceInKilometers = 2500;
            let litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);
            expect(chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLiters)).to.deep.equal(`The car burns too much fuel - ${litersPerHundredKm} liters!`);
            
            consumptedFuelInLiters = 190;
            distanceInKilometers = 2500;
            litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);
            expect(chooseYourCar.carFuelConsumption(distanceInKilometers, consumptedFuelInLiters)).to.be.equal(`The car burns too much fuel - ${litersPerHundredKm} liters!`);
        })
    })
})