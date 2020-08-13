import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../src/Dashboard";
import AddBranch from "../src/AddBranch";
import Branches from "./Branches";
import BranchInfo from "./BranchInfo";

import Home from "./Home";
import AddPackage from "./AddPackage";

const firebase = require("firebase");

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <AuthProvider>
          <Router>
            <Switch>
              {/* <PrivateRoute exact path="/" component={Home} /> */}
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Home>
                <Route
                  component={({ match }) => (
                    <div>
                      <PrivateRoute exact path="/" component={Dashboard} />
                      <PrivateRoute path="/addbranch" component={AddBranch} />
                      <PrivateRoute path="/branches" component={Branches} />
                      <PrivateRoute
                        path="/branchinfo/:id"
                        component={BranchInfo}
                      />
                      <PrivateRoute path="/addpackage" component={AddPackage} />
                    </div>
                  )}
                />
              </Home>
            </Switch>
          </Router>
        </AuthProvider>
      </div>
    );
  }
}

export default App;
