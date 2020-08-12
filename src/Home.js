import React from "react";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Dashboard from "../src/Dashboard";
import AddBranch from "../src/AddBranch";

import { BrowserRouter as Router, Route } from "react-router-dom";

const firebase = require("firebase");

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <Menu />
        {/* <Route path="/" component={Dashboard} />
        <Route path="/addbranch" component={AddBranch} /> */}
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Home;
