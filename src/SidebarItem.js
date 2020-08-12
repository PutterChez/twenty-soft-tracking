import React from "react";

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
