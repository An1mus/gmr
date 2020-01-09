import React from 'react';
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';
import { GAME_LINKS, GAME_COMPONENTS } from './config/games';

const Games = () => {
    return (
        <>
            <HashRouter>
                <nav>
                    {GAME_LINKS.map(link => (<NavLink key={link.id} to={`/games${link.path}`}>{link.title}</NavLink>))}
                </nav>
                <Switch>
                    {GAME_COMPONENTS.map(game => (<Route key={game.id} path={`/games${game.path}`} component={game.component}/>))}
                </Switch>
            </HashRouter>
        </>
    );
};

export default Games;
