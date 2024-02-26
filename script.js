function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

Book.prototype.displayInfo = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}.`);
}

function FictionBook(title, author, isbn, genre) {
    Book.call(this, title, author, isbn);
    this.genre = genre;
}
FictionBook.prototype = Object.create(Book.prototype);
FictionBook.prototype.constructor = FictionBook;

FictionBook.prototype.displayInfo = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Genre: ${this.genre}.`);
}

function Library() {
    this.books = [];
}

Library.prototype.addBook = function(book) {
    this.books.push(book);
}

Library.prototype.displayBooks = function () {
    console.log('Library Books:');
    this.books.forEach(function (book) {
      book.displayInfo();
    });
};

function LibraryMember(name) {
    this.name = name;
    this.borrowedBooks = [];
}

LibraryMember.prototype.borrowBook = function (book) {
    this.borrowedBooks.push(book);
};

LibraryMember.prototype.displayBorrowedBooks = function () {
    console.log(`${this.name}'s Borrowed Books:`);
    this.borrowedBooks.forEach(function (book) {
      book.displayInfo();
    });
};

var book1 = new Book('book1', 'author', '1111');
var book2 = new FictionBook('book2', 'author2', '2222', 'fiction');
var book3 = new Book('book3', 'author3', '3333');

book1.displayInfo();
book2.displayInfo();
book3.displayInfo();

var library = new Library();

library.addBook(book1);
library.addBook(book2);

library.displayBooks();

var member = new LibraryMember('Adrian Nicu');

member.borrowBook(book1);
member.borrowBook(book2);
member.borrowBook(book3);

member.displayBorrowedBooks();

