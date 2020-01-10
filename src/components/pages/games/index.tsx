import React from 'react';
import styled from 'styled-components';
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';
import { GAME_LINKS, GAME_COMPONENTS } from './config/games';

const GameNav = styled.nav`
    display: flex;
    justify-content: start;
    margin-bottom: 2rem;
`;

const GameLink = styled.div`
    width: 2.5rem;

    svg {
        border: 0.08rem solid var(--secondary-highlight-font-color);
        padding: 0.3rem;
        position: relative;
        transition: all .3s;
        fill: var(--main-font-color);
    }
    .active,
    &:hover{
        svg {
            border: 0.08rem solid var(--main-highlight-font-color);
            transition: all .3s;
            fill: var(--main-highlight-font-color);
        }
    }
`;

const Games = () => {
    return (
        <>
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
