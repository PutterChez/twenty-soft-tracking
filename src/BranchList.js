import React from "react";
import BranchListItem from "./BranchListItem";

class BranchList extends React.Component {
  constructor() {
    super();
    this.state = {
      branches: null,
    };
  }
  render() {
    const { branches } = this.props;

    if (branches) {
      return (
        <table className="table table-striped projects">
          <thead>
            <tr>
              <th style={{ width: "20%" }}>Branch Name</th>
              <th style={{ width: "30%" }}>Packages to Deliver</th>
              <th>Deliveries Progress</th>
              <th style={{ width: "8%" }} className="text-center">
                Status
              </th>
              <th style={{ width: "20%" }}></th>
            </tr>
          </thead>
          <tbody>
            {branches.map((_branch, _index) => {
              return (
                <BranchListItem
                  key={_index}
                  _branch={_branch}
                  _index={_index}
                ></BranchListItem>
              );
            })}
          </tbody>
        </table>
      );
    } else {
      return <div></div>;
    }
  }
}

export default BranchList;
