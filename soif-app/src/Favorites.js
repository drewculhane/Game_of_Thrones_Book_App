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
        <div className="FaveBaseLayer">
          <img src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1593474172/Untitled_1_ivz4a9.png" className="FaveAnimationFireLayer1"/>
          
          <img src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1593474172/Untitled_1_ivz4a9.png" className="FaveAnimationFireLayer2"/>
        </div>
        <p className="FavoritesHeaderNew"> Find your favorites here. </p>
        <div className="BooksToDisplay"> {booksToDisplay} </div>
      </div>
    </>
  );
}

export default Favorites;
