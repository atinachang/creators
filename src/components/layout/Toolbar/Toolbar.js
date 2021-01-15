import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom';


const Toolbar = (props) => {
	return (
		<header className="toolbar">
			<nav className="toolbar-nav">
				<div>

				</div>
				<div className="toolbar-logo"> 
					<NavLink to="/"><h4>wecreate.to</h4></NavLink>
				</div>
				<div  className="toolbar-items">
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>

					<li >
						<NavLink to="/create">Submit</NavLink>
					</li>

					<li>
						<NavLink to="/faq">About</NavLink>
					</li>
							</ul>
				</div>
			</nav>
		</header>
	)
}

export default Toolbar
