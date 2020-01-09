import React from 'react';
import { NavLink, Route, Router, Switch } from 'react-router-dom';
import history from '../../../common';
import { GAME_LINKS, GAME_COMPONENTS } from './config/games';

const Games = () => {
    return (
        <>
            <h1>Chose where to play?</h1>
            <Router history={history}>
                <nav>
                    {GAME_LINKS.map(link => (<NavLink key={link.id} to={`/games${link.path}`}>{link.title}</NavLink>))}
                </nav>
                <Switch>
                    {GAME_COMPONENTS.map(game => (<Route key={game.id} path={`/games${game.path}`} component={game.component}/>))}
                </Switch>
            </Router>
        </>
    );
};

export default Games;
