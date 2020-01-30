import React from "react";
export default class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name, host } = this.props;
    console.log("MicroFrontend Did Mount", name, host);

    const hostAssetURL = `${host}/asset-manifest.json`;
    fetch(hostAssetURL)
      .then(res => res.json())
      .then(result => console.log("Asset manifest", result));
  }

  render() {
    return <p>Microfrontend!</p>;
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }
}
