import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Games from '../games';
import TicTacToe from '../games/implementations/tictactoe';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Games}/>
                <Route exact path={'/games'} component={Games}/>
                <Route exact path={'/tic-tac-toe'} component={TicTacToe}/>
            </Switch>
        </>
    );
};

export default Routes;
