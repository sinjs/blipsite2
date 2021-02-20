import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Commands from './Commands';
import ModCommands from './Modcommands';
import NotFound from './NotFound';

function Main() {
    return (
        <Switch> 
            {/* Page Routes */}
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/commands' component={Commands}></Route>
            <Route exact path='/commands/mod' component={ModCommands}></Route>

            {/* Vote Routes */}
            <Route exact path='/vote/topgg' component={() => {window.location.href = 'https://top.gg/bot/733241107277938688'; return (<></>);}} />
            <Route exact path='/vote/dbl' component={() => {window.location.href = 'https://discordbotlist.com/bots/blip'; return (<></>);}} />
            <Route exact path='/vote/bfd' component={() => {window.location.href = 'https://botsfordiscord.com/bot/733241107277938688'; return (<></>);}} />
            <Route exact path='/vote/dboa' component={() => {window.location.href = 'https://discord.boats/bot/733241107277938688'; return (<></>);}} />
            <Route exact path='/vote/botrix' component={() => {window.location.href = 'https://botrix.cc/bots/733241107277938688/'; return (<></>);}} />
            <Route exact path='/vote/dlabs' component={() => {window.location.href = 'https://bots.discordlabs.org/bot/733241107277938688'; return (<></>);}} />
            <Route exact path='/vote/paradise' component={() => {window.location.href = 'https://paradisebots.net/bots/733241107277938688'; return (<></>);}} />
            <Route exact path='/vote/infbl' component={() => {window.location.href = 'https://infinitybotlist.com/bots/733241107277938688'; return (<></>);}} />

            {/* Error Routes */}
            <Route component={NotFound}></Route>
        </Switch>
    );
}

export default Main;