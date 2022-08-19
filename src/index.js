import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// create root component.
// Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
// They have states and returns some thing.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
