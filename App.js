//const heading = React.createElement("h1", {}, "Hello World by React!");
/*****
 * <div id="parent">
 *    <div id="child">
 *       <h1>I'm an h1 Tag</>
 *       <h2>I'm an h2 Tag</>
 *    </div>
 *     <div id="child2">
 *       <h1>I'm an h1 Tag</>
 *       <h2>I'm an h2 Tag</>
 *     </div>
 * </div>
 *
 *
 *
 *
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child" },
            [React.createElement("h1", {}, "I'm an h1 tag!"),
            React.createElement("h2", {}, "I'm an h2 tag!"),
            ]
        ),
        React.createElement("div", { id: "child2" },
            [React.createElement("h1", {}, "I'm good looking boy!"),
            React.createElement("h2", {}, "I'm an h2 tag!"),
            ]
        )
    ]

)


const heading = React.createElement("h1",
    {
        id: "heading",
        xyz: "abc"
    },
    "Hello World by React!");

console.log(heading) // return an object
//heading is just an object not an HTML tag

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)
root.render(parent);

//  render's job is to take this object(heading) and create the h1 tag which browser understands
