import React from "react";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

class Alerts extends React.Component {
  state: { exists?: boolean; heading?: string; text?: string };

  constructor(props: Record<string, never>) {
    super(props);
    this.state = {};
  }

  async componentDidMount(): Promise<void> {
    const response = await axios.get("https://sinmineryt.ga/blip-status.json", {
      responseType: "json",
    });
    const { exists, heading, text } = response.data;

    await this.setState({
      exists,
      heading,
      text,
    });
  }

  render(): JSX.Element {
    if (this.state.exists) {
      return (
        <>
          <Alert variant="danger">
            <Alert.Heading>{this.state.heading}</Alert.Heading>
            {this.state.text}
          </Alert>
        </>
      );
    }

    return <> </>;
  }
}

export default Alerts;
