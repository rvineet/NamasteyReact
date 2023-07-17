import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const Title = () => (
  <h1 id="heading" className="heading">
    A Vineet King!
  </h1>
);
// console.log(heading);
// <React.Fragment> :-- Acts like an empty tag, can also be written as <> </>
const number = 10000;
const HeadingComponent = () => {
  return (
    <React.Fragment>
    <div id="container">
      {number}
      {100 + 200}
      {console.log("will this work too?!")}
      <Title />
      <Title></Title>
      {Title()}
      <h1 className="heading">Namastey React From Functional Component</h1>
    </div>
    <div id="container-2">
      {number}
      {console.log("will this work too?!")}
      <Title />
      <Title></Title>
      {Title()}
      <h1 className="heading">Namastey React From Functional Component</h1>
    </div>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)
root.render(HeadingComponent());
