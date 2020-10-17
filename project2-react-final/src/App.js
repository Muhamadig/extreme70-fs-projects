import Axios from "axios";
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignIn from "./components/signIn/SignIn";

function App() {
  return (
    <div className="bg-dark view">
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
