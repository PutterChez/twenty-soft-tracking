import React from "react";
import { withRouter, Redirect } from "react-router";

const firebase = require("firebase");

class AddBranch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      desc: null,
      status: null,
      location: null,
      vehicles: null,
      drivers: null,
      creator: null,
    }
  }

  nameHandler = (event) => {
    this.setState({name: event.target.value});
  }
  descHandler = (event) => {
    this.setState({desc: event.target.value});
  }
  statusHandler = (event) => {
    this.setState({status: event.target.value});
  }
  locationHandler = (event) => {
    this.setState({location: event.target.value});
  }
  vehiclesHandler = (event) => {
    this.setState({vehicles: event.target.value});
  }
  driversHandler = (event) => {
    this.setState({drivers: event.target.value});
  }

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Add Branch</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="/">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Add Branch</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-md-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">General</h3>
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
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="inputName">Branch Name</label>
                    <input type="text" id="inputName" className="form-control" onChange={this.nameHandler}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputDescription">Branch Description</label>
                    <textarea
                      id="inputDescription"
                      className="form-control"
                      rows={4}
                      defaultValue={""}
                      onChange={this.descHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputStatus">Status</label>
                    <select className="form-control custom-select" onChange={this.statusHandler}>
                      <option selected disabled>Status of the branch</option>
                      <option>Active</option>
                      <option>Closed</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-secondary">
                <div className="card-header">
                  <h3 className="card-title">Logistics</h3>
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
                  </div>
                </div>
  
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="inputStatus">Branch Location</label>
                    <select className="form-control custom-select" onChange={this.locationHandler}>
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
  
                  <div className="form-group">
                    <label htmlFor="inputVehicles">Vehicles</label>
                    <input
                      type="number"
                      id="inputVehicles"
                      className="form-control"
                      onChange={this.vehiclesHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputDrivers">Drivers</label>
                    <input
                      type="number"
                      id="inputDrivers"
                      className="form-control"
                      onChange={this.driversHandler}
                    />
                  </div>
                </div>
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
              >Create new Project
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  newBranch = async() => {
    var user = firebase.auth().currentUser.uid;

    const branch = {
      name: this.state.name,
      desc: this.state.desc,
      status: this.state.status,
      location: this.state.location,
      vehicles: this.state.vehicles,
      drivers: this.state.drivers,
      creator: user,
    }

     await firebase
      .firestore()
      .collection("branches")
      .doc()
      .set({
        name: branch.name,
        description: branch.desc,
        status: branch.status,
        location: branch.location,
        vehicles: branch.vehicles,
        drivers: branch.drivers,
        creator: branch.creator,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        delivering: 0,
        orders: 0,
      })
      .then(()=>{
        window.location.href = './branches';
      })
  } 
}

export default AddBranch;
