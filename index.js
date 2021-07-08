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

// UI helpers
function addBookHandler(event) {
  event.preventDefault();
  const titleInput = document.querySelector('input[placeholder="Title"]');
  const authorInput = document.querySelector('input[placeholder="Author"]');
  if (!(titleInput.value.length < 3 || authorInput.value.length < 3)) {
    lib.add({ title: titleInput.value, author: authorInput.value }); location.reload();
  } else {
    const form = document.querySelector('form');
    const errorDiv = document.createElement('div');
    form.prepend(errorDiv);
    errorDiv.innerHTML = `
         <p>Check your input *min length 3 chars* </p>
         `;
  }
}

function removeBookHandler(event) {
  lib.remove(event.target.parentElement.id); location.reload();
}

function display() {
  const booksContainer = document.getElementById('display-books');
  // eslint-disable-next-line no-restricted-syntax.
  for (const book of lib.libBooks) {
    booksContainer.innerHTML += `
            <div id='${book.bookId}'>
                <p>${book.title}</p>
                <p>${book.author}</p>
                <button type="button" class="removebtn" onclick='removeBookHandler(event)'> Remove </button>
                <hr>
            </div> 
            `;
  }
}