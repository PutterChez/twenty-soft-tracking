import React from "react";

const firebase = require("firebase");

class Branches extends React.Component {
  constructor() {
    super();
    this.state = {
      branches: null,
    };
  }

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Branches</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Branches</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          {/* Default box */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Branches</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  data-toggle="tooltip"
                  title="Collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  data-toggle="tooltip"
                  title="Remove"
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body p-0">
              <table className="table table-striped projects">
                <thead>
                  <tr>
                    <th style={{ width: "1%" }}>#</th>
                    <th style={{ width: "20%" }}>Branch Name</th>
                    <th style={{ width: "30%" }}>Packages to Deliver</th>
                    <th>Deliveries Progress</th>
                    <th style={{ width: "8%" }} className="text-center">
                      Status
                    </th>
                    <th style={{ width: "20%" }}></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#</td>
                    <td>
                      <a>AdminLTE v3</a>
                      <br />
                      <small>Created 01.01.2019</small>
                    </td>
                    <td>12</td>
                    <td className="project_progress">
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar bg-green"
                          role="progressbar"
                          aria-volumenow={57}
                          aria-volumemin={0}
                          aria-volumemax={100}
                          style={{ width: "57%" }}
                        ></div>
                      </div>
                      <small>57% Complete</small>
                    </td>
                    <td className="project-state">
                      <span className="badge badge-success">Success</span>
                    </td>
                    <td className="project-actions text-right">
                      <a className="btn btn-primary btn-sm" href="#">
                        <i className="fas fa-folder"></i>
                        View
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </section>
        {/* /.content */}
      </div>
    );
  }
}

export default Branches;
