import React from 'react';
import { HashRouter } from 'react-router-dom';

import './app.css';

import Routes from '../routes';

class App extends React.Component {
    render() {
        return (
            <>
                <HashRouter>
                    <Routes/>
                </HashRouter>
            </>
        );
    }
};

export default App;
