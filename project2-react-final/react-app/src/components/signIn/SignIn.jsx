import React from "react";
import {
  Link,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import "./SignIn.css";
import SignInFormCard from "./SignInFormCard";
import FirstSignInFormCard from "./FirstSignInFormCard copy";
import * as auth from "../../firebase/auth";
const SignIn = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col col-sm-0  col-md-0  col-lg-6 col-xl-8 signin-background">
          <p className="h1 text-center mt-2">MOVIC</p>
          <p className="h3 text-center mt-2">Your Movies Club</p>
        </div>
        <div className="col-12 col-sm-12  col-md-12 col-lg-6 col-xl-4 d-flex align-items-center justify-content-center ">
          <Switch>
            <Route exact path={path}>
              <SignInFormCard />
            </Route>
            <Route path={`${path}/set-password`}>
              <FirstSignInFormCard />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
