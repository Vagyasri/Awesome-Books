
 let listOfBooks = [];

 function addBook(title, author){
    listOfBooks = JSON.parse(localStorage.getItem('books'))|| [];
    listOfBooks.push({title: title, author: author}) 
    localStorage.setItem('books', JSON.stringify(listOfBooks));
}

function removeBook(remTitle, collection){
 listOfBooks = collection.filter(book => book.title != remTitle);
}

function display(){
    listOfBooks = JSON.parse(localStorage.getItem('books'))|| [];
    booksContainer = document.getElementById('display-books');
    
    for(let book of listOfBooks){
        booksContainer.innerHTML += `
        <div>
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button type="button"> Remove </button>
        <hr>
        </div> 
        `;
    } 
}

function handleAdd(event){

    //console.log(event.target)
    //event.preventDefault();
    let titleInput = document.querySelector('input[placeholder="Title"]');
    let authorInput = document.querySelector('input[placeholder="Author"]');

    //console.log(titleInput.value, authorInput.value.length)

    addBook(titleInput.value, authorInput.value, listOfBooks);
     //display(listOfBooks);
}

display();

let form =  document.querySelector('form');  
form.addEventListener('submit', handleAdd)








