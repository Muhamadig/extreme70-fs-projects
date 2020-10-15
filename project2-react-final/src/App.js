import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import SignIn from "./components/signIn/SignIn";

function App() {
  return (
    <div className="bg-dark view">
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Redirect from="/" to="/signin" />
      </Switch>
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
