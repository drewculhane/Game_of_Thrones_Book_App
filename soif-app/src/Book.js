import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Book(props, { setIndex, setVectorindex }) {
  const handleClick = e => {
    const keyTransformed = props.index + 1;
    props.setIndex(keyTransformed);
    console.log(keyTransformed);
  };
  const mobileHandleClick = e => {
    props.onFaveToggle();
  };
  return (
    <div className="BookWrapper">
      <div onClick={handleClick} className="BookTitleWrapper">
        <p className="BookTitle"> {props.bookdata.name} </p>
      </div>
      <button
        onClick={mobileHandleClick}
        data={props.bookdata.index}
        className="MobileButton"
      >
        {" "}
        Add to favorites{" "}
      </button>
    </div>
  );
}
export default Book;
