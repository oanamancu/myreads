import "./App.css";
import { useState, useEffect } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MyBooks from "./components/MyBooks";
import * as BooksAPI from "./BooksAPI";
import Search from "./components/Search";

function App() {

  const SHELFS = [
    {
      id: "wantToRead",
      state: "Want to Read"
    },
    {
      id: "currentlyReading",
      state: "Currently Reading"
    },
    {
      id: "read",
      state: "Read"
    }
  ];

  const [shelfBooks, setShelfBooks] = useState([]);

  useEffect( () => {
    const getShelfBooks = async () => {
      const res =  await BooksAPI.getAll();
      setShelfBooks(res);
    };
    getShelfBooks();
  },[]);

  const onChangeShelf = (book, shelf) => {
    const update = async () => {
      await BooksAPI.update(book, shelf);
      book.shelf = shelf;
      const bookAlreadyAdded = shelfBooks.filter(b => b.id === book.id);
      bookAlreadyAdded.length === 0 ?
         setShelfBooks([...shelfBooks, book]) :
         setShelfBooks([...shelfBooks]);
    };
    update();
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
            <Route path="/"
              element = {
                <MyBooks shelfBooks={shelfBooks} SHELFS={SHELFS} onChangeShelf={onChangeShelf}/>
              }
            />
            <Route path="/search"
              element = {
                <Search onChangeShelf={onChangeShelf} shelfBooks={shelfBooks}/>
              }
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
