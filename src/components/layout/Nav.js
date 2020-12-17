import React, {Fragment} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

const Nav = () => {
	return (
		<Fragment>
			<BrowserRouter>
				<nav className=" ui basic buttons">
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
				</nav>

			</BrowserRouter>
		</Fragment>
	)
}

export default Nav
