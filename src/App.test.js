import { render, screen } from '@testing-library/react';
import App from './App';
import Commands from './Commands';
import Navbar from './Navbar';
import ModCommands from './Modcommands';
import FunCommands from './Funcommands';
import MusicCommands from './Musiccommands';
import RadioCommands from './Radiocommands';
import CommandEntry from './components/Commandentry';
import { BrowserRouter } from 'react-router-dom';

function __testnull__() {
  return null;
}


test('renders navigation', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Blip Bot/i);
  expect(linkElement).toBeInTheDocument();
});

test('is __testnull__ null', () => {
  expect(__testnull__()).toBeNull();
});

test('is the navbar rendering', () => {
  render(
    <Navbar />
  );
  const NavbarElem = screen.queryByText(/home/i)
  expect(NavbarElem).not.toBeNull();
});

test('is the navbar rendering 2', () => {
  render(
    <Navbar />
  );
  const NavbarElem2 = screen.queryByText(/invite now/i)
  expect(NavbarElem2).not.toBeNull();
});

test('are the commands rendering', () => {
  render(
    <Commands />
  );
  const CommandsElem = screen.queryByText(/blip commands/i)
  expect(CommandsElem).not.toBeNull();
});

test('are the mod commands rendering', () => {
  render(
    <ModCommands />
  );
  const MCommandsElem = screen.queryByText(/kicks the mentioned user from the server/i)
  expect(MCommandsElem).not.toBeNull();
});

test('are the fun commands rendering', () => {
  render(
    <FunCommands />
  );
  const FCommandsElem = screen.queryByText(/displays a random meme from reddit/i)
  expect(FCommandsElem).not.toBeNull();
});

test('are the music commands rendering', () => {
  render(
    <MusicCommands />
  );
  const MUCommandsElem = screen.queryByText(/leaves the current channel/i)
  expect(MUCommandsElem).not.toBeNull();
});

test('are the radio commands rendering', () => {
  render(
    <RadioCommands />
  );
  const RCommandsElem = screen.queryByText(/Shows currently playing radio/i)
  expect(RCommandsElem).not.toBeNull();
}); 

test('is the command entry rendering', () => {
  render(
    <CommandEntry command="!test" desc="testing stuff" usage="{arg1} <arg2>" />
  );
  const CommandElem = screen.queryByText(/testing stuff/i)
  expect(CommandElem).not.toBeNull();
});


