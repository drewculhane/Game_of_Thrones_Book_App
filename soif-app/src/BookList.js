import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import "./style.css";
function BookList(props) {
  const [useindex, setIndex] = useState(1);
  const [vectorindex, setVectorIndex] = useState(-1);
  const [spotlightdata, setSpotlightData] = useState(
    `https://www.anapioficeandfire.com/api/books/1.json`
  );
  const url = `https://www.anapioficeandfire.com/api/books/${useindex}`;
  const makeApiCall = async () => {
    const res = await fetch(url);
    const json = await res.json();
    setSpotlightData(json);
  };
  useEffect(() => {
    makeApiCall();
  }, [useindex]);
  const handleFaveClick = e => {
    console.log("handling fave click");
    props.onFaveToggle(spotlightdata);
  };
  const releaseSlice = spotlightdata.released
    ? spotlightdata.released.slice(0, 4)
    : "";
  if (!spotlightdata.name) {
    return <p> Loading </p>;
  }
  let booksToDisplay = props.booklistdata.map((book, index) => {
    return (
      <Book
        bookdata={book}
        index={index}
        setVectorIndex={setVectorIndex}
        setIndex={setIndex}
        onFaveToggle={() => props.onFaveToggle(book)}
      />
    );
  });
  return (
    <>
      <div className="ListANDSpotlight">
        <div className="BookList">{booksToDisplay}</div>
        <div className="Spotlight">
          <div className="BookWrapper2">
            <div className="SpotlightDetailsContainer">
              <p className="SpotlightBookName"> {spotlightdata.name} </p>
              <p className="SpotlightAuthor"> {spotlightdata.authors[0]}</p>
            </div>
          </div>
          <div className="AdditionalDetails">
            <p> {spotlightdata.numberOfPages} pages </p>
            <p> Released: {releaseSlice} </p>
            <p className="ISBN"> ISBN: {spotlightdata.isbn} </p>
            <button onClick={handleFaveClick} className="MobileButton2">
              {" "}
              Add to Favourites{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookList;
