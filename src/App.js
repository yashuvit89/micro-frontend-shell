import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import MicroFrontend from "./MicroFrontend";

const {
  REACT_APP_HOST_PRODUCT: productHost,
  REACT_APP_HOST_CART: cartHost
} = process.env;

console.log("ENV:: productHost --->", process.env.REACT_APP_HOST_CART);

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <MicroFrontend host={productHost} name="Product"></MicroFrontend>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
