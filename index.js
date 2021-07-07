/* eslint-disable no-restricted-globals */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static listOfBooks = JSON.parse(localStorage.getItem('books')) || [];

  static addBook(title, author) {
    const serialNumber = Book.listOfBooks.length + 1;
    Book.listOfBooks.push({ serialNumber, title, author });
    localStorage.setItem('books', JSON.stringify(Book.listOfBooks));
  }

  static removeBook(event) {
    const remSerial = event.target.parentElement.id;
    // eslint-disable-next-line eqeqeq
    Book.listOfBooks = Book.listOfBooks.filter((book) => book.serialNumber != remSerial);
    localStorage.setItem('books', JSON.stringify(Book.listOfBooks));
    location.reload();
  }

  static display() {
    const booksContainer = document.getElementById('display-books');
    // eslint-disable-next-line no-restricted-syntax
    for (const book of Book.listOfBooks) {
      booksContainer.innerHTML += `
            <div id=‘${book.serialNumber}’>
                <p>${book.title}</p>
                <p>${book.author}</p>
                <button type=“button” class=“removebtn” onclick=‘removeBook(event)’> Remove </button>
                <hr>
            </div>
            `;
    }
  }

  static handleAdd(event) {
    event.preventDefault();
    const titleInput = document.querySelector('input[placeholder="Title"]');
    const authorInput = document.querySelector('input[placeholder="Author"]');
    if (!(titleInput.value.length < 3 || authorInput.value.length < 3)) {
      Book.addBook(titleInput.value, authorInput.value, Book.listOfBooks);
      location.reload();
      // new Book(titleInput.value, authorInput.value)
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

const form = document.querySelector('form');
form.addEventListener('submit', Book.handleAdd);
