import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Games from '../games';
import NotFound from '../notfound';

const Routes = () => {
    return (
        <>
            <Switch>
                <Redirect exact path={'/'} to={'/games'}/>
                <Route exact path={'/games'} component={Games}/>
                <Route component={NotFound} />
            </Switch>
        </>
    );
};

export default Routes;
