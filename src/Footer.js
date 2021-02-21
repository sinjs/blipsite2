import React from 'react';

import axios from 'axios';

import Jumbotron from 'react-bootstrap/Jumbotron';

class Footer extends React.Component {
    state = {}

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve);
        });
    }

    async componentDidMount() {
        const response = await axios.get('https://sinmineryt.ga/api/blip-server-count.php', {responseType: 'json'});
        const Servers = response.data.servers;

        await this.setStateAsync({servers: 'Blip is currently in ' + Servers + ' Servers'})
    }

    render() {
        if(this.state.servers) {
            return (
                <>
                    <Jumbotron className="bg-light text-muted text-center m-0" style={{borderRadius: 0}}>
                        Copyright &copy; Agent_Mighty and Sin<br />
                        View on <a href="https://github.com/sinmineryt/blipsite2" target="_blank">GitHub</a><br></br>
                        {this.state.servers}
                    </Jumbotron>
                </>
            );
        }

        return (
            <>
                <Jumbotron className="bg-light text-muted text-center m-0" style={{borderRadius: 0}}>
                    Copyright &copy; Agent_Mighty and Sin<br />
                    View on <a href="https://github.com/sinmineryt/blipsite2" target="_blank">GitHub</a><br></br>
                </Jumbotron>
            </>);
    }
}

export default Footer