import { faKey, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
const FirstSignInFormCard = (props) => {
  return (
    <card className="card w-50 text-light text-center  bg-transparent ">
      <header className="card-header ">
        <p className="h4">First Login</p>
        <p className="h6">Set New Password</p>
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
            <div className="input-group">
              <div className="input-group-prepend">
                <label
                  className="input-group-text bg-warning"
                  htmlFor="confirm-password"
                >
                  <FontAwesomeIcon icon={faKey} />
                </label>
              </div>
              <input
                type="password"
                className="form-control"
                id="confirm-password"
                placeholder="Confirm Password"
              />
            </div>
            <small className="form-text ">error message</small>
          </div>

          <div className="text-right">
            <button className="btn btn-warning ">Submit</button>
          </div>
        </form>
      </body>
      <footer className="card-footer">
        <p>
          Already Have Password?{" "}
          <Link className="text-warning" to="/signIn">
            Back To Login
          </Link>
        </p>
      </footer>
    </card>
  );
};

export default FirstSignInFormCard;
