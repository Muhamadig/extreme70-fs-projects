import Axios from "axios";
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignIn from "./components/signIn/SignIn";

function App() {
  const [token, setToken] = useState({});
  const getToken = async () => {
    let { data } = await Axios.post("http://localhost:9000/auth/token", {
      uid: "admin",
      developerClaims: {},
    });
    console.log(data);
  };

  return (
    <div className="bg-dark view">
      <button className="btn btn-warining" onClick={() => getToken()}>
        Click
      </button>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
