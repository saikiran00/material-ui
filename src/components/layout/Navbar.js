import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return  (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<Link to="/" className="brand-logo">Dashboard</Link>
				<ul className="right">
					<li><Link to="/logout">Logout</Link></li>
					<li>Name</li>
				</ul>
			</div>
		</nav>
	)
}
export default Navbar;