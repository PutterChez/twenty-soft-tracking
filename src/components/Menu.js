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
    };
  }

  render() {
    const { branches, classes, selectedBranchIndex } = this.props;

    if(this.state.pathname == "/"){
      this.state.dashboardSelected = "nav-item has-treeview menu-open"
      this.state.branchesSelected = "nav-item has-treeview"
    }
    else if(this.state.pathname == "/branches"){
      this.state.dashboardSelected = "nav-item has-treeview"
      this.state.branchesSelected = "nav-item has-treeview menu-open"
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
                <a href="branches" className="nav-link">
                  <i className="nav-icon fas fa-code-branch" />
                  <p>Branches</p>
                </a>
              </li>

              <li className="nav-item has-treeview">
                <a href="/" className="nav-link">
                  <i className="nav-icon fas fa-chart-pie" />
                  <p>
                    Charts
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/charts/chartjs.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>ChartJS</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/charts/flot.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Flot</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/charts/inline.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Inline</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}

export default Menu;
