import React from "react";
import PackageItemComponent from "./SidebarItem";

class PackageList extends React.Component {
  constructor() {
    super();
    this.state = {
      packages: null,
    };
  }

  render() {
    const { packages } = this.props;

    return (
      <div className="row">
        <div className="col-md-4">
          {/* Widget: user widget style 2 */}
          <div className="card card-widget widget-user-2">
            {/* Add the bg color to the header using any of the bg-* classes */}
            <div className="widget-user-header bg-warning">
              <div className="widget-user-image">
                <img
                  className="img-circle elevation-2"
                  src="../dist/img/user7-128x128.jpg"
                  alt="User Avatar"
                />
              </div>
              {/* /.widget-user-image */}
              <h3 className="widget-user-username">Nadia Carmichael</h3>
              <h5 className="widget-user-desc">Lead Developer</h5>
            </div>
            <div className="card-footer p-0">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Projects{" "}
                    <span className="float-right badge bg-primary">31</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Tasks <span className="float-right badge bg-info">5</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Completed Projects{" "}
                    <span className="float-right badge bg-success">12</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Followers{" "}
                    <span className="float-right badge bg-danger">842</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* /.widget-user */}
        </div>
        {/* /.col */}
        <div className="col-md-4">
          {/* Widget: user widget style 1 */}
          <div className="card card-widget widget-user">
            {/* Add the bg color to the header using any of the bg-* classes */}
            <div className="widget-user-header bg-info">
              <h3 className="widget-user-username">Alexander Pierce</h3>
              <h5 className="widget-user-desc">Founder &amp; CEO</h5>
            </div>
            <div className="widget-user-image">
              <img
                className="img-circle elevation-2"
                src="../dist/img/user1-128x128.jpg"
                alt="User Avatar"
              />
            </div>
            <div className="card-footer">
              <div className="row">
                <div className="col-sm-4 border-right">
                  <div className="description-block">
                    <h5 className="description-header">3,200</h5>
                    <span className="description-text">SALES</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
                <div className="col-sm-4 border-right">
                  <div className="description-block">
                    <h5 className="description-header">13,000</h5>
                    <span className="description-text">FOLLOWERS</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
                <div className="col-sm-4">
                  <div className="description-block">
                    <h5 className="description-header">35</h5>
                    <span className="description-text">PRODUCTS</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
          </div>
          {/* /.widget-user */}
        </div>
        {/* /.col */}
        <div className="col-md-4">
          {/* Widget: user widget style 1 */}
          <div className="card card-widget widget-user">
            {/* Add the bg color to the header using any of the bg-* classes */}
            <div
              className="widget-user-header text-white"
              style={{
                background: 'url("../dist/img/photo1.png") center center',
              }}
            >
              <h3 className="widget-user-username text-right">
                Elizabeth Pierce
              </h3>
              <h5 className="widget-user-desc text-right">Web Designer</h5>
            </div>
            <div className="widget-user-image">
              <img
                className="img-circle"
                src="../dist/img/user3-128x128.jpg"
                alt="User Avatar"
              />
            </div>
            <div className="card-footer">
              <div className="row">
                <div className="col-sm-4 border-right">
                  <div className="description-block">
                    <h5 className="description-header">3,200</h5>
                    <span className="description-text">SALES</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
                <div className="col-sm-4 border-right">
                  <div className="description-block">
                    <h5 className="description-header">13,000</h5>
                    <span className="description-text">FOLLOWERS</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
                <div className="col-sm-4">
                  <div className="description-block">
                    <h5 className="description-header">35</h5>
                    <span className="description-text">PRODUCTS</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
          </div>
          {/* /.widget-user */}
        </div>
        {/* /.col */}
      </div>
    );
  }
}

export default PackageList;
