import React from "react";
import app from "../base";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      search: null,
    }
  }
  
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  render(){
    return (
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button">
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        {/* SEARCH FORM */}
        <div className="form-inline ml-3">
          <div className="input-group input-group-sm">
            <input
              className="form-control form-control-navbar"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="search"
              onChange={this.onChange}
            />
            <div className="input-group-append">
              <Link to={`/packageinfo/${this.state.search}`}>
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          <a href="/" className="d-block">
            <button
              className="btn btn-primary btn-block"
              onClick={() => app.auth().signOut()}
            >
              Sign out
            </button>
          </a>
        </ul>
      </nav>
    );
  }
}

export default Header;
