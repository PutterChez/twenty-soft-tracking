import React from "react";
const firebase = require("firebase");

class Menu extends React.Component {
  constructor() {
    super();

    var username;

    if (firebase.auth().currentUser != null) {
      username = firebase.auth().currentUser.displayName;
    }

    this.state = {
      name: username,
      pathname: window.location.pathname,
      dashboardSelected: "nav-item has-treeview",
      branchesSelected: "nav-item has-treeview",
      packageSelected: "nav-item has-treeview",
    };
  }

  render() {
    const { branches, classes, selectedBranchIndex } = this.props;

    if (this.state.pathname == "/") {
      this.state.dashboardSelected = "nav-item has-treeview menu-open";
      this.state.branchesSelected = "nav-item has-treeview";
      this.state.packageSelected = "nav-item has-treeview";
    } else if (this.state.pathname == "/branches") {
      this.state.dashboardSelected = "nav-item has-treeview";
      this.state.branchesSelected = "nav-item has-treeview menu-open";
      this.state.packageSelected = "nav-item has-treeview";
    } else if (this.state.pathname == "/addpackage") {
      this.state.dashboardSelected = "nav-item has-treeview";
      this.state.branchesSelected = "nav-item has-treeview";
      this.state.packageSelected = "nav-item has-treeview menu-open";
    }

    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="/" className="brand-link">
          <img
            src="dist/img/TrackingLogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: "0.8" }}
          />
          <span className="brand-text font-weight-light">
            TwentySoft Tracking
          </span>
        </a>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                {this.state.name}
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-header">ADMIN MANAGEMENT</li>

              <li className={this.state.dashboardSelected}>
                <a href="/" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>Dashboard</p>
                </a>
              </li>

              <li className={this.state.branchesSelected}>
                <a href="/branches" className="nav-link">
                  <i className="nav-icon fas fa-code-branch" />
                  <p>Branches</p>
                </a>
              </li>

              <li className="nav-header">PACKAGE SIMULATION</li>

              <li className={this.state.packageSelected}>
                <a href="/addpackage" className="nav-link">
                  <i className="nav-icon fas fa-box-open" />
                  <p>Create</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}

export default Menu;
