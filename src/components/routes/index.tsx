import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Games from '../games';
import NotFound from '../notfound';
import Home from '../home';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/games'} component={Games}/>
                <Route component={NotFound} />
            </Switch>
        </>
    );
};

export default Routes;
