import Book from "./Book";

const Shelf = ({shelf, books, onChangeShelf}) => {
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelf.state}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                books.map((book) => (<Book key={book.id} book={book} onChangeShelf={onChangeShelf}/>))
              }
            </ol>
          </div>
        </div>
    )
}

export default Shelf;