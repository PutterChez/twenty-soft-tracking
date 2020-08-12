import React from "react";

function AddBranch() {
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
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
        {/* /.container-fluid */}
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
                  <input type="text" id="inputName" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputDescription">Branch Description</label>
                  <textarea
                    id="inputDescription"
                    className="form-control"
                    rows={4}
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputStatus">Status</label>
                  <select className="form-control custom-select">
                    <option selected disabled>
                      Select one
                    </option>
                    <option>Active</option>
                    <option>Closed</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="inputVehicles">Vehicles</label>
                  <input
                    type="number"
                    id="inputVehicles"
                    className="form-control"
                  />
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          <div className="col-md-6">
            <div className="card card-secondary">
              <div className="card-header">
                <h3 className="card-title">Budget</h3>
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
                  <label htmlFor="inputEstimatedBudget">Estimated budget</label>
                  <input
                    type="number"
                    id="inputEstimatedBudget"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputSpentBudget">Total amount spent</label>
                  <input
                    type="number"
                    id="inputSpentBudget"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputEstimatedDuration">
                    Estimated project duration
                  </label>
                  <input
                    type="number"
                    id="inputEstimatedDuration"
                    className="form-control"
                  />
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <a href="/" className="btn btn-secondary">
              Cancel
            </a>
            <input
              type="submit"
              defaultValue="Create new Porject"
              className="btn btn-success float-right"
            />
          </div>
        </div>
      </section>
      {/* /.content */}
    </div>
  );
}

export default AddBranch;
