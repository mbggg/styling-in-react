import React from "react";
import ReactDOM from "react-dom";

// IMPORTANT: must import the css stylesheet
import "../public/styles.css";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    {/* contentEditable allows you to edit element on display page */}
    {/* https://www.w3schools.com/tags/ref_standardattributes.asp */}
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Fruits
    </h1>

    {/* random image */}
    <img className="food-img" src={img + "?grayscale"} alt="random" />

    {/* cantaloupe pic */}
    <img
      className="food-img"
      src="https://solidstarts.com/wp-content/uploads/Cantaloupe-scaled.jpg"
      alt="catanloupe"
    />

    {/* jackfruit pic */}
    <img
      className="food-img"
      src="https://thumbs.dreamstime.com/b/peeled-unpeeled-jackfruit-green-leaves-isolated-white-background-181881616.jpg"
      alt="jackfruit"
    />

    {/* clementine pic */}
    <img
      className="food-img"
      src="https://www.oahufresh.com/wp-content/uploads/2017/10/clem-300x300.jpg"
      alt="clementines"
    />
  </div>,

  document.getElementById("root")
);
