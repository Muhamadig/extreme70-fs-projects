import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faKey, faPassport } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./WelcomeStyle.css";
const Welcome = () => {
  return (
    <div className="welcome-container bg-theme text-dark">
      <div className="d-flex justify-content-center  h-100">
        <div className="card bg-transparent ">
          <div className="card-header text-center">
            <h3>MOVIC</h3>
            <h5>Your Movies Club</h5>
          </div>
          <div className="card-body">
            <form className="">
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <label htmlFor="userNameInput" className="input-group-text ">
                    <FontAwesomeIcon icon={faUser} />
                  </label>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  id="userNameInput"
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <label htmlFor="passwordInput" className="input-group-text">
                    <FontAwesomeIcon icon={faKey} />
                  </label>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="passwordInput"
                />
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox" id="rememeberMe" />
                <label htmlFor="rememeberMe" id="rememeberMeLabel">
                  Remember Me
                </label>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-warning float-right login_btn"
                />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center font-weight-bold">
              <span> First Sign In?</span>
              <a className="text-warning ml-1" href="#">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
