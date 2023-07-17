import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1", {id:"heading"}, "I am h1 using React")
console.log(heading);

//JSX ==> Transapiled before it reaches the JS using BABEL through Parcel
//JSX ==> is html/xml like syntax
//JSX ==> Baebel ==>React.createElement ==> ReactElement => JS OBJECT ==> HTML (render)
const jsxHeading = (<h1 id="heading" className="heading">
I am h1 using JSX
</h1>)
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading)

