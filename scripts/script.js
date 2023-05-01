let books = [
  {
    title: 'title1',
    author: 'autor1',
  },
  {
    title: 'title2',
    author: 'autor2',
  },
];

function loadHTML(index) {
  const superHTML = `
  <article class="book">
    <h4 id="">${books[index].title}</h4>
    <p id="">${books[index].author}</p>
    <button id="remove-button">Remove</button>
  </article>
  `;

  document.querySelector('.booklist-container').insertAdjacentHTML("beforeend", superHTML);
}

function loadBooks() {
  const booksAmount = books.length;
  const emptyHTML = "";

  document.querySelector('.booklist-container').innerHTML = emptyHTML;
  for (let i = 0; i < booksAmount; i += 1) {
    loadHTML(i);
  }
}

function addBook(bookTitle, bookAuthor) {
  let newBook = {
    title: bookTitle,
    author: bookAuthor,
  };
  books.push(newBook);

  newTitle.value = '';
  newAuthor.value = '';
  loadBooks();
};

const addButton = document.getElementById('add-button');
const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');

addButton.addEventListener('click', () => addBook(newTitle.value, newAuthor.value));