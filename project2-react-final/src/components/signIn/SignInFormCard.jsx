import { faKey, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
const SignInFormCard = (props) => {
  return (
    <card className="card w-50 text-light text-center  bg-transparent ">
      <header className="card-header ">
        <p className="h4">Login</p>
      </header>
      <body className="card-body bg-transparent  text-light">
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
            <small className="form-text ">error message</small>
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
            <small className="form-text ">error message</small>
          </div>
          <div className="form-group">
            <div className="form-inline">
              <input
                type="checkbox"
                className="form-check-input bg-warining "
                id="rememberme"
              />
              Remember Me
            </div>
          </div>
          <div className="text-right">
            <button className="btn btn-warning ">Login</button>
          </div>
        </form>
      </body>
      <footer className="card-footer">
        <p>
          First Login?{" "}
          <Link className="text-warning" to="/signin/firstlogin">
            Click Here
          </Link>
        </p>
      </footer>
    </card>
  );
};

export default SignInFormCard;
