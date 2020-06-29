import React, { useState } from "react";

function BookCard(props, { handleRemove }) {
  console.log("I have books", props.book);
  const handleRemoveClick = e => {
    props.onFaveToggle();
  };
  const releaseSlice = props.book.released
    ? props.book.released.slice(0, 4)
    : "";
  if (props.book.authors === undefined) {
    return <p> Loading... </p>;
  }
  return (
    <div className="BookDisplaySwitch">
      <div className="BookWrapper3">
        <div className="FavesDetailsContainer">
          <p className="FaveBookName"> {props.book.name} </p>
          <p className="FaveAuthor">
            {" "}
            {props.book.authors[0] ? props.book.authors[0] : ""}
          </p>
        </div>
      </div>
      <div className="AdditionalFaveDetails">
        <p> {props.book.numberOfPages} pages </p>
        <p> Released: {releaseSlice} </p>
        <p className="ISBN"> ISBN: {props.book.isbn} </p>
        <button onClick={handleRemoveClick} className="MobileButton2">
          Remove Book
        </button>
      </div>
    </div>
  );
}
export default BookCard;
