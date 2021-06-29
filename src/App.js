import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './component/stylesheet/App.css';

import Home from "./component/Home"

import Deposit from "./component/Deposit"

import Form from "./component/Form"


export default function BasicExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/deposit">
            <Deposit />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

