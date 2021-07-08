/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
// eslint-disable-next-line max-classes-per-file
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
    // const bookId = this.libBooks.length + 1;
    const bookId = this.nextBookId();
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

  nextBookId() {
    const lastBookObj = this.libBooks.length - 1;
    const returnedID = (this.libBooks.length > 0) ? (this.libBooks[lastBookObj].bookId + 1) : 1;
    return returnedID;
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

// eslint-disable-next-line no-unused-vars
function removeBookHandler(event) {
  lib.remove(event.target.parentElement.parentElement.id); location.reload();
}

function display() {
  const booksContainer = document.getElementById('display-books');
  // eslint-disable-next-line no-restricted-syntax
  for (const book of lib.libBooks) {
    booksContainer.innerHTML += `
            <div id='${book.bookId}' class='single-book'>
                <div class='book-info' >
                  <p>
                    <span class='book-title'>${book.title}</span>
                    <spna class='span-by'> by </span>
                    <span class='book-author'>${book.author}</span>
                  </p>
                </div>
                <div class='btn-container'>
                  <button type="button" class="removebtn" onclick='removeBookHandler(event)'> Remove </button>
                </div>
                
            </div> 
            `;
  }
}

// Start of the program
const lib = new Library();
const form = document.querySelector('form');
const contact = document.querySelector('.contact');
const booksList = document.querySelector('#display-books');

form.addEventListener('submit', addBookHandler);
display();


//navigation handler 
function navHandler(event){
  //look for the class name
  console.log(event.target.parentElement.parentElement.id)
  switch(event.target.parentElement.parentElement.id) {
    case 'item-one':
      contact.classList.add('disapear');
      form.classList.add('disapear');
      booksList.classList.remove('disapear');
      break;
    case 'item-two':
      contact.classList.add('disapear');
      booksList.classList.add('disapear');
      form.classList.remove('disapear');
      break;
      case 'item-three':
        contact.classList.remove('disapear');
        booksList.classList.add('disapear');
        form.classList.add('disapear');
      break;
    default:
      // code block
  }
}