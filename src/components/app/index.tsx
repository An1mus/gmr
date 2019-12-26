import React from 'react';
import { HashRouter } from 'react-router-dom';

import './app.css';

import Routes from '../routes';

import history from '../../common/';

class App extends React.Component {
    render() {
        return (
            <>
                <h1>App is running</h1>
                <HashRouter>
                    <Routes/>
                </HashRouter>
            </>
        );
    }
};

export default App;
