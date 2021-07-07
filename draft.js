// let listOfBooks = JSON.parse(localStorage.getItem('books')) || [];
// let listOfBooks = [];

class Book {
    static listOfBooks = JSON.parse(globalThis.localStorage.getItem('books')) || [];

    static #numOfBooks = 0;

    constructor({ title, author }) {
      this.title = title;
      this.author = author;
      Book.#numOfBooks += 1;
      this.serialNumber = Book.#numOfBooks;
      Book.listOfBooks.push(this);
    }
}
class Methods {
  constructor() {}

  static add({ title, author }) {
     new Book({ title, author });
    globalThis.localStorage.setItem('books', JSON.stringify(Book.listOfBooks));
  }
}



// Methods.add({title: 'CLASSmy-book', author:'class'});
//console.log(Book.listofBooks)





// let book1 = new Book({ author:'author', title:'first-book'});

// let book2 = new Book({'2nd-book', 'author'});
// let book3 = new Book({'3rd-book', 'author'});

// console.log(book1)
// // console.log(book1.author)