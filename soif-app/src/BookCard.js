import React, { useState } from "react";

function BookCard(props, { handleRemove }) {
  const [sourcestate, setSourceState] = useState(true);
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
    <div
      style={{ display: sourcestate ? "flex" : "none" }}
      className="BookDisplaySwitch"
    >
      <div className="BookWrapper2">
        <div className="SpotlightDetailsContainer">
          <p className="SpotlightBookName"> {props.book.name} </p>
          <p className="SpotlightAuthor">
            {" "}
            {props.book.authors[0] ? props.book.authors[0] : ""}
          </p>
        </div>
      </div>
      <div className="AdditionalDetails">
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
