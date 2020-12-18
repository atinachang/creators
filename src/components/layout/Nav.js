import React, {Fragment} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

const Nav = () => {
	const home = "/creators/"
	return (
		<Fragment>
			<BrowserRouter>
			<div className="ui  menu">
				<div className="header item">
					<Link to="/">Home</Link>
				</div>
				<div className="item">
					<a href="https://forms.gle/3SMaKm9yXKCApryq8"
					target="_blank"
					rel="noopener noreferrer">Submit</a>
				</div>
				<div className="item">
					
					<a href="https://forms.gle/Fxs8qfVFaaaTkSjz9"
					target="_blank"
					rel="noopener noreferrer">Report A Bug</a>
				</div>
				<div className="item">
					<a href="https://forms.gle/cxwnukT9gLJ4jmwp8"
					target="_blank"
					rel="noopener noreferrer">Make a Suggestion</a>
				</div>
			</div>
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

			</BrowserRouter>
		</Fragment>
	)
}

export default Nav
