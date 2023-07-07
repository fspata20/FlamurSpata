import React, {useEffect, useState} from "react";
import Book from "./Book";
import './App.css';
import BookDetailsPage from "./BookDetailsPage";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// function App() {
//   const [books, setBooks] = useState(null);
//   const [searchValue, setSearchValue] = useState("");
//   const [filteredBooks, setFilteredBooks] = useState([]);
//   const [showCopyright, setShowCopyright] = useState(false);

//   useEffect(() => {
//     fetch("https://gutendex.com/books")
//       .then((res) => res.json())
//       .then((data) => {
//         setBooks(data.results);
//         setFilteredBooks(data.results);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   const handleSearch = (e) => {
//     const searchQuery = e.target.value;
//     setSearchValue(searchQuery);

//     const filtered = books.filter((book) =>
//       book.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredBooks(filtered);
//   };

//   const handleButtonClick = () => {
//     setShowCopyright(true);
//   };

//   if (books === null) {
//     return <div>Books loading</div>;
//   }

//   return (
//     <div className="app2">
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchValue}
//         onChange={handleSearch}
//       />
//       <button>Click me</button>
//       <div className="book-container2">
//         {filteredBooks.map((book) => (
//           <Book
//             key={book.id}
//             title={book.title}
//             author={book.authors}
//             showCopyright={showCopyright}
//             onButtonClick={handleButtonClick}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

function App() {
  const [books, setBooks] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    fetch("https://gutendex.com/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.results);
        setFilteredBooks(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setSearchValue(searchQuery);

    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  if (books === null) {
    return <div>Books loading</div>;
  }

  return (
    <Router>
      <div className="app">
        {/* <h1>Bookshelf</h1> */}
        <input 
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearch}
        />
        <button>Click me</button>
        <div className="bookcontainer">
        <Routes>
          <Route
            path="/"
            element={
              <BookList books={filteredBooks} />
            }
          />
          <Route
            path="/books/:id"
            element={
              <BookDetailsPage books={books} />
            }
          />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

function BookList({ books }) {
  return (
    <div className="book-container">
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.authors}
        />
      ))}
    </div>
  );
}

export default App;


