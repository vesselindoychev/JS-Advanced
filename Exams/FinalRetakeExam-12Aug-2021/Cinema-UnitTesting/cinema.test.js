const {expect} = require('chai');
const {cinema} = require('./cinema');

describe('Cinema Tests', () => {
    describe('Show Movies Func Test', () => {
        it('should return that there are no movies if Arr is empty', () => {
            expect(cinema.showMovies([])).to.be.equal("There are currently no movies to show.");
        });
        it('should return all movies which are in the arr', () => {
            let movies = ['King Kong', 'The Tomorrow War', 'Joker']
            let res = movies.join(', ')
            expect(cinema.showMovies(movies)).to.be.equal(res);
        });
    })
    describe('Ticket Price Func Test', () => {
        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }

        it('should throw an error if projection is not in the schedule', () => {
            expect(() => {cinema.ticketPrice('3D')}).to.throw('Invalid projection type.');
        });
        it('should return price of the ticket when projection type is in the schedule', () => {
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12);
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.50);
        });
    })
    describe('Swap Seats in Hall Func Test', () => {
        it('should not change the seats if input is invalid', () => {
            expect(cinema.swapSeatsInHall('1', '2')).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(0, 2)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(21, 1)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 21)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(21, 0)).to.be.equal("Unsuccessful change of seats in the hall.");
            
        });
        it('should swap sets in the hall when input is valid', () => {
            expect(cinema.swapSeatsInHall(1, 2)).to.be.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(20, 2)).to.be.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 20)).to.be.equal("Successful change of seats in the hall.");
        })
    })
})