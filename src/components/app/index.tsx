import React from 'react';
import { Router } from 'react-router';

import './app.css';

import Routes from '../routes';

import history from '../../common/';

class App extends React.Component {
    render() {
        return (
            <>
                <h1>App is running</h1>
                <Router history={history}>
                    <Routes/>
                </Router>
            </>
        );
    }
};

export default App;
