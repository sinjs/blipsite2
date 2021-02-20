import React from 'react';

import Table from 'react-bootstrap/Table';
import CommandEntry from './components/Commandentry';

function FunCommands() {
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
                <CommandEntry command="b!OwO" desc="OwO, nothing more, just a gif with OwO. (why is this added)" usage="" />
                <CommandEntry command="b!wasted" desc="Wastes the user mentioned." usage="<@mention/id>" />
                <CommandEntry command="b!invert" desc="Inverts the mentioned user's avatar" usage="<@mention/id>" />
                <CommandEntry command="b!joke" desc="Tells you a random joke." usage="" />
                <CommandEntry command="b!howgay" desc="Displays your / the mentioned user's gay level. (<b>b!help howgay</b> for more info)" usage="<@mention/id>" />
                <CommandEntry command="b!poll" desc="Creates a poll." usage="{question}" />
                <CommandEntry command="b!ask" desc="Like 8ball, ask Blip a question!" usage="{question}" />
                <CommandEntry command="b!rank" desc="Displays your / the mentioned user's rank." usage="<@mention/id>" />
                <CommandEntry command="b!meme" desc="Displays a random meme from reddit." usage="" />
                <CommandEntry command="b!np" desc="Displays a random cursed image. (NSFW only)" usage="" />
                <CommandEntry command="b!triggered" desc="Triggers the user mentioned." usage="<@mention/id>" />
                <CommandEntry command="b!clyde" desc="Makes clyde say something." usage="{message}" />
                <CommandEntry command="b!trump" desc="Makes trump tweet something." usage="{message}" />
            </tbody>
        </Table>
    );
}

export default FunCommands;