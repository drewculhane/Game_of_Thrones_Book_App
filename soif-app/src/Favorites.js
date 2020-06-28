import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import BookCard from "./BookCard";

function Favorites(props) {
  if (props.temparray === undefined) {
    return <p> Choose some Books </p>;
  }
  let booksToDisplay = props.temparray.map((book, index) => {
    return (
      <BookCard
        book={book}
        index={index}
        onFaveToggle={() => props.onFaveToggle(book)}
      />
    );
  });
  return (
    <>
      <div className="Favelist">
        <p> Find your favorites here. </p>
        <div className="BooksToDisplay"> {booksToDisplay} </div>
      </div>
    </>
  );
}

export default Favorites;
