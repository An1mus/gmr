import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home';
import Games from '../pages/games';
import About from '../pages/about';
import NotFound from '../notfound';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/games'} component={Games}/>
                <Route path={'/about'} component={About}/>
                <Route component={NotFound} />
            </Switch>
        </>
    );
};

export default Routes;
