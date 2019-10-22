import React from 'react';
import { NavLink} from 'react-router-dom';

const SignedLink = () => {
	return  (
		<ul className="right">
			<li><NavLink to="/">Logout</NavLink></li>
			<li><NavLink to="/">Name</NavLink></li>
		</ul>
	)
}
export default SignedLink;