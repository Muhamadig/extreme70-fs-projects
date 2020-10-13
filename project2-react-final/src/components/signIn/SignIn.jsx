import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faKey,
  faUserAlt,
  faUserAltSlash,
  faUserAstronaut,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "./SignIn.css";
const SignIn = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-7 signin-background">
          <p className="h1 text-center mt-2">MOVIC</p>
          <p className="h3 text-center mt-2">Your Movies Club</p>
        </div>
        <div className="col-5 d-flex align-items-center justify-content-center">
          <card className="card w-50 text-dark text-center">
            <header className="card-header ">
              <p className="h4">Login</p>
            </header>
            <body className="card-body ">
              <form>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <label
                        className="input-group-text bg-warning"
                        htmlFor="username"
                      >
                        <FontAwesomeIcon icon={faUserCheck} />
                      </label>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                    />
                  </div>
                  <small className="form-text text-muted">error message</small>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <label
                        className="input-group-text bg-warning"
                        htmlFor="password"
                      >
                        <FontAwesomeIcon icon={faKey} />
                      </label>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <small className="form-text text-muted">error message</small>
                </div>
              </form>
            </body>
            <footer className="card-footer"></footer>
          </card>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
