import React, {Fragment} from 'react';
import {BrowserRouter, NavLink} from 'react-router-dom';

const Nav = () => {
	const home = "/creators/"
	return (
		<Fragment>
			<ul className="ui  menu">
				<li className="header item">
					<NavLink to="/">Home</NavLink>
				</li>
				{/* <li className="item">
					<a href="https://forms.gle/3SMaKm9yXKCApryq8"
					target="_blank"
					rel="noopener noreferrer">Submit</a>
				</li> */}
				<li className="item">
					<NavLink to="/create">Submit</NavLink>
				</li>

				<li className="item">
					<NavLink to="https://forms.gle/Fxs8qfVFaaaTkSjz9"
					target="_blank"
					rel="noopener noreferrer">Report A Bug</NavLink>
				</li>
				<li className="item">
					<NavLink to="https://forms.gle/cxwnukT9gLJ4jmwp8"
					target="_blank"
					rel="noopener noreferrer">Make a Suggestion</NavLink>
				</li>
			</ul>
				{/* <nav className=" ui basic buttons">
					<button className="medium ui inverted button">
					<Link to="/freelance-me">Home</Link>
					</button>

					<button className="medium ui inverted button">
					<a
					href="https://forms.gle/3SMaKm9yXKCApryq8"
					target="_blank"
					rel="noopener noreferrer"
					>
					Submit
					</a>
					</button>
				</nav> */}

		</Fragment>
	)
}

export default Nav
