import React from "react";

const firebase = require("firebase");

class AddPackage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      receiverID: null,
      senderID: null,
      start: null,
      destination: null,
    };
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(state);
  };

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
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Package Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter ..."
                      onChange={this.onChange}
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
                      name="receiverID"
                      className="form-control"
                      placeholder="Enter ..."
                      onChange={this.onChange}
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
                      name="senderID"
                      className="form-control"
                      placeholder="Enter ..."
                      onChange={this.onChange}
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
                      name="start"
                      className="form-control"
                      placeholder="Enter ..."
                      onChange={this.onChange}
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
                      name="destination"
                      className="form-control"
                      placeholder="Enter ..."
                      onChange={this.onChange}
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
                    onClick={this.newPackage}
                  >
                    Add Package
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  newPackage = async () => {
    var user = firebase.auth().currentUser.uid;

    const parsel = {
      name: this.state.name,
      senderID: this.state.senderID,
      receiverID: this.state.receiverID,
      start: this.state.start,
      destination: this.state.destination,
    };

    await firebase
      .firestore()
      .collection("packages")
      .doc()
      .set({
        name: parsel.name,
        senderID: parsel.senderID,
        receiverID: parsel.receiverID,
        start: parsel.start,
        destination: parsel.destination,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        location: [0, 0],
        estTime: "0:00",
      })
      .then(() => {
        window.location.href = "./branches";
      });
  };
}

export default AddPackage;
