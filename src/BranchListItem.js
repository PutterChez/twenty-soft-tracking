import React from "react";
import { Link } from "react-router-dom";

class BranchListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      statusButton: "badge badge-success",
    };
  }

  render() {
    const { _index, _branch } = this.props;

    var progress;

    if (_branch.orders != 0) {
      progress = parseInt((_branch.delivering / _branch.orders) * 100);
    } else {
      progress = 0;
    }

    if (_branch.status == "Closed") {
      this.state.statusButton = "badge badge-danger";
    }

    var style = {
      width: progress + "%",
    };
    
    return (
      <tr>
        <td>
          <a>
            <Link to={`/branchinfo/${_branch.id}`}>{_branch.name}</Link>
          </a>
          <br />
          <small>
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }).format(_branch.timestamp.toDate())}
          </small>
        </td>
        <td>{_branch.orders}</td>
        <td className="project_progress">
          <div className="progress progress-sm">
            <div
              className="progress-bar bg-green"
              role="progressbar"
              aria-volumenow={57}
              aria-volumemin={0}
              aria-volumemax={100}
              style={style}
            ></div>
          </div>
          <small>{progress}% Complete</small>
        </td>
        <td className="project-state">
          <span className={this.state.statusButton}>{_branch.status}</span>
        </td>
        <td className="project-actions text-right">
          <a className="btn btn-primary btn-sm">
            <Link to={`/branchinfo/${_branch.id}`} style={{ color: "white" }}>
              <i className="fas fa-folder"></i>
              View
            </Link>
          </a>
        </td>
      </tr>
    );
  }
}

export default BranchListItem;
