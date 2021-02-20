import React from 'react';

import Table from 'react-bootstrap/Table';
import CommandEntry from './components/Commandentry';

function OtherCommands() {
    return (
        <Table striped hover>
            <thead>
                <tr>
                    <th>Command</th>
                    <th>Description</th>
                    <th>Usage</th>
                </tr>
            </thead>
            <tbody>
                <CommandEntry command="b!stats" desc="Shows the bot's stats." usage="" />
                <CommandEntry command="b!servercard" desc="Shows info from the server in a card." usage="" />
                <CommandEntry command="b!upvote" desc="Support Blip <a href='/vote'>by upvoting it on botlists</a>!" usage="" />
                <CommandEntry command="b!afk" desc="Sets your AFK status" usage="<reason>" />
                <CommandEntry command="b!invite" desc="Gives you a <a href='//invite.blip-bot.cf'>link to invite Blip</a>." usage="" />
                <CommandEntry command="b!avatar" desc="Shows your / the mentioned users avatar." usage="<@mention/id>" />
                <CommandEntry command="b!ping" desc="Shows the bot's latency. 🏓" usage="" />
                <CommandEntry command="b!userinfo" desc="Shows information about the user mentioned" usage="<@mention/id>" />
                <CommandEntry command="b!serverinfo" desc="Shows info of the server" usage="" />
            </tbody>
        </Table>
    );
}

export default OtherCommands;