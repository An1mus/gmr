import { NavLink } from "react-router-dom";
import React from "react";

const Nav = () => {
    const mainLinks = [
        {
            id: 0,
            url: '/games',
            icon: '',
            title: 'Here are some games to play'
        }
    ];
	return (
		<>
			{mainLinks.map(link => (<NavLink key={link.id} to={link.url}>{link.title}</NavLink>))}
		</>
	);
};

export default Nav;
