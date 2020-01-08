import React from 'react';
import styled from 'styled-components';
import {ReactComponent as GamesIcon} from '../../../assets/nav/games.svg';
import {ReactComponent as AboutIcon} from '../../../assets/nav/about.svg';
import {ReactComponent as HomeIcon} from '../../../assets/nav/home.svg';
import MainNavLink from './nav-item';

const MainNav = styled.nav`
    display: flex;
    flex-direction: column;
`;

const Nav = () => {
    const mainLinks = [
        {
            id: 0,
            url: '/',
            icon: HomeIcon,
            title: 'Home'
        },
        {
            id: 1,
            url: '/games',
            icon: GamesIcon,
            title: 'Games'
        },
        {
            id: 2,
            url: '/about',
            icon: AboutIcon,
            title: 'About'
        }
    ];
    return (
        <MainNav>
            {mainLinks.map(link => (<MainNavLink  key={link.id} link={link} />))}
        </MainNav>
    );
};

export default Nav;
