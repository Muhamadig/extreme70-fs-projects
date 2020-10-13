import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container-fluid bg-dark view">
      <Switch>
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
