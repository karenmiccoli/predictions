import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import MainFunc from "./components/Main Func";

import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
const pages = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/predictions" component={MainFunc} />
      <Route exact path="/leaderboard" component={Leaderboard} />
    </div>
  </Router>
);
ReactDOM.render(pages, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
