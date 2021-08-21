import React from "react";
import axios from "axios";
import Jumbotron from "react-bootstrap/Jumbotron";

class Footer extends React.Component {
  state: { servers?: number };

  constructor(props: Record<string, never>) {
    super(props);
    this.state = {};
  }

  async componentDidMount(): Promise<void> {
    const response = await axios.get(
      "https://sinmineryt.ga/api/blip-server-count.php",
      { responseType: "json" }
    );

    await this.setState({
      servers: response.data.servers,
    });
  }

  render(): JSX.Element {
    return (
      <>
        <Jumbotron
          className="bg-light text-muted text-center m-0"
          style={{ borderRadius: 0 }}
        >
          Copyright &copy; Agent_Mighty and Sin
          <br />
          View on{" "}
          <a
            rel="noreferrer"
            href="https://github.com/sinmineryt/blipsite2"
            target="_blank"
          >
            GitHub
          </a>
          <br></br>
          {this.state.servers &&
            `Blip is currently in ${this.state.servers} servers`}
        </Jumbotron>
      </>
    );
  }
}

export default Footer;
