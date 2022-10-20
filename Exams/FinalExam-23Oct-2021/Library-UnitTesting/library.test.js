const {expect} = require('chai');
const {library} = require('./library');

describe('Library Tests', () => {
    describe('Calculate Price Of Book Test', () => {
        it('should throw an error if input is invalid', () => {
            expect(() => {library.calcPriceOfBook('Maze', '2000')}).to.throw('Invalid input');
            expect(() => {library.calcPriceOfBook(['Maze'], 2000)}).to.throw('Invalid input');
            expect(() => {library.calcPriceOfBook(['Maze'], '2000')}).to.throw('Invalid input');
            expect(() => {library.calcPriceOfBook(1, '2000')}).to.throw('Invalid input');
        });
        it('shoud return the price with discount if book is too ancient', () => {
            let price = 20;
            let total = price - (price * 0.5)
            let bookName = 'Harry Potter'
            expect(library.calcPriceOfBook(bookName, 1980)).to.be.equal(`Price of ${bookName} is ${total.toFixed(2)}`);
            expect(library.calcPriceOfBook(bookName, 1880)).to.be.equal(`Price of ${bookName} is ${total.toFixed(2)}`);
        });
        it('should return regular price of book without any discounts', () => {
            let price = 20;
            let bookName = 'Maze';
            expect(library.calcPriceOfBook(bookName, 1981)).to.be.equal(`Price of ${bookName} is ${price.toFixed(2)}`);
            expect(library.calcPriceOfBook(bookName, 2000)).to.be.equal(`Price of ${bookName} is ${price.toFixed(2)}`);
        })
    })
    describe('Find Book Test', () => {
        it('should throw an error when bookArr is empty', () => {
            expect(() => {library.findBook([], 'Troy')}).to.throw(("No books currently available"));
        });
        it('should return proper message when desired book is in bookArr', () => {
            expect(library.findBook(['Troy', 'Harry Potter', 'Maze'], 'Troy')).to.equal("We found the book you want.");
            expect(library.findBook(['Troy', 'Harry Potter', 'Maze'], 'Harry Potter')).to.equal("We found the book you want.");
        });
        it('should return proper message when desired book in not in bookArr', () => {
            expect(library.findBook(['Troy', 'Torronto', 'Vanga', 'Maze'], 'Bulgaria')).to.be.equal("The book you are looking for is not here!");
            expect(library.findBook(['Troy', 'Torronto', 'Vanga', 'Maze'], 'USA')).to.be.equal("The book you are looking for is not here!");
        });
    })
    describe('Arrange the Books Test', () => {
        it('should throw an error if input is invalid or lower than 0', () => {
            expect(() => {library.arrangeTheBooks('1')}).to.throw('Invalid input');
            expect(() => {library.arrangeTheBooks(-1)}).to.throw('Invalid input');
        });
        it('should arrange the books', () => {
            let countShelves = 5;
            let availableSpace = countShelves * 8;
            let booksCount = 40;

            expect(library.arrangeTheBooks(booksCount)).to.be.equal("Great job, the books are arranged.");
            booksCount = 30
            expect(library.arrangeTheBooks(booksCount)).to.be.equal("Great job, the books are arranged.");
            booksCount = 0
            expect(library.arrangeTheBooks(booksCount)).to.be.equal("Great job, the books are arranged.");
        });
        it('return proper message when booksCount is grater than book shelves', () => {
            let countShelves = 5;
            let availableSpace = countShelves * 8;
            let booksCount = 41;

            expect(library.arrangeTheBooks(booksCount)).to.be.equal("Insufficient space, more shelves need to be purchased.");
            booksCount = 100
            expect(library.arrangeTheBooks(booksCount)).to.be.equal("Insufficient space, more shelves need to be purchased.");
        })
    })
})