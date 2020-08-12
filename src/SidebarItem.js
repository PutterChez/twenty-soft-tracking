import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeHTMLTags } from "./helpers";

class SidebarItemComponent extends React.Component {
  render() {
    const { _index, _branch } = this.props;
    return (
      <tr key={_index}>
        <td>{_branch.name}</td>
        <td>{_branch.orders}</td>
        <td>{_branch.delivering}</td>
        <td>
          <i className="fas fa-check" />
        </td>
      </tr>
    );
  }
}

export default SidebarItemComponent;
