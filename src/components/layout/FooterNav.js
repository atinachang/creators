import React, {Fragment} from 'react'

const FooterNav = () => {
	return (
		<Fragment>
			<ul className="footer">
				<li className="item">
				{/* <NavLink to="/report">Report A Bug</NavLink> */}
				<a href="https://airtable.com/shrNiOPS9tSgyBblF" target="_blank" rel="noreferrer"  >Report a Bug</a>
			</li>
			<li className="item">
				{/* <NavLink to="/suggestion">Make a Suggestion</NavLink> */}
				<a href="https://airtable.com/shrctqxUiGalpF6aj" target="_blank"rel="noreferrer"  >Make a Suggestion</a>
			</li>
		</ul>
		</Fragment>
	)
}

export default FooterNav
