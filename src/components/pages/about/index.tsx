import React from 'react';
import styled from 'styled-components';

const LinksList = styled.ul`
    list-style: none;
`;

const About = () => (
    <>
        <h2>A few related links here</h2>
        <LinksList>
            <li>
                <a target='_blank' href="https://github.com/An1mus/gmr">Repo link is here</a>
            </li>
            <li>
                <a target='_blank' href="https://github.com/An1mus">Git acc</a>
            </li>
            <li>
                <a target='_blank' href="https://github.com/An1mus/merntodo">Quite nice front-end based To-Do list</a>
            </li>
            <li>
                <a target='_blank' href="https://github.com/An1mus/topcoin">Crypto monitoring app that is nice to look at</a>
            </li>
        </LinksList>
    </>
);

export default About;
