import React from 'react';
import styled from 'styled-components';
import {NavLinks} from '../../../config';
import MainNavLink from './nav-item'

const MainNav = styled.nav`
    display: flex;
    flex-direction: column;
`;

const Nav = () => {
    return (
        <MainNav>
            {NavLinks.map(link => (<MainNavLink key={link.id} link={link}/>))}
        </MainNav>
    );
};

export default Nav;
