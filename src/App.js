import './App.css';
import './bootstrap.css'
import React from 'react';
import Main from './Main';
import Navbar from './Navbar';
import Alerts from './Alerts';
import Footer from './Footer';

function App() {
    return ( 
        <div className="Application" >
            <Navbar />
            <Alerts />
            <Main />
            <Footer />
        </div>
    );
}

export default App;