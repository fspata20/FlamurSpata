import React from "react";
import { useParams } from "react-router-dom";
import './App.css';

const BookDetailsPage = ({ books }) => {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="bookcontainer">
      <h2 className="details">{book.title}</h2>
      <p className="subjects">Subjects: {book.subjects.join(", ")}</p>
      <p className="languages">Languages: {book.languages.join(", ")}</p>
    </div>
  );
};

export default BookDetailsPage;
