import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';

import './app.css';

import Routes from '../routes';

const App = () => {
    return (
        <>
            <HashRouter>
                <Routes/>
            </HashRouter>
        </>
    );
};

export default App;
