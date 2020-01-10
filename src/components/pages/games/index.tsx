import React from 'react';
import styled from 'styled-components';
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';
import { GAME_LINKS, GAME_COMPONENTS } from './config/games';

const GameNav = styled.nav`
    display: flex;
    justify-content: start;
`;

const GameLink = styled.div`
    width: 2.5rem;

    svg {
        position: relative;
        transition: fill .3s;
        fill: var(--main-font-color);
    }
    .active,
    &:hover{
        svg {
            transition: fill .3s;
            fill: var(--main-highlight-font-color);
        }
    }
`;

const Games = () => {
    return (
        <>
            <h2>Here is some stuff to play</h2>
            <HashRouter>
                <GameNav>
                    {GAME_LINKS.map(link => (
                        <GameLink>
                            <NavLink key={link.id} to={`/games${link.path}`} activeClassName={'active'}>
                                    <link.icon/>
                            </NavLink>
                        </GameLink>
                    ))}
                </GameNav>
                <Switch>
                    {GAME_COMPONENTS.map(game => (<Route key={game.id} path={`/games${game.path}`} component={game.component}/>))}
                </Switch>
            </HashRouter>
        </>
    );
};

export default Games;
