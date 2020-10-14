import { faKey, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import FormCard from "./FormCard";
import "./SignIn.css";
const SignIn = () => {
  const signInFormInputes = {
    header: { title: "Login" },
    body: [
      {
        inputName: "username",
        type: "text",
        icon: faUserCheck,
        placeholder: "Username",
        error: { showError: true, message: "error message" },
      },
      {
        inputName: "password",
        type: "password",
        icon: faKey,
        placeholder: "Password",
        error: { showError: true, message: "error message" },
      },
      {
        inputName: "rememberme",
        type: "checkbox",
        label: "Remember Me",
      },
      {
        inputName: "login",
        type: "button",
        label: "Login",
      },
    ],
    footer: {
      message: "First Login?",
      link: {
        to: "/firstLogin",
        label: "Click Here",
      },
    },
  };
  const firstSignInFormInputes = {
    header: { title: "First Login" },
    body: [
      {
        inputName: "username",
        type: "text",
        icon: faUserCheck,
        placeholder: "Username",
        error: { showError: true, message: "error message" },
      },
      {
        inputName: "password",
        type: "password",
        icon: faKey,
        placeholder: "Password",
        error: { showError: true, message: "error message" },
      },
      {
        inputName: "re-password",
        type: "password",
        icon: faKey,
        placeholder: "Confirm Password",
        error: { showError: true, message: "error message" },
      },
      {
        inputName: "submit-password",
        type: "button",
        label: "Submit",
      },
    ],
    footer: {
      message: "Already Have a Password?",
      link: {
        to: "/signin",
        label: "Back to Login",
      },
    },
  };
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-6 signin-background">
          <p className="h1 text-center mt-2">MOVIC</p>
          <p className="h3 text-center mt-2">Your Movies Club</p>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center ">
          <Switch>
            <Route to="/signin">
              <FormCard />
            </Route>
            <Route to="/firstLogin">
              <FormCard />
            </Route>
            <Route to="/">
              <FormCard />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
