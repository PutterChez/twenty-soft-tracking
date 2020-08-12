import React from "react";

class BranchListItem extends React.Component {
  render() {
    const { _index, _branch } = this.props;

    var progress = parseInt((_branch.delivering / _branch.orders) * 100);
    var style = {
      width: progress + "%",
    };

    return (
      <tr>
        <td>
          <a>{_branch.name}</a>
          <br />
          <small>Created 01.01.2019</small>
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
          <span className="badge badge-success">{_branch.status}</span>
        </td>
        <td className="project-actions text-right">
          <a className="btn btn-primary btn-sm" href="#">
            <i className="fas fa-folder"></i>
            View
          </a>
        </td>
      </tr>
    );
  }
}

export default BranchListItem;
