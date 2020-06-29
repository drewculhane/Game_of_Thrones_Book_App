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
      <header> 
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark" >
      <img className="BookEndBrand" src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1593451609/Untitled_r6aafn.png" alt="GoTBookend"/>
      <a class="navbar-brand" href="/">Ice And Fire Book App</a>
      <img className="BookendTwo" src="https://res.cloudinary.com/dgmpgmo60/image/upload/v1593451794/kr81gh2injahdpfezzsl.png" alt="GoT BookEnd"/> 
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav navbar-dark">
        
          <a className="nav-item nav-link active" > <span className="sr-only">(current)</span> 
          <Link className="" to="/">
            <div className="togglewrapperrr" data-toggle="collapse" data-target=".navbar-collapse.show">
          Home 
          </div>
          </Link>
          
          </a>
        
       
          <a className="nav-item nav-link" >
          <Link className="" to="/BookList">
          <div className="togglewrapperrr" data-toggle="collapse" data-target=".navbar-collapse.show">
             BookList
             </div>
             </Link>
             
              </a>
        
     
          <a className="nav-item nav-link"> 
          <Link className="" to="/Favorites">
          <div className="togglewrapperrr" data-toggle="collapse" data-target=".navbar-collapse.show">
          Favorites
          </div>
          </Link>
           </a>
       
       
          <a className=" nav-item nav-link"> 
          
          <Link className="" to="/About">
          <div className="togglewrapperrr" data-toggle="collapse" data-target=".navbar-collapse.show">
          About 
          </div>
          </Link>
          </a>
       
        </div>
        </div> 
      </nav>
      
      </header> 
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
