/* eslint-disable no-restricted-globals */
let listOfBooks = [];

function addBook(title, author) {
  listOfBooks = JSON.parse(localStorage.getItem('books')) || [];
  listOfBooks.push({ title, author });
  localStorage.setItem('books', JSON.stringify(listOfBooks));
}
// eslint-disable-next-line no-unused-vars
function removeBook(event) {
  const remTitle = event.target.parentElement.firstElementChild.textContent;
  listOfBooks = JSON.parse(localStorage.getItem('books'));
  listOfBooks = listOfBooks.filter((book) => book.title !== remTitle);
  localStorage.setItem('books', JSON.stringify(listOfBooks));
  location.reload();
}

function display() {
  listOfBooks = JSON.parse(localStorage.getItem('books')) || [];
  const booksContainer = document.getElementById('display-books');

  // eslint-disable-next-line no-restricted-syntax
  for (const book of listOfBooks) {
    booksContainer.innerHTML += `
        <div>
            <p>${book.title}</p>
            <p>${book.author}</p>
            <button type="button" class="removebtn" onclick='removeBook(event)'> Remove </button>
            <hr>
        </div> 
        `;
  }
}

function handleAdd(event) {
  event.preventDefault();
  const titleInput = document.querySelector('input[placeholder="Title"]');
  const authorInput = document.querySelector('input[placeholder="Author"]');
  if (!(titleInput.value.length < 3 || authorInput.value.length < 3)) {
    addBook(titleInput.value, authorInput.value, listOfBooks);
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

const form = document.querySelector('form');
form.addEventListener('submit', handleAdd);

display();
