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
  this.readStatus = false; 
}

function addBookToLibrary(book) {
    console.log(`running addBookToLibrary with ${book.name} ${book.author} ${book.pages}`);
    
    myLibrary.push(book);
    const listOfCards = [];
    // console.log()

    for (let index = 0; index < myLibrary.length; index++) {
        const bookelement = myLibrary[index];

        const card = document.createElement("div");
        card.classList.add('card');
        
        const bookTitle = document.createElement("div");
        bookTitle.classList.add('bookTitle');
        bookTitle.innerText = bookelement.name;
        
        const bookAuthor = document.createElement("div");
        bookAuthor.classList.add('bookAuthor');
        bookAuthor.innerText = bookelement.author;
        
        const Pages = document.createElement("div");
        Pages.classList.add('Pages');
        Pages.innerText = bookelement.pages;
        
        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(Pages);
        
        card.setAttribute('data-index',index)

        listOfCards.push(card);
        
    }

    catalog.replaceChildren(...listOfCards);

}

defaultBook1 = new Book("The Final Empire","Brandon Sanderson",672);
defaultBook2 = new Book("Supper supportive","Sylica",1000);
defaultBook3 = new Book("Cultivation Nerd","HolyMouse",400);
defaultBook4 = new Book("The Last Orellen","Sieley",672);
defaultBook5 = new Book("Harry Potter","idk",2000);

addBookToLibrary(defaultBook1);
addBookToLibrary(defaultBook2);
addBookToLibrary(defaultBook3);
addBookToLibrary(defaultBook4);
addBookToLibrary(defaultBook5);


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

