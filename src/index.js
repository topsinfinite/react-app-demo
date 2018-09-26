import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";
import Test from "./components/sample";

ReactDOM.render(<Counters />, document.getElementById("root"));
registerServiceWorker();
