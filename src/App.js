import './App.css';
import './bootstrap.css'
import React from 'react';
import Main from './Main';
import Navbar from './Navbar';

function App() {
    return ( 
        <div className="Application" >
            <Navbar />
            <Main />
        </div>
    );
}

export default App;