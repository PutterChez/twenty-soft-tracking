import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <body class="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html">
              <b>TwentySoft</b> Tracking
            </a>
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form onSubmit={handleLogin}>
                <div className="input-group mb-3">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    style={{ textAlign: "center" }}
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <p className="mb-0">
                <a href="signup" className="text-center">
                  Register a new membership
                </a>
              </p>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default withRouter(Login);
