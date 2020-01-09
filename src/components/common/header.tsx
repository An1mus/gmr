import React from "react";
import styled from 'styled-components';

const HeaderContainer = styled.header`
    padding: 1rem 2rem;
    
    h1 {
        margin: 0;
    }
`;

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <h1>GMR</h1>
            </HeaderContainer>
        </>
    );
};

export default Header;
