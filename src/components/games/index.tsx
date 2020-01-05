import React from 'react';
import { NavLink, Route, Router, Switch } from 'react-router-dom';
import history from '../../common';
import { GAME_LINKS, GAME_COMPONENTS } from './config/games';

import TicTacToe from './implementations/tictactoe';

const Games = () => {
    return (
        <>
            <h1>Chose where to play?</h1>
            <Router history={history}>
                <nav>
                    {GAME_LINKS.map(link => (<NavLink to={`/games${link.path}`}>{link.title}</NavLink>))}
                </nav>
                <Switch>
                    <Route path={`/games/ttt`} component={TicTacToe}/>
                    {GAME_COMPONENTS.map(game => (<Route path={`/games${game.path}`} component={game.component}/>))}
                </Switch>
            </Router>
        </>
    );
};

export default Games;
