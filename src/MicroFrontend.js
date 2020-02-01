import React from "react";

const injectScript = src => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    script.addEventListener("load", resolve);
    script.addEventListener("error", () => reject("Error loading script."));
    script.addEventListener("abort", () => reject("Script loading aborted."));
    document.head.appendChild(script);
  });
};

export default class MicroFrontend extends React.Component {
  componentDidMount() {
    // only for testing

    const { name, host } = this.props;
    const scriptId = `micro-frontend-script-${name}`;
    if (document.getElementById(scriptId)) {
      console.log("Microfrontend: script ID found");
      // this.renderMicroFrontend();
      return;
    }

    const hostAssetURL = `${host}/asset-manifest.json`;
    fetch(hostAssetURL)
      .then(res => res.json())
      .then(manifest => {
        injectScript(`${host}${manifest["files"]["main.js"]}`)
          .then(() => {
            console.log("Script loaded!");
            this.renderMicroFrontend();
          })
          .catch(error => {
            console.log(error);
          });
      });
  }

  renderMicroFrontend = () => {
    const { name, history } = this.props;
    console.log(
      "Microfrontend: RenderMicrofrontend",
      `render${name}`,
      `${name}-container`
    );
    window[`render${name}`](`${name}-container`, history);
  };

  render() {
    return <main id={`${this.props.name}-container`} />;
  }

  componentWillUnmount() {
    const { name } = this.props;

    window[`unmount${name}`](`${name}-container`);
  }
}
