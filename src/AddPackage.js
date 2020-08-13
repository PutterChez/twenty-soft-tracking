import React from "react";

const firebase = require("firebase");

class AddPackage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Add Package</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active">Package Simulation</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/* Main content */}

        <div className="col-md-6">
          <div className="card card-warning">
            <div className="card-header">
              <h3 className="card-title">Package Details</h3>
            </div>
            <div className="card-body">
              <form role="form">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Package Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ..."
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Receiver ID</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ..."
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Sender Branch</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ..."
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Start Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ..."
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Destination Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ..."
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <a href="/" className="btn btn-secondary">
                      Cancel
                    </a>
                    <button
                      type="submit"
                      className="btn btn-success float-right"
                      onClick={this.newBranch}
                    >
                      Add Package
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  newBranch = async () => {
    var user = firebase.auth().currentUser.uid;

    const branch = {
      name: this.state.name,
      desc: this.state.desc,
      status: this.state.status,
      location: this.state.location,
      vehicles: this.state.vehicles,
      drivers: this.state.drivers,
      creator: user,
    };

    await firebase
      .firestore()
      .collection("branches")
      .doc()
      .set({
        name: branch.name,
        description: branch.desc,
        status: branch.status,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        window.location.href = "./branches";
      });
  };
}

export default AddPackage;
