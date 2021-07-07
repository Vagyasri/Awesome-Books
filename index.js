/* eslint-disable no-restricted-globals */
// eslint-disable-next-line max-classes-per-file
class Book {
  static listOfBooks = JSON.parse(localStorage.getItem('books')) || [];

  constructor({ title, author }) {
    this.title = title;
    this.author = author;
    this.serialNumber = Book.listOfBooks.length + 1;
    Book.listOfBooks.push(this);
  }
}
class Methods {
  // constructor() {}

  static add({ title, author }) {
    // eslint-disable-next-line no-new
    new Book({ title, author });
    localStorage.setItem('books', JSON.stringify(Book.listOfBooks));
  }

  static remove(event) {
    const remSerial = event.target.parentElement.id;
    // eslint-disable-next-line eqeqeq
    Book.listOfBooks = Book.listOfBooks.filter((book) => book.serialNumber != remSerial);

    localStorage.setItem('books', JSON.stringify(Book.listOfBooks)); location.reload();
  }

  static display() {
    const booksContainer = document.getElementById('display-books');
    // eslint-disable-next-line no-restricted-syntax
    for (const book of Book.listOfBooks) {
      booksContainer.innerHTML += `
          <div id='${book.serialNumber}'>
              <p>${book.title}</p>
              <p>${book.author}</p>
              <button type="button" class="removebtn" onclick='Methods.remove(event)'> Remove </button>
              <hr>
          </div> 
          `;
    }
  }

  static handleAddtion(event) {
    event.preventDefault();
    const titleInput = document.querySelector('input[placeholder="Title"]');
    const authorInput = document.querySelector('input[placeholder="Author"]');
    if (!(titleInput.value.length < 3 || authorInput.value.length < 3)) {
      Methods.add({ title: titleInput.value, author: authorInput.value });
      location.reload();
    } else {
      const form = document.querySelector('form');
      const errorDiv = document.createElement('div');
      form.prepend(errorDiv);
      errorDiv.innerHTML = `
       <p>Check your input *min length 3 chars* </p>
       `;
    }
  }
}

Methods.display();
const form = document.querySelector('form');
form.addEventListener('submit', Methods.handleAddtion);