const newTitle = document.getElementById('new-title'); // eslint-disable-line max-classes-per-file
const newAuthor = document.getElementById('new-author');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor() {
    this.books = [
      {
        title: 'title1',
        author: 'autor1',
      },
      {
        title: 'title2',
        author: 'autor2',
      },
      {
        title: 'Dune',
        author: 'Frank Herbert',
      },
    ];
  }

  addBook(bookTitle, bookAuthor) {
    if (bookTitle !== '' && bookAuthor !== '') {
      const newBook = new Book(bookTitle, bookAuthor);
      this.books.push(newBook);

      newTitle.value = '';
      newAuthor.value = '';
      loadBooks(); // eslint-disable-line no-use-before-define
    }
  }

  removeBook(index) {
    this.books.splice(index, 1);

    loadBooks(); // eslint-disable-line no-use-before-define
  }
}

const superLibrary = new Library();

function loadHTML(index) {
  const superHTML = `
  <li class="book">
    <div class="book-details">
    <h4 id="">"${superLibrary.books[index].title}"</h4>
    <p id="">by ${superLibrary.books[index].author}</p>
    </div>
    <button id="remove-button${index}">Remove</button>
  </li>
  `;

  document
    .querySelector('.booklist-container')
    .insertAdjacentHTML('beforeend', superHTML);
  document
    .getElementById(`remove-button${index}`)
    .addEventListener('click', () => superLibrary.removeBook(index));
}

function loadBooks() {
  const booksAmount = superLibrary.books.length;
  const emptyHTML = '';

  document.querySelector('.booklist-container').innerHTML = emptyHTML;
  for (let i = 0; i < booksAmount; i += 1) {
    loadHTML(i);
  }

  localStorage.setItem('books', JSON.stringify(superLibrary.books));
}

const localbooks = localStorage.getItem('books');
if (localbooks) {
  superLibrary.books = JSON.parse(localbooks);
}

window.addEventListener('load', loadBooks());
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', () => superLibrary.addBook(newTitle.value, newAuthor.value));

const list = document.getElementById('list');
const addnew = document.getElementById('addnew');
const contact = document.getElementById('contact');
const sections = document.getElementsByTagName('section');

function showSection(id) {

  for(let i = 0; i < 3; i += 1) {
    const superSection = `section${i}`;
    superSection.style.display = 'none';
  }
  
  // let section = document.getElementById(id);
  id.style.display = 'block';
}

// list.addEventListener('click', () => {
//   section2.classList.remove('display-flex');
//   section1.classList.add('display-block');
//   section2.classList.add('display-none');
//   section3.classList.add('display-none');
// });

// addnew.addEventListener('click', () => {
//   section1.classList.remove('display-block');
//   section2.classList.add('display-block');
//   section3.classList.add('display-none');
// });

// contact.addEventListener('click', () => {
//   section1.classList.add('display-none');
//   section2.classList.add('display-none');
//   section3.classList.add('display-block');
// });