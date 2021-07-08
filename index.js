class Book {
  constructor({ title, author, bookId }) {
    this.title = title;
    this.author = author;
    this.bookId = bookId;
  }
}
class Library {
  constructor() {
    this.libBooks = JSON.parse(localStorage.getItem('books')) || [];
  }

  add({ title, author }) {
    const bookId = this.libBooks.length + 1;
    const book = new Book({ title, author, bookId });
    this.libBooks.push(book);
    this.updateLocalStorage();
  }

  remove(removedBookId) { /// hta5od ID bs
    // eslint-disable-next-line eqeqeq
    this.libBooks = this.libBooks.filter((book) => book.bookId != removedBookId);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.libBooks));
  }
}
