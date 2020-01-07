import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import {ReactComponent as GamesIcon} from '../../assets/nav/games.svg';
import React from "react";

const MainNav = styled.nav`
    display: flex;
    flex-direction: column;
`;

const NavIconContainer = styled.div`
    cursor: pointer;
    width: 3rem;
    height: auto;   
`;

const Nav = () => {
    const mainLinks = [
        {
            id: 0,
            url: '/games',
            icon: GamesIcon,
            title: 'Games'
        },
        {
            id: 1,
            url: '/about',
            icon: GamesIcon,
            title: 'About'
        }
    ];
    return (
        <MainNav>
            {mainLinks.map(link => (
                    <NavLink key={link.id} to={link.url}>
                        <NavIconContainer title={link.title}>
                            <link.icon />
                        </NavIconContainer>
                    </NavLink>
                )
            )}
        </MainNav>
    );
};

export default Nav;
