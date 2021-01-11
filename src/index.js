import React from "react";
import ReactDOM from "react-dom";

// IMPORTANT: must import the css stylesheet
import "../public/styles.css";

ReactDOM.render(
  <div>
    {/* contentEditable allows you to edit element on display page */}
    {/* https://www.w3schools.com/tags/ref_standardattributes.asp */}
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Fruits
    </h1>
    <ul>
      <li>Cantaloupe</li>
      <li>Jackfruit</li>
      <li>Clementines</li>
    </ul>
  </div>,
  document.getElementById("root")
);
