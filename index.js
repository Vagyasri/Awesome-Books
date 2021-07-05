let listOfBooks = [
     {title: 'book1 title', author:'author 1'},
     {title: 'book2 title', author:'author 2'}
];

 function addBook(title, author, collection){
    collection.push({title: title, author: author})
}

// AddBook('book3', 'author-3', listOfBooks);
// console.log(listOfBooks);

function removeBook(remTitle, collection){
 listOfBooks = collection.filter(book => book.title != remTitle);
}

// RemoveBook('book2 title', listOfBooks);
// console.log(listOfBooks);

function display(collection){
     
}

