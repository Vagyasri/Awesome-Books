const listOfBooks = [
     {title: 'book1 title', author:'author 1'},
     {title: 'book2 title', author:'author 2'}
];

 function AddBook(title, author, collection){
    collection.push({title: title, author: author})
}

AddBook('book3', 'author-3', listOfBooks);
console.log(listOfBooks);


