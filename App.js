{
  /* <div id="parent">
  <div id="child">
    <h1>I am an H1 Tag</h1>
    <h2>I am an H2 Tag</h2>
  </div>
</div>; */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an H1 Tag"),
    React.createElement("h2", {}, "I am an H2 Tag"),
  ])
);
const heading = React.createElement("h1", {}, "Hello World by React");
console.log(heading); // heading is an object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //everythinh will get rendered under this root
