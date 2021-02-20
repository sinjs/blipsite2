import React from 'react';

import Table from 'react-bootstrap/Table';
import CommandEntry from './components/Commandentry';

function MusicCommands() {
    return (
        <Table responsive striped hover>
            <thead>
                <tr>
                    <th>Command</th>
                    <th>Description</th>
                    <th>Usage</th>
                </tr>
            </thead>
            <tbody>
                <CommandEntry command="b!play" desc="Plays a song from youtube, playlists supported." usage="{link/songname}" />
                <CommandEntry command="b!soundcloud" desc="Plays a song from soundcloud, playlists supported." usage="{link/songname}" />
                <CommandEntry command="b!leave" desc="Leaves the current channel" usage="" />
                <CommandEntry command="b!join" desc="Joins the voice channel you're in" usage="" />
                <CommandEntry command="b!pause" desc="Pauses the current song playing" usage="" />
                <CommandEntry command="b!resume" desc="Resumes the current song if paused" usage="" />
                <CommandEntry command="b!lyrics" desc="Displays the lyrics of the song" usage="<songname>" />
                <CommandEntry command="b!skip" desc="Skips the song playing" usage="" />
                <CommandEntry command="b!seek" desc="Skips to specific time in the song" usage="{m:ss}" />
                <CommandEntry command="b!np" desc="Shows the current song playing" usage="" />
                <CommandEntry command="b!volume" desc="Sets the volume of the song" usage="{number}" />
                <CommandEntry command="b!queue" desc="Shows the current queue" usage="" />
                <CommandEntry command="b!shuffle" desc="Shuffles the queue" usage="" />
                <CommandEntry command="b!remove" desc="Removes a track from the queue" usage="{number}" />
                <CommandEntry command="b!loop" desc="Loops the current song / queue" usage="{song/queue/song-off/queue-off}" />
                <CommandEntry command="b!bassboost" desc="Applies bassboost to the song. (rip ears)" usage="{number}" />
                <CommandEntry command="b!destroyqueue" desc="Resets the queue, use if queue is glitching" usage="" />
            </tbody>
        </Table>
    );
}

export default MusicCommands;