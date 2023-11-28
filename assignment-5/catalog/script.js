class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.available = true;
    }

    displayDetails() {
        return `Title: ${this.title}, 
                Author: ${this.author}, 
                ISBN: ${this.isbn}, 
                Available: ${this.available ? 'Yes!' : 'No!'}`;
    }
}

//---------------------------------------------------------------------------------------------------------------------------//

class Library {
    constructor() {
        this.books = [];
    }

    adddBook(book) {
        this.books.push(book);
    }

    removeBook(isbn) {
        this.books = this.books.filter(book => book.isbn !== isbn);
    }

    searchBooks(query) {
        return this.books.filter(book => {
            return (
                book.title.includes(query) ||
                book.author.includes(query) ||
                book.isbn.includes(query)
            );
        });
    }

    checkOutBook(isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        if (book) {
            book.available = false;
        }
    }

    checkInBook(isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        if (book) {
            book.available = true;
        }
    }

    listBooks() {
        return this.books;
    }
}

//---------------------------------------------------------------------------------------------------------------------------//

const library = new Library();


const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const query = document.getElementById('search').value;
    const result = library.searchBooks(query);
    searchResults(result);
});

const addBookForm = document.getElementById('add-book-form');
addBookForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const book = new Book(title, author, isbn);
    library.adddBook(book);
    updateBookList();
    addBookForm.reset();
});

function updateBookList() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    library.listBooks().forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.innerHTML = book.displayDetails();
        const checkOutButton = document.createElement('button');
        checkOutButton.textContent = book.available ? 'Check Out' : 'Check In';
        checkOutButton.addEventListener('click', () => {
            book.available ? library.checkOutBook(book.isbn) : library.checkInBook(book.isbn);
            updateBookList();
        });
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            library.removeBook(book.isbn);
            updateBookList();
        });
        bookItem.appendChild(checkOutButton);
        bookItem.appendChild(removeButton);
        bookList.appendChild(bookItem);
    });
}

function searchResults(result) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    result.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.innerHTML = book.displayDetails();
        bookList.appendChild(bookItem);
    });
}

//---------------------------------------------------------------------------------------------------------------------------//

updateBookList();

// It doesn't save books when I load web page :(