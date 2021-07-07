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
  static display(){
    const booksContainer = document.getElementById('display-books');
    for (const book of Book.listOfBooks) {
        booksContainer.innerHTML += `
            <div id='${book.serialNumber}'>
                <p>${book.title}</p>
                <p>${book.author}</p>
                <button type="button" class="removebtn" onclick='Methods.removeBook(event)'> Remove </button>
                <hr>
            </div> 
            `;
      }
  }

  static handleAddtion(event){

    event.preventDefault();
    const titleInput = document.querySelector('input[placeholder="Title"]');
    const authorInput = document.querySelector('input[placeholder="Author"]');
    if (!(titleInput.value.length < 3 || authorInput.value.length < 3)) {
      Methods.add({title: titleInput.value, author: authorInput.value});
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


// Methods.add({title: 'CLASSmy-book', author:'class'});
//console.log(Book.listofBooks)





// let book1 = new Book({ author:'author', title:'first-book'});

// let book2 = new Book({'2nd-book', 'author'});
// let book3 = new Book({'3rd-book', 'author'});

// console.log(book1)
// // console.log(book1.author)