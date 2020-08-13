import React from "react";
import PackageItemComponent from "./PackageItemComponent";

class PackageList extends React.Component {
  constructor() {
    super();
    this.state = {
      packages: null,
    };
  }

  render() {
    const { packages } = this.props;
    console.log(this.props);

    if (packages) {
      return (
        <div className="row">
          {packages.map((_package, _index) => {
            return (
              <PackageItemComponent
                _key={_index}
                _package={_package}
                _index={_index}
              ></PackageItemComponent>
            );
          })}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default PackageList;
