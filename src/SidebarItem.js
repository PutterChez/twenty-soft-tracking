import React from "react";

class SidebarItemComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      statusButton: "fas fa-check",
    }
  }

  render() {
    const { _index, _branch } = this.props;
    
    if(_branch.status == "Closed"){
      this.state.statusButton = "fas fa-times";
    }

    return (
      <tr key={_index}>
        <td>{_branch.name}</td>
        <td>{_branch.orders}</td>
        <td>{_branch.delivering}</td>
        <td>
          <i className={this.state.statusButton} />
        </td>
      </tr>
    );
  }
}

export default SidebarItemComponent;
