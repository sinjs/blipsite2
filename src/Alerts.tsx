import React from "react";

import Alert from "react-bootstrap/Alert";

import axios from "axios";

class Alerts extends React.Component {
  state = {};

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async componentDidMount() {
    const response = await axios.get("https://sinmineryt.ga/blip-status.json", {
      responseType: "json",
    });
    const AlertExists = response.data.exists;
    const AlertHeading = response.data.heading;
    const AlertText = response.data.text;

    await this.setStateAsync({
      alertExists: AlertExists,
      alertHeading: AlertHeading,
      alertText: AlertText,
    });
  }

  render() {
    if (this.state.alertExists) {
      return (
        <>
          <Alert variant="danger">
            <Alert.Heading>{this.state.alertHeading}</Alert.Heading>
            {this.state.alertText}
          </Alert>
        </>
      );
    }

    return <> </>;
  }
}

export default Alerts;
