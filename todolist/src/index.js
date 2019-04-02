// the JS file that rounds out the starting page

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// where the css is imported
import TodoList from "./TodoList";


var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);

// This is the foundation
// destination is used to add the container into this file so this can use the index.html