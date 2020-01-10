import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home';
import Games from '../pages/games';
import About from '../pages/about';
import NotFound from '../notfound';

const AppContentContainer = styled.div`
    padding 1rem 2rem
`;

const Routes = () => {
    return (
        <AppContentContainer>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/games'} component={Games}/>
                <Route path={'/about'} component={About}/>
                <Route component={NotFound} />
            </Switch>
        </AppContentContainer>
    );
};

export default Routes;
