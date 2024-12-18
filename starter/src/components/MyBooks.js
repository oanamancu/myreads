import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const MyBooks = ({shelfBooks, SHELFS, onChangeShelf}) => {

  const filteredBooks = (shelf) => {
    return shelfBooks.filter( (book) => book.shelf === shelf.id );
  }

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {
            SHELFS.map( (shelf) => { 
              return <Shelf key={shelf.id} shelf={shelf} books = {filteredBooks(shelf)} onChangeShelf={onChangeShelf}/>;
            })
          }
        </div>
      </div>
      <div className="open-search">
        <Link to="/Search">Add a book</Link>
      </div>
    </div>
  )
}

export default MyBooks;