import React from "react";
import Sidebar from "./Sidebar";
import { useLocation } from 'react-router-dom'

const firebase = require("firebase");

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      branches: null,
    };

  }

  render() {
    const { branches } = this.props;

    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Dashboard</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="/">Dashboard</a>
                  </li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header border-0">
                    <h3 className="card-title">Branches</h3>
                    <div className="card-tools">
                      <a href="branches" className="btn btn-secondary">
                        Manage Branches
                      </a>
                    </div>
                  </div>
                  <div className="card-body table-responsive p-0">
                    <Sidebar branches={this.state.branches}></Sidebar>
                  </div>
                </div>
                {/* /.card */}
              </div>
              {/* /.col-md-6 */}
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-header border-0">
                    <h3 className="card-title">Online Store Overview</h3>
                    <div className="card-tools">
                      <a href="#" className="btn btn-sm btn-tool">
                        <i className="fas fa-bars" />
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                      <p className="text-success text-xl">
                        <i className="ion ion-ios-refresh-empty" />
                      </p>
                      <p className="d-flex flex-column text-right">
                        <span className="font-weight-bold">
                          <i className="ion ion-android-arrow-up text-success" />
                          12%
                        </span>
                        <span className="text-muted">CONVERSION RATE</span>
                      </p>
                    </div>
                    {/* /.d-flex */}
                    <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                      <p className="text-warning text-xl">
                        <i className="ion ion-ios-cart-outline" />
                      </p>
                      <p className="d-flex flex-column text-right">
                        <span className="font-weight-bold">
                          <i className="ion ion-android-arrow-up text-warning" />
                          0.8%
                        </span>
                        <span className="text-muted">SALES RATE</span>
                      </p>
                    </div>
                    {/* /.d-flex */}
                    <div className="d-flex justify-content-between align-items-center mb-0">
                      <p className="text-danger text-xl">
                        <i className="ion ion-ios-people-outline" />
                      </p>
                      <p className="d-flex flex-column text-right">
                        <span className="font-weight-bold">
                          <i className="ion ion-android-arrow-down text-danger" />
                          1%
                        </span>
                        <span className="text-muted">REGISTRATION RATE</span>
                      </p>
                    </div>
                    {/* /.d-flex */}
                  </div>
                </div>
              </div>
              {/* /.col-md-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content */}
      </div>
    );
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection("branches")
      .onSnapshot((serverUpdate) => {
        const branches = serverUpdate.docs.map((_docs) => {
          const data = _docs.data();
          data["id"] = _docs.id;
          return data;
        });
        this.setState({ branches: branches });
      });
  };
}
export default Dashboard;
