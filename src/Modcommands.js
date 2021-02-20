import React from 'react';

import Table from 'react-bootstrap/Table';
import CommandEntry from './components/Commandentry';

function ModCommands() {
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
                <CommandEntry command="b!kick" desc="Kicks the mentioned user from the server" usage="{@mention/id} {reason}" />
                <CommandEntry command="b!lockjoin" desc="Locks the guild so people can't join the server" usage="{on/off} {reason}" />
                <CommandEntry command="b!ban" desc="Bans the mentioned user from the server" usage="{@mention/id} {reason}" />
                <CommandEntry command="b!prefix" desc="Changes the prefix of the bot" usage="{prefix}" />
                <CommandEntry command="b!set" desc="Changes settings of the guild" usage="{welcome/leave/levelupmessage/levelenable/badwords} {value}" />
                <CommandEntry command="b!delete" desc="Removes / Resets the selected setting" usage="{welcome/leave}" />
                <CommandEntry command="b!resetprefix" desc="Resets the prefix of the bot to b!" usage="" />
                <CommandEntry command="b!warn" desc="Warns the mentioned user" usage="{@mention/id} {reason}" />
                <CommandEntry command="b!warns" desc="Tells the current warns of a user" usage="{@mention/id}" />
                <CommandEntry command="b!clearwarnings" desc="Clears the warnings of the mentioned user" usage="{@mention/id}" />
                <CommandEntry command="b!purge" desc="Clears the number of messages provided. Doesn't work for messages older than 14 days." usage="{number} <@user>" />
                <CommandEntry command="b!nuke" desc="This nukes the channel by recreating it." usage="" />
                <CommandEntry command="b!lock" desc="Locks the server or the mentioned channel" usage="{#mention/id} or b!lock server" />
                <CommandEntry command="b!unlock" desc="Unlocks the server or mentioned channel" usage="{#mention/id} or b!unlock server" />
                <CommandEntry command="b!mute" desc="Mutes the mentioned user for a specified time" usage="{@mention/id} {time} {reason}" />
                <CommandEntry command="b!unmute" desc="Unmutes the user mentioned" usage="{@mention/id}" />
            </tbody>
        </Table>
    );
}

export default ModCommands;