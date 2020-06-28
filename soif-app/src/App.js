import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import BookList from "./BookList";
import Favorites from "./Favorites";
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { render } from "react-dom";
export default function App() {
  const [tempArray, setTempArray] = useState([]);
  const [booksData, setBooksData] = useState([{}]);
  const [faves, setFaves] = useState([]);
  useEffect(() => {
    const makeApiCall = async () => {
      const url = "https://www.anapioficeandfire.com/api/books";
      const res = await fetch(url);
      const json = await res.json();
      setBooksData(json);
    };
    makeApiCall();
  }, []);
  const handleFaveToggle = book => {
    const favesArray = [...faves];
    const bookIndex = favesArray.indexOf(book);
    if (bookIndex === -1) {
      favesArray.push(book);
      console.log(`Adding book ${book} to Faves`);
    } else {
      favesArray.splice(bookIndex, 1);
      console.log(`Removing ${book} from faves`);
    }
    setFaves(favesArray);
  };
  console.log("Value Temparray in App", tempArray);
  return (
    <div className="App">
      <nav>
        <Link to="/">
          <p className="Homepage"> Home </p>
        </Link>
        <Link to="/BookList">
          <p className="BookListNav"> BookList </p>
        </Link>
        <Link to="/Favorites">
          <p className="FavoritesNav"> Favorites </p>
        </Link>
        <Link to="/About">
          <p className="About"> About </p>
        </Link>
      </nav>
      <main>
        <Switch>
          <Route
            path="/BookList"
            render={routerProps => (
              <BookList
                {...routerProps}
                booklistdata={booksData}
                onFaveToggle={handleFaveToggle}
              />
            )}
          />
          <Route
            path="/Favorites"
            render={routerProps => (
              <Favorites
                {...routerProps}
                temparray={faves}
                onFaveToggle={handleFaveToggle}
              />
            )}
          />
          <Route exact path="/" component={Home} />} 
          <Route exact path="/About" component={About} />
        </Switch>
      </main>
    </div>
  );
}
