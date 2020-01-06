import React from 'react';
import { HashRouter } from 'react-router-dom';

import './app.css';

import Routes from '../routes';
import { Nav, Header } from '../common';

const App = () => {
    return (
        <>
            <HashRouter>
                <Nav/>
                <div className="app-container">
                    <Header />
                    <Routes/>
                </div>
            </HashRouter>
        </>
    );
};

export default App;
