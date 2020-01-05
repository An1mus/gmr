import { NavLink } from "react-router-dom";
import React from "react";

const Nav = () => {
    const links = [
        {
            id: 0,
            url: '/ttt',
            icon: '',
            title: 'Tic Tac Toe'
        }
    ];
	return (
		<>
			{links.map(link => (<NavLink key={link.id} to={link.url}>{link.title}</NavLink>))}
		</>
	);
};

export default Nav;
