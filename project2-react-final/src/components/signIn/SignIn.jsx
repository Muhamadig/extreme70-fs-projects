import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./SignIn.css";
import SignInFormCard from "./SignInFormCard";
import FirstSignInFormCard from "./FirstSignInFormCard copy";
const SignIn = () => {
  let history = useHistory();

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-6 signin-background">
          <p className="h1 text-center mt-2">MOVIC</p>
          <p className="h3 text-center mt-2">Your Movies Club</p>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center ">
          <Switch>
            <Route exact to="/signin">
              <SignInFormCard />
            </Route>
            <Route to="/signin/firstlogin">
              <FirstSignInFormCard />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
