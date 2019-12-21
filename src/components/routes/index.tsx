import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Games from '../games';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Games}/>
                <Route exact path={'/games'} component={Games}/>
            </Switch>
        </>
    );
};

export default Routes;
