import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import MicroFrontend from "./MicroFrontend";

const {
  REACT_APP_HOST_PRODUCT: productHost,
  REACT_APP_HOST_CART: cartHost
} = process.env;

const App1 = props => (
  <MicroFrontend {...props} host={productHost} name="Product" />
);

const App2 = props => <MicroFrontend {...props} host={cartHost} name="Cart" />;

const Shell = props => (
  <div id="appShell">
    <App1 {...props}></App1>
    <App2 {...props}></App2>
  </div>
);

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Shell}></Route>
          <Route path="/app1">
            <App1 />
          </Route>
          <Route path="/app2">
            <App2 />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}
