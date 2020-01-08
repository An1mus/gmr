import React from 'react';
import { HashRouter } from 'react-router-dom';

import './app.css';

import Routes from '../routes';
import { Nav, Header } from '../common';

const App = () => {
    return (
        <div className={'app'}>
            <HashRouter>
                <Nav/>
                <div className="app-content-container">
                    <Header />
                    <Routes/>
                </div>
            </HashRouter>
        </div>
    );
};

export default App;
