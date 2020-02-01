import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import MicroFrontend from "./MicroFrontend";

const {
  REACT_APP_HOST_PRODUCT: productHost,
  REACT_APP_HOST_CART: cartHost
} = process.env;

const Product = ({ history }) => (
  <MicroFrontend history={history} host={productHost} name="Product" />
);

const Cart = ({ history }) => (
  <MicroFrontend history={history} host={cartHost} name="Cart" />
);

const Shell = ({ history }) => (
  <div id="appShell">
    <Product history={history}></Product>
    <Cart history={history}></Cart>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Shell} />
          <Route exact path="/product" render={Product} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}
