class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
        this.addedBooks = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error("Not enough space in the collection.");
        }
        this.books.push({
            bookName,
            bookAuthor,
            payed: false
        })
        this.addedBooks.push(bookName);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    } 
    payBook(bookName) {
        if (!this.addedBooks.includes(bookName)) {
            throw new Error(`${bookName} is not in the collection.`)
        }

        for (let bookObj of this.books) {
            if (bookObj.bookName === bookName) {
                if (bookObj.payed === true) {
                    throw  new Error(`${bookName} has already been paid.`)
                }
                bookObj.payed = true;
                return `${bookName} has been successfully paid.`
            }
        }
    }
    removeBook(bookName) {
        if (!this.addedBooks.includes(bookName)) {
            throw new Error("The book, you're looking for, is not found.")
        }
        let currentIndex = 0;
        let currentBookObj = 0;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].bookName === bookName) {
                if (this.books[i].payed === false) {
                    throw  new Error(`${bookName} need to be paid before removing from the collection.`)
                }
                currentIndex = i;
                currentBookObj = this.books[i]
                break;
            }
        }
        this.books.splice(currentIndex, currentBookObj) 
        return `${bookName} remove from the collection.`

    }
    getStatistics(bookAuthor) {
        let output = [];
        if (!bookAuthor) {
            output.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`)
            this.books.forEach(bookObj => {
                output.push(`${bookObj.bookName} == ${bookObj.bookAuthor} - ${bookObj.payed === true ? 'Has Paid' : 'Not Paid'}.`)
                return output.join('\n')
            })
        }
        for (let bookObj of this.books) {
            if(bookObj.bookAuthor === bookAuthor) {
                output.push(`${bookObj.bookName} == ${bookAuthor} - ${bookObj.payed === true ? 'Has Paid' : 'Not Paid'}.`)
            }
        }
        if (output.length === 0) {
            throw new Error(`${bookAuthor} is not in the collection.`)
        }
        return output.join('\n')
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
