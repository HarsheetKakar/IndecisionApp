import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/indecisionApp.js";
import ReactModal from "react-modal";

const Layout = (props) => {
    return <div>{props.children}</div>;
};

const template = (
    <div>
        <p>Header</p>
        <p>Footer</p>
    </div>
);

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
