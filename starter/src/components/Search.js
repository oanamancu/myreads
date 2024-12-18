import { Link } from "react-router-dom";
import { useState } from "react";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

const Search = ({onChangeShelf, shelfBooks}) => {

  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const updateShelfs = (result) => {
    result.forEach((entry) => {
      const bookAlreadyAdded = shelfBooks.find(book => book.id === entry.id);
      entry.shelf = bookAlreadyAdded ? bookAlreadyAdded.shelf : 'noShelf';
    });
  }

  const searchBooks = () => {
    const search = async () => {
      const result = await BooksAPI.search(query, 20);
      if (Array.isArray(result)) {
        updateShelfs(result);
        setBooks(result);
      }
    }
    search();
  }

  const onSearchChange = (event) => {
    setQuery(event.target.value);
    searchBooks();
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link
          className="close-search"
          to="/"
        >
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            name="searchInput"
            type="text"
            placeholder="Search by title, author, or ISBN"
            value = {query}
            onChange={onSearchChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {
           books.map((book) => (<Book key={book.id} book={book} onChangeShelf={onChangeShelf}/>))
          }
        </ol>
      </div>
    </div>
  ) 
}

export default Search;