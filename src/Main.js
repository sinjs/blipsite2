import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import Commands from './Commands';
import ModCommands from './Modcommands';
import NotFound from './NotFound';
import MusicCommands from './Musiccommands';
import RadioCommands from './Radiocommands';
import FunCommands from './Funcommands';
import OtherCommands from './Othercommands';
import Vote from './Vote';

function Main() {
    return (
        <Switch> 
            {/* Page Routes */}
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/commands' component={Commands}></Route>
            <Route exact path='/commands/mod' component={ModCommands}></Route>
            <Route exact path='/commands/music' component={MusicCommands}></Route>
            <Route exact path='/commands/radio' component={RadioCommands}></Route>
            <Route exact path='/commands/fun' component={FunCommands}></Route>
            <Route exact path='/commands/other' component={OtherCommands}></Route>
            <Route exact path='/vote' component={Vote}></Route>

            {/* Vote Routes */}
            <Route exact path='/vote/topgg' component={() => {window.location.href = 'https://top.gg/bot/733241107277938688'; return (<></>);}} />
            <Route exact path='/vote/dbl' component={() => {window.location.href = 'https://discordbotlist.com/bots/blip'; return (<></>);}} />
            <Route exact path='/vote/bfd' component={() => {window.location.href = 'https://botsfordiscord.com/bot/733241107277938688'; return (<></>);}} />
            <Route exact path='/vote/dboa' component={() => {window.location.href = 'https://discord.boats/bot/733241107277938688'; return (<></>);}} />
            <Route exact path='/vote/botrix' component={() => {window.location.href = 'https://botrix.cc/bots/733241107277938688/'; return (<></>);}} />
            <Route exact path='/vote/dlabs' component={() => {window.location.href = 'https://bots.discordlabs.org/bot/733241107277938688'; return (<></>);}} />
            <Route exact path='/vote/paradise' component={() => {window.location.href = 'https://paradisebots.net/bots/733241107277938688'; return (<></>);}} />
            <Route exact path='/vote/infbl' component={() => {window.location.href = 'https://infinitybotlist.com/bots/733241107277938688'; return (<></>);}} />

	    {/* Redirect Routes */}
	    <Redirect from="/commands.html" to="/commands" />
            <Redirect from="/vote.html" to="/vote" />
            <Redirect from="/moderation-commands.html" to="/commands/mod" />
            <Redirect from="/music-commands.html" to="/commands/music" />
            <Redirect from="/radio-commands.html" to="/commands/radio" />
            <Redirect from="/fun-commands.html" to="/commands/fun" />
            <Redirect from="/other-commands.html" to="/commands/other" />
            <Redirect from="/about.html" to="/about" />
            <Redirect from="/moderation-commands" to="/commands/mod" />
            <Redirect from="/music-commands" to="/commands/music" />
            <Redirect from="/fun-commands" to="/commands/fun" />
            <Redirect from="/other-commands" to="/commands/other" />

            {/* Error Routes */}
            <Route component={NotFound}></Route>
        </Switch>
    );
}

export default Main;