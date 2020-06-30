import React from "react"; 


function About() {
    return (
        <>
        <div className="Aboutroutercontainer">
        <div className="AboutFirstLayer">
            <p className="BlackIceText"> More Resources Below </p>
        <div className="AboutAnimationLayer">
        </div>
        </div>
        </div>
        <div className="MoreLinks">
            <h4 className="MoreLinksHeader"> George R.R. Martin's Website: </h4>
            <a className="FurtherWebLink" href="https://georgerrmartin.com/" target="_blank"> Open George up in a new tab.</a>
            <h4 className="MoreLinksHeader"> Amazon Link to the full 5-book Box Set of A Song of Ice and Fire: </h4>
            <a className="FurtherWebLink" href="https://www.amazon.com/George-Martins-Thrones-5-Book-Boxed-ebook/dp/B00957T6X6" target="_blank"> Thousands of Pages of Glorious Fantasy Writing</a>
            <h4 className="MoreLinksHeader"> Westeros: The Song of Ice and Fire Domain: </h4>
            <a className="FurtherWebLink" href="https://westeros.org/" target="_blank"> A link to GoT and Song of Ice and Fire News and other related sites.</a>
        
        </div>
        </>
    )
}
export default About; 