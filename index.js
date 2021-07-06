let listOfBooks = [];

function addBook(title, author) {
  listOfBooks = JSON.parse(localStorage.getItem("books")) || [];
  listOfBooks.push({ title: title, author: author });
  localStorage.setItem("books", JSON.stringify(listOfBooks));
}

function removeBook(event) {
  let remTitle = event.target.parentElement.firstElementChild.textContent;
  listOfBooks = JSON.parse(localStorage.getItem("books"));
  listOfBooks = listOfBooks.filter((book) => book.title !== remTitle);
  localStorage.setItem("books", JSON.stringify(listOfBooks));
  location.reload();
}p

function display() {
  listOfBooks = JSON.parse(localStorage.getItem("books")) || [];
  booksContainer = document.getElementById("display-books");

  for (let book of listOfBooks) {
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
  let titleInput = document.querySelector('input[placeholder="Title"]');
  let authorInput = document.querySelector('input[placeholder="Author"]');
  //titleInput.addEventListener('focus', ()=>{console.log(titleInput.value)})
  if (!(titleInput.value.length < 3 || authorInput.value.length < 3)) {
    addBook(titleInput.value, authorInput.value, listOfBooks);
    location.reload();
  } else {
    let form = document.querySelector("form");
    let errorDiv = document.createElement("div");
    form.prepend(errorDiv);
    errorDiv.innerHTML = `
       <p>Check your input *min length 3 chars* </p>
       `;
  }
}

let form = document.querySelector("form");
form.addEventListener("submit", handleAdd);

display();
