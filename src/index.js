import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Posts from "./Posts";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/post" component={Posts} />
      <Route component={() => <div>404</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
