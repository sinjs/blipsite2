import './App.css';
import './bootstrap.css'
import React from 'react';
import Main from './Main';
import Navbar from './Navbar';
import Alerts from './Alerts';

function App() {
    return ( 
        <div className="Application" >
            <Navbar />
            <Alerts />
            <Main />
        </div>
    );
}

export default App;