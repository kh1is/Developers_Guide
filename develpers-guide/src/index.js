import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.css";

import NavBar from "./Components/navBarComponent";
import Body from "./Components/bodyComponent";
import Footer from "./Components/footerComponent";

ReactDOM.render(<NavBar />, document.getElementById("nav-bar"));
ReactDOM.render(<Body />, document.getElementById("root"));
ReactDOM.render(<Footer />, document.getElementById("footer"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
