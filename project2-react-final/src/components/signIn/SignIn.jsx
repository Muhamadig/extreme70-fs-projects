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
          <card className="card w-50 ">
            <header className="card-header"></header>
            <body className="card-body"></body>
            <footer className="card-footer"></footer>
          </card>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
