import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItemComponent from "./SidebarItem";

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      branches: null,
    };
  }
  render() {
    const { branches } = this.props;

    console.log(branches);
    if (branches) {
      return (
        <table className="table table-striped table-valign-middle">
          <thead>
            <tr>
              <th>Name</th>
              <th>Orders</th>
              <th>Delivering</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {branches.map((_branch, _index) => {
              return (
                <SidebarItemComponent
                  key={_index}
                  _branch={_branch}
                  _index={_index}
                ></SidebarItemComponent>
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

export default Sidebar;
