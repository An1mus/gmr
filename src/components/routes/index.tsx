import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Games from '../games';
import TicTacToe from '../games/implementations/tictactoe';
import NotFound from '../notfound';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Games}/>
                <Route path={'/tic-tac-toe'} component={TicTacToe}/>
                <Route component={NotFound} />
            </Switch>
        </>
    );
};

export default Routes;
