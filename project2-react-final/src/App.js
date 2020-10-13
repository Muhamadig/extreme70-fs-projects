import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SignIn from "./components/signIn/SignIn";

function App() {
  return (
    <div className="container-fluid bg-dark view">
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
