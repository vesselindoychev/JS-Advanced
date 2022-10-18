const {expect} = require('chai');
const {assert} = require('chai');
const {bookSelection} = require('./bookSelection')

describe('BookSelection Test', () => {
    describe('isGenreSuitable Tests', () => {
        it('should return genre is not suitable', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.be.equal
            (`Books with Thriller genre are not suitable for kids at 12 age`)
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.be.equal
            (`Books with Horror genre are not suitable for kids at 12 age`)
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.be.equal
            (`Those books are suitable`);
        });
        it('should return that genre is suitable', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.be.equal
            (`Those books are suitable`);
        })
    });
    describe('isItAffordable Tests', () => {
        it('should throw error if invalid type of price or budget is given', () => {
            expect(() => {bookSelection.isItAffordable('12', '100')}).to.throw('Invalid input');
            expect(() => {bookSelection.isItAffordable(12, '100')}).to.throw('Invalid input');
            expect(() => {bookSelection.isItAffordable('12', 100)}).to.throw('Invalid input');
            expect(() => {bookSelection.isItAffordable('12', {price: 100})}).to.throw('Invalid input');
        })
        it('should return error message if there is no enough money', () => {
            expect(bookSelection.isItAffordable(10, 5)).to.be.equal("You don't have enough money");
            expect(bookSelection.isItAffordable(20, 19)).to.be.equal("You don't have enough money");
            expect(bookSelection.isItAffordable(10, 20)).to.be.equal(`Book bought. You have 10$ left`);
            expect(bookSelection.isItAffordable(20, 20)).to.be.equal(`Book bought. You have 0$ left`);
        })
        
    });
    describe('suitableTitles Tests', () => {
        it('set invalid type of array or genre and should throw error', () => {
            let invalidArr = 'valid arr';
            let genre = 1;
            expect(() => {bookSelection.suitableTitles(invalidArr, genre)}).to.throw('Invalid input')
        })
        it('set invalid type of array or genre and should throw error', () => {
            let invalidArr = 'valid arr';
            let genre = 'Horror';
            expect(() => {bookSelection.suitableTitles(invalidArr, genre)}).to.throw('Invalid input')
        })
        it('set invalid type of array or genre and should throw error', () => {
            let invalidArr = {arr: 1};
            let genre = 'Horror';
            expect(() => {bookSelection.suitableTitles(invalidArr, genre)}).to.throw('Invalid input')
        })
        it('should return array result with book titles if genre of book title is equal as the wanted genre', () => {
            let validArr = [{'title': 'Da Vinci Code', 'genre': 'Horror'},
            {title: 'Dora the Explorer', genre: 'Thriller'}, {title: 'FightClub', genre: 'Horror'}];
            let wantedGenre = 'Horror';
            let resArr = ['Da Vinci Code', 'FightClub']
            let actualRes = bookSelection.suitableTitles(validArr, wantedGenre)
            expect(actualRes.length).to.be.equal(resArr.length)
            expect(actualRes.join(', ')).to.be.equal(resArr.join(', '))
            
        })
    })

})