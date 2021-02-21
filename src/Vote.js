import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function Vote() {
    return (
        <div className="Vote">
            <Container className="text-center my-5">
                <h1>Vote for Blip</h1>
                <p style={{fontSize: 20 + 'px'}} className="text-muted lead">If you want to support Blip, upvote it on (one of) the following Botlists!</p>
                <Container className="mt-4 CommandCategoies">
                    <Button href="/vote/topgg" className="mx-1 my-1 CommandCategory" size="lg" variant="primary">Top.gg</Button>
                    <Button href="/vote/dbl" className="mx-1 my-1 CommandCategory" size="lg" variant="primary">DBL</Button>
                    <Button href="/vote/bfd" className="mx-1 my-1 CommandCategory" size="lg" variant="primary">BotsForDiscord</Button>
                    <Button href="/vote/dboa" className="mx-1 my-1 CommandCategory" size="lg" variant="primary">Discord Boats</Button>
                </Container>
                <Container className="mt-2 CommandCategoies">
                    <Button href="/vote/botrix" className="mx-1 my-1 CommandCategory" size="lg" variant="primary">Botrix</Button>
                    <Button href="/vote/dlabs" className="mx-1 my-1 CommandCategory" size="lg" variant="primary">DiscordLabs</Button>
                    <Button href="/vote/paradise" className="mx-1 my-1 CommandCategory" size="lg" variant="primary">Paradise</Button>
                    <Button href="/vote/infbl" className="mx-1 my-1 CommandCategory" size="lg" variant="primary">InfinityBotList</Button>
                </Container>
            </Container>
        </div>
    );
}

export default Vote;