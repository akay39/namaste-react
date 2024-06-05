import React from "react";
import ReactDOM from "react-dom/client";

//React Element: is an object
//when rendered to the dom then it becomes html element.

//JSX - not HTML in JS, HTML/XML likes syntax
// parcel manages babel to transpiles JSX code and return the code that js engine understands.
// JSX with the help of babel converte to react.createElement after that js object and then finally html.
// we wont be using react.createElement from now.

//react element:line-15
const jsxHeading = <h1>Namaste React using React jsx.</h1>;

console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);

// React component:
//1. class based component- old way
//2. functional based component - new way of writing code
// its a nomral js function which returns some JSX code/react elements.

const elem = <span>element react.</span>;

const title = (
  <h1 className="head">
     namaste react using JSX
  </h1>
);

const Headingcomponent = () => {
  return (
    <div id="container">
      {title}
      <h1>namaste react functional component</h1>
    </div>
  );
};

root.render(<Headingcomponent />);

// we can write any js inside {} of JSX.
//injecting reactElement inside the component by just using {name of the element inside curly braces.}
// we can inject any react element, component in element and component. 