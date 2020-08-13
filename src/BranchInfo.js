import React from "react";

const firebase = require("firebase");

class BranchInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      branch: {},
      key: "",
      name: null,
      desc: null,
      status: null,
      location: null,
      vehicles: null,
      drivers: null,
      deletionText: null,
    };
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection("branches")
      .doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          branch: doc.data(),
          key: doc.id,
          isLoading: false,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Branch Information</h1>
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
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <div className="card card-primary card-outline">
                  <div className="card-body box-profile">
                    <h3 className="profile-username text-center">
                      {this.state.branch.name}
                    </h3>
                    <p className="text-muted text-center">Current Status</p>
                    <ul className="list-group list-group-unbordered mb-3">
                      <li className="list-group-item">
                        <b>Status</b>{" "}
                        <a className="float-right">
                          {this.state.branch.status}
                        </a>
                      </li>
                      <li className="list-group-item">
                        <b>Orders</b>{" "}
                        <a className="float-right">
                          {this.state.branch.orders}
                        </a>
                      </li>
                      <li className="list-group-item">
                        <b>Delivering</b>{" "}
                        <a className="float-right">
                          {this.state.branch.deliveries}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Details</h3>
                  </div>
                  <div className="card-body">
                    <strong>
                      <i className="fas fa-book mr-1" /> Description
                    </strong>
                    <p className="text-muted">
                      {this.state.branch.description}
                    </p>
                    <hr />
                    <strong>
                      <i className="fas fa-map-marker-alt mr-1" /> Location
                    </strong>
                    <p className="text-muted">{this.state.branch.location}</p>
                    <hr />
                    <strong>
                      <i className="fas fa-truck mr-1" /> Vehicles
                    </strong>
                    <p className="text-muted">{this.state.branch.vehicles}</p>
                    <hr />
                    <strong>
                      <i className="far fa-user mr-1" /> Drivers
                    </strong>
                    <p className="text-muted">{this.state.branch.drivers}</p>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-9">
                <div className="card">
                  <div className="card-header p-2">
                    <ul className="nav nav-pills">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="#activity"
                          data-toggle="tab"
                        >
                          Deliveries
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#timeline"
                          data-toggle="tab"
                        >
                          Edit Branch
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#settings"
                          data-toggle="tab"
                        >
                          Delete Branch
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="tab-content">
                      <div className="active tab-pane" id="activity"></div>
                      {/* /.tab-pane */}
                      <div className="tab-pane" id="timeline">
                        <div className="form-horizontal">
                          <div className="form-group row">
                            <label
                              htmlFor="editName"
                              className="col-sm-2 col-form-label"
                            >
                              Branch Name
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="New Name"
                                onChange={this.onChange}
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="editDesc"
                              className="col-sm-2 col-form-label"
                            >
                              Branch Description
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control"
                                name="desc"
                                placeholder="New Description"
                                onChange={this.onChange}
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="newLocation"
                              className="col-sm-2 col-form-label"
                            >
                              Status
                            </label>
                            <div className="col-sm-10">
                              <select
                                className="form-control custom-select"
                                name="status"
                                onChange={this.onChange}
                              >
                                <option selected disabled>
                                  Select one
                                </option>
                                <option>Active</option>
                                <option>Closed</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="newLocation"
                              className="col-sm-2 col-form-label"
                            >
                              Location
                            </label>
                            <div className="col-sm-10">
                              <select
                                className="form-control custom-select"
                                name="location"
                                onChange={this.onChange}
                              >
                                <option selected disabled>
                                  Select one
                                </option>
                                <option>Bang Bon</option>
                                <option>Bang Kapi</option>
                                <option>Bang Khae</option>
                                <option>Bang Khen</option>
                                <option>Bang Kho Laem</option>
                                <option>Bang Na 47</option>
                                <option>Bang Phlat</option>
                                <option>Bang Rak</option>
                                <option>Bang Sue</option>
                                <option>Bangkok Noi</option>
                                <option>Bangkok Yai</option>
                                <option>Bueng Kum</option>
                                <option>Chatuchak</option>
                                <option>Chom Thong</option>
                                <option>Din Daeng</option>
                                <option>Don Mueang</option>
                                <option>Dusit</option>
                                <option>Huai Khwang</option>
                                <option>Khan Na Yao</option>
                                <option>Khlong Sam Wa</option>
                                <option>Khlong San</option>
                                <option>Khlong Toei</option>
                                <option>Lak Si</option>
                                <option>Lat Krabang</option>
                                <option>Lat Phrao</option>
                                <option>Min Buri</option>
                                <option>Nong Chok</option>
                                <option>Nong Khaem</option>
                                <option>Pathum Wan</option>
                                <option>Phasi Charoen</option>
                                <option>Phaya Thai</option>
                                <option>Phra Khanong</option>
                                <option>Phra Nakhon</option>
                                <option>Pom Prap Sattru Phai</option>
                                <option>Prawet</option>
                                <option>Rat Burana</option>
                                <option>Ratchathewi</option>
                                <option>Sai Mai</option>
                                <option>Samphanthawong</option>
                                <option>Saphan Sung</option>
                                <option>Sathon</option>
                                <option>Suan Luang</option>
                                <option>Taling Chan</option>
                                <option>Thawi Watthana</option>
                                <option>Thon Buri</option>
                                <option>Thung Khru</option>
                                <option>Wang Thonglang</option>
                                <option>Watthana</option>
                                <option>Yan Nawa</option>
                              </select>
                            </div>
                          </div>

                          <div className="form-group row">
                            <label
                              htmlFor="editVehicles"
                              className="col-sm-2 col-form-label"
                            >
                              Vehicles
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="number"
                                className="form-control"
                                name="vehicles"
                                placeholder="New Vehicles"
                                onChange={this.onChange}
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="editDrivers"
                              className="col-sm-2 col-form-label"
                            >
                              Drivers
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="number"
                                className="form-control"
                                name="drivers"
                                placeholder="New Drivers"
                                onChange={this.onChange}
                              />
                            </div>
                          </div>

                          <div className="form-group row">
                            <div className="offset-sm-2 col-sm-10">
                              <button
                                className="btn btn-warning"
                                onClick={this.editBranch}
                              >
                                Edit Branch
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="settings">
                        <div className="form-horizontal">
                          <div className="form-group row">
                            <label
                              name="verifyCheck"
                              className="col-sm-2 col-form-label"
                            >
                              Verify Deletion
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="text"
                                className="form-control"
                                name="deletionText"
                                placeholder="Please enter the branch's name"
                                onChange={this.onChange}
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="offset-sm-2 col-sm-10">
                              <b>
                                By confirming deletion, you understand that this
                                action cannot be undone
                              </b>
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="offset-sm-2 col-sm-10">
                              <button
                                type="submit"
                                className="btn btn-danger"
                                onClick={this.deleteBranch}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  editBranch = async () => {
    const branch = {
      name: this.state.name,
      desc: this.state.desc,
      status: this.state.status,
      location: this.state.location,
      vehicles: this.state.vehicles,
      drivers: this.state.drivers,
    };

    await firebase
      .firestore()
      .collection("branches")
      .doc(this.state.key)
      .update({
        name: branch.name,
        description: branch.desc,
        status: branch.status,
        location: branch.location,
        vehicles: branch.vehicles,
        drivers: branch.drivers,
      });
    window.location.href = "/branches";
  };

  deleteBranch = () => {
    console.log(this.state.verifyCheck);
    if (this.state.deletionText == this.state.branch.name) {
      firebase
        .firestore()
        .collection("branches")
        .doc(this.props.match.params.id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          this.props.history.push("/");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    } else {
      window.alert("Please verify the deletion properly");
    }
  };
}
export default BranchInfo;
