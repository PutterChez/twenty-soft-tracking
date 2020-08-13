import React from "react";

class PackageItemComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { _index, _package } = this.props;

    return (
      <div className="col-md-5" key={_index}>
        <div className="card card-widget widget-user-2">
          <div className="widget-user-header bg-warning">
            <div className="widget-user-image">
              <img
                className="img-circle elevation-2"
                src="../dist/img/TrackingLogo.png"
                alt="User Avatar"
              />
            </div>
            <h3 className="widget-user-username">{_package.name}</h3>
            <h5 className="widget-user-desc">
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              }).format(_package.timestamp.toDate())}
            </h5>
          </div>
          <div className="card-footer p-0">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Receiver ID:
                  <span className="float-right badge bg-primary">
                    {_package.receiverID}
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Start
                  <span className="float-right badge bg-info">
                    {_package.start}
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Destination
                  <span className="float-right badge bg-success">
                    {_package.destination}
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Location
                  <span className="float-right badge bg-danger">
                    {_package.location[0]} , {_package.location[1]}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PackageItemComponent;
