const {expect} = require('chai');
const {assert} = require('chai');
const {PaymentPackage} = require('./paymentPackage')

describe('payment package tests', () => {
    describe('create instance', () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage('Vesko', 10);
        });

        it('name should be correct', () => {
            // expect(paymentPackage._name).to.be.equal('Vesko')
            assert.equal(paymentPackage._name, 'Vesko');
        })
        it('value should be correct', () => {
            assert.equal(paymentPackage._value, 10);
        })
        it('VAT default value should be correct', () => {
            expect(paymentPackage._VAT).to.be.equal(20);
            expect(typeof paymentPackage._VAT).to.be.equal('number');
        })
        it('active default bool value should be correct', () => {
            expect(paymentPackage._active).to.be.equal(true);
            expect(typeof paymentPackage._active).to.be.equal('boolean')
        })
    })

    describe('test getters', () => {
        beforeEach(() => {
            paymentPackage = new PaymentPackage('Vesko', 10);
        });
        it('should return correct name', () => {
            expect(paymentPackage.name).to.be.equal('Vesko');
        })
        it('should return correct value', () => {
            expect(paymentPackage.value).to.be.equal(10);
        })
        it('should return correct VAT', () => {
            expect(paymentPackage.VAT).to.be.equal(20);
        })
        it('should return correct active', () => {
            expect(paymentPackage.active).to.be.equal(true);
        })
    })

    describe('test setters', () => {
        it('set incorrect type of name and should throw an error', () => {
            expect(() => {new PaymentPackage(10, 10)}).to.throw('Name must be a non-empty string');
        })
        it('set empty name with length equals to 0 and should throw an error', () => {
            expect(() => {new PaymentPackage('', 10)}).to.throws('Name must be a non-empty string');
        })
        it('set correct name and should return it', () => {
            let paymentPackage = new PaymentPackage('Vesko', 10);
            expect(paymentPackage.name).to.be.equal('Vesko');
            paymentPackage.name = 'Gosho';
            expect(paymentPackage.name).to.be.equal('Gosho');
        })

        it('set incorrect type of value and should throw an error', () => {
            expect(() => {new PaymentPackage('Vesko', '1')}).to.throw('Value must be a non-negative number');
        })
        it('set negative value and should throw an error', () => {
            expect(() => {new PaymentPackage('Vesko', -1)}).to.throw('Value must be a non-negative number');
        })
        it('set correct value and should return it', () => {
            let paymentPackage = new PaymentPackage('Vesko', 10);
            
            expect(paymentPackage.value).to.be.equal(10);
            paymentPackage.value = 20;
            expect(paymentPackage.value).to.be.equal(20);
            paymentPackage.value = 0;
            expect(paymentPackage.value).to.be.equal(0);
        })
        it('set incorrect type of vat and should throw an error', () => {
            let paymentPackage = new PaymentPackage('Vesko', 10);
            expect(() => {paymentPackage.VAT = 'Hello'}).to.throws('VAT must be a non-negative number')
        })
        it('set negative value to VAT and should throw and error', () => {
            let paymentPackage = new PaymentPackage('Vesko', 10);
            expect(() => {paymentPackage.VAT = -1}).to.throw('VAT must be a non-negative number');
        })
        it('set correct value to VAT and should return it', () => {
            let paymentPackage = new PaymentPackage('Vesko', 10);
            expect(paymentPackage.VAT).to.be.equal(20);
            paymentPackage.VAT = 31
            expect(paymentPackage.VAT).to.be.equal(31);
        })

        it('set incorrect value to active and should throw an error', () => {
            let paymentPackage = new PaymentPackage('Vesko', 10);
            expect(() => {paymentPackage.active = 'boolean'}).to.throw('Active status must be a boolean');
        })
        it('set correct value to active and should return it', () => {
            let paymentPackage = new PaymentPackage('Vesko', 10);
            expect(paymentPackage.active).to.be.equal(true)
            paymentPackage.active = false;
            expect(paymentPackage.active).to.be.equal(false);
        })
    })
    describe('test toString method', () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage('Vesko', 10);
        })
        it('should return active state', () => {
            // paymentPackage.active = false
            const output = [
                `Package: ${paymentPackage.name}` + (paymentPackage.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${paymentPackage.value}`,
                `- Value (VAT ${paymentPackage.VAT}%): ${paymentPackage.value * (1 + paymentPackage.VAT / 100)}`
              ].join('\n');
    
            expect(output).to.be.equal(paymentPackage.toString())
        })

        it('should return non-active state', () => {
            paymentPackage.active = false;
            const output = [
                `Package: ${paymentPackage.name}` + (paymentPackage.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${paymentPackage.value}`,
                `- Value (VAT ${paymentPackage.VAT}%): ${paymentPackage.value * (1 + paymentPackage.VAT / 100)}`
              ].join('\n');
    
            expect(output).to.be.equal(paymentPackage.toString())
        })
        
    })
})