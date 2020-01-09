import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import {IMainNavigationItem} from '../../../../common/types';
import './nav-item.css';

const NavIconContainer = styled.div`
    cursor: pointer;  
    font-size: 0;
    height: 3rem;
    position: relative;
    width: 3rem;
    
    .hover-icon{
        background-color: var(--main-background-highlight-color);
        bottom: 0;
        content: '';
        left: 0;
        overflow: hidden;
        position: absolute;
        top: 0;
        transition: width .4s;
        width: 0%;
        
        svg {
            fill: var(--main-highlight-font-color);
        }
    }
    
    &:hover {   
        .hover-icon{
            transition: width .4s;
            width: 100%;
        }
    }
    
    svg {
        fill: var(--main-font-color);
        margin-top: 0.25rem;
        margin-left: 0.25rem;
        height: 2.5rem;
        width: 2.5rem;
    }
`;

interface Props {
    link: IMainNavigationItem;
}

const MainNavLink = ({link}: Props) => (
    <NavLink exact={link.exact} to={link.url} activeClassName={'active'}>
        <NavIconContainer title={link.title}>
            <link.icon />
            <NavIconContainer className="hover-icon">
                <link.icon />
            </NavIconContainer>
        </NavIconContainer>
    </NavLink>
);

export default MainNavLink;
