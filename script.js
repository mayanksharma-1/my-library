const Modal = document.querySelector("#modal");
const openModal = document.querySelector("#modal-open-btn");
const closeModal = document.querySelector("#modal-close-btn");
const catalog = document.querySelector(".catalog")


const myLibrary = [];

function Book(name, author, pages) {
  // the constructor...
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
    console.log(`running addBookToLibrary with ${book}`)
    const card = document.createElement("div");
    card.classList.add('card');

    const bookTitle = document.createElement("div");
    bookTitle.classList.add('bookTitle');
    bookTitle.innerText = book.name;

    const bookAuthor = document.createElement("div");
    bookAuthor.classList.add('bookAuthor');
    bookAuthor.innerText = book.author;

    const Pages = document.createElement("div");
    Pages.classList.add('Pages');
    Pages.innerText = book.pages;
    
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(Pages);
    
    

    catalog.appendChild(card);
}


openModal.addEventListener("click", () => {
  Modal.showModal();
});

closeModal.addEventListener('click',()=>{
    Modal.close();
})

document.getElementById('addBook-form').addEventListener('submit', function(event) {
    console.log(`submiting the form  `)
    event.preventDefault(); // prevent the form from submitting to a server 

    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const numPages = document.getElementById('numPages').value;

    book = new Book(bookName,authorName,numPages);
    addBookToLibrary(book);
    Modal.close();
    document.getElementById('addBook-form').reset();
})

