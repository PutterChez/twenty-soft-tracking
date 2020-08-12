import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import { database } from "firebase";

const firebase = require("firebase");
const db = firebase.firestore();

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const {
        fullname,
        email,
        password,
        verifypassword,
      } = event.target.elements;
      if (password.value === verifypassword.value) {
        try {
          await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value)
            .then(function (result) {
              return db
                .collection("users")
                .doc(result.user.uid)
                .set({
                  bio: fullname.value,
                })
                .then(() => {
                  return result.user.updateProfile({
                    displayName: fullname.value,
                  });
                });
            });

          history.push("/");
        } catch (error) {
          alert(error);
        }
      } else {
        alert("Passwords do not match");
      }
    },
    [history]
  );

  return (
    <div>
      <body class="hold-transition register-page">
        <div className="register-box">
          <div class="text-center">
            <img
              class="profile-user-img img-fluid img-circle"
              src="dist/img/TrackingLogo.png"
              alt="User profile picture"
            ></img>
          </div>
          <div className="register-logo">
            <b>TwentySoft</b> Tracking
          </div>
          <div className="card">
            <div className="card-body register-card-body">
              <p className="login-box-msg">Register a new membership</p>
              <form onSubmit={handleSignUp}>
                <div className="input-group mb-3">
                  <input
                    name="fullname"
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>
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
                <div className="input-group mb-3">
                  <input
                    name="verifypassword"
                    type="password"
                    className="form-control"
                    placeholder="Retype password"
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
                    Register
                  </button>
                </div>
              </form>
              <a href="login" className="text-center">
                I already have a membership
              </a>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default withRouter(SignUp);
