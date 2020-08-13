import React from "react";
import BranchList from "./BranchList";

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
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Branch List</h3>
              <div className="card-tools">
                <a href="addbranch" className="btn btn-success">
                  <i className="fas fa-plus" />
                  Add Branch
                </a>
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
              <BranchList branches={this.state.branches}></BranchList>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </section>
        {/* /.content */}
      </div>
    );
  }

  componentDidMount = () => {
    var user = firebase.auth().currentUser.uid;

    firebase
      .firestore()
      .collection("branches")
      .where("creator","==",user)
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

export default Branches;
