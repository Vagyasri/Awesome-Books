let listOfBooks = [
     {title: 'book1 title', author:'author 1'},
     {title: 'book2 title', author:'author 2'}
];

 function addBook(title, author, collection){
    collection.push({title: title, author: author})
}



function removeBook(remTitle, collection){
 listOfBooks = collection.filter(book => book.title != remTitle);
}



function display(collection){
    booksContainer = document.getElementById('display-books');
    for(let book of collection){
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
display(listOfBooks);

// when click ADD ---->
     //2) update our listOfBooks and call display()

function addBtnClick(){
    let container = document.createElement('div');
    container.innerHTML = `
        <p>HARRY POTTER book</p>
        <p>Testeroo Testyy</p>
         <button type="button"> Remove </button>
         <hr>
    `;
    let lastBook = document.querySelector('body div:last-of-type');
    lastBook.after(container);

}


// let titleInput = document.querySelector('input[placeholder="Title"]')
// titleInput.value = 'vdfvdfdffdffgf';



let addBtn =  document.querySelector('.add-btn');  
//console.log(addBtn)


addBtn.addEventListener('click', ()=>{console.log('clicked!!')})







