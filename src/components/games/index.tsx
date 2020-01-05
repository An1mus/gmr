import React from 'react';

import { Link } from 'react-router-dom';

const Games = () => {
    const links = [
        {
            id: 0,
            url: '/tic-tac-toe',
            title: 'Tic Tac Toe'
        }
    ];
    return (
        <>
            <h2>Games available:</h2>

            {links.map(link => (<Link key={link.id} to={link.url}>{link.title}</Link>))}
        </>
    );
};

export default Games;
