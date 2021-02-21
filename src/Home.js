import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <>
            <Jumbotron className="bg-dark text-light m-0" style={{borderRadius: 0}}>
                <h1>
                    Blip Discord Bot
                </h1>
                <p className="text-muted">The only Discord Bot you'll ever need.</p>
            </Jumbotron>
            <Jumbotron className="bg-light text-dark m-0" style={{borderRadius: 0}}>
                <h1 className="my-0">Features</h1>
                <span className="d-block text-muted" style={{fontSize: '20px'}}>Blip is full of features, here are some examples:</span>
                <span className="d-block" style={{fontSize: '18px'}}>- Moderation</span>
                <span className="d-block" style={{fontSize: '18px'}}>- Music System (100% Free)</span>
                <span className="d-block" style={{fontSize: '18px'}}>- Radio System</span>
                <span className="d-block" style={{fontSize: '18px'}}>- Fun Commands like b!meme</span>
                <span className="d-block" style={{fontSize: '18px'}}>- Leveling</span>
            </Jumbotron>
            <Jumbotron className="bg-success text-light m-0" style={{borderRadius: 0}}>
                <h1 className="my-0">Invite Blip to your server!</h1>
                <span className="d-block text-grey lead">What are you waiting for? Invite Blip now to start building better Discord Servers!</span> 
                <Button target="_blank" href="//invite.blip-bot.cf" className="mt-3" variant="outline-light">Invite now!</Button>
            </Jumbotron>       
            <Jumbotron className="bg-light text-dark m-0" style={{borderRadius: 0}}>
                <h1 className="my-0">Join the official Discord Server</h1>
                <span className="d-block text-grey lead">Do you need help with something? Do you want to make some friends? Join the official Blip Discord Server!</span> 
                <Button target="_blank" href="//discord.blip-bot.cf" className="mt-3" variant="outline-dark">Join</Button>
            </Jumbotron>       
        </>
        
    );
}

export default Home;