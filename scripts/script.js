let books = [
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

function loadHTML(index) {
  const superHTML = `
  <li class="book">
    <h4 id="">${books[index].title}</h4>
    <p id="">${books[index].author}</p>
    <button id="remove-button${index}">Remove</button>
  </li>
  `;

  document
    .querySelector('.booklist-container')
    .insertAdjacentHTML('beforeend', superHTML);
  document
    .getElementById(`remove-button${index}`)
    .addEventListener('click', () => removeBook(index)); // eslint-disable-line no-use-before-define
}

function loadBooks() {
  const booksAmount = books.length;
  const emptyHTML = '';

  document.querySelector('.booklist-container').innerHTML = emptyHTML;
  for (let i = 0; i < booksAmount; i += 1) {
    loadHTML(i);
  }

  localStorage.setItem('books', JSON.stringify(books));
}
const localbooks = localStorage.getItem('books');
if (localbooks) {
  books = JSON.parse(localbooks);
}

function addBook(bookTitle, bookAuthor) {
  if (bookTitle !== '' && bookAuthor !== '') {
    const newBook = {
      title: bookTitle,
      author: bookAuthor,
    };
    books.push(newBook);

    newTitle.value = ''; // eslint-disable-line no-use-before-define
    newAuthor.value = ''; // eslint-disable-line no-use-before-define
    loadBooks();
  }
}

function removeBook(index) {
  books.splice(index, 1);

  loadBooks();
}

window.addEventListener('load', loadBooks());
const addButton = document.getElementById('add-button');
const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');

addButton.addEventListener('click', () => addBook(newTitle.value, newAuthor.value));