import React from "react";

function Home() {
  return (
    <>
      <div className="MarginWood">
      <div className="MaxwidthHome">
      <div className="HomerouterContainer">
      <div className="HomeWelcome">
        <h4> Welcome to the Ice And Fire Book App. Scroll carefully past the dragons for a guide to the site.... but be careful not to get burned!</h4>
      </div>
      <div className="MobileHomepageBase">
        <div className="MobileHomepageAnimation">
        </div>
      </div>
      </div>
      <div className="HomeInstructions">
        <p> Browse the books related to the SoIF series in the <a href="/BookList">BookList</a> tab. <br></br> <br></br> You can then use the favorites button to save them to the <a href="/Favorites">Favorites</a> tab. <br></br> <br></br>
        From there, you can find more information about the books, including links to Amazon. <br></br> <br></br> See the <a href="/About">About</a> section for more resources.</p>
        <p> Please Note: All the books in the Booklist Section are related to the universe of Ice and Fire, 
        but only those listed directly below are part of the series' chronological progression. <br></br></p>
        <ol className="SoiFChronology">
          <li> A Game of Thrones</li>
          <li> A Clash of Kings</li>
          <li> A Storm of Swords</li>
          <li> A Feast for Crows</li>
          <li> A Dance with Dragons</li> 
        </ol>
      </div>
      </div>
      </div>
    </>
  );
}

export default Home;
