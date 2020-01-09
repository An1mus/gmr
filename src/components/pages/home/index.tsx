import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.section`
    font-weight: 400;
`;

const Home = () => (
    <HomeContainer>
        <p>
            <b>
                GMR is a collection of games made with JS, which is under constant&nbsp;
                <a rel="noopener noreferrer" target='_blank' href='https://github.com/An1mus/gmr/commits/master'>development</a>
            </b>
        </p>
        <p>
            This app is meant to provide <a rel="noopener noreferrer" target='_blank' href="https://en.wikipedia.org/wiki/Fun">fun</a> and that is all.<br/>
            Free for all kinds of usage.<br/>
            Any <a rel="noopener noreferrer" target='_blank' href="https://github.com/An1mus/gmr">PRs</a> are welcome.
        </p>
    </HomeContainer>
);

export default Home;
