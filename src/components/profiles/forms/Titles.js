import React, {Fragment} from 'react'
import Fields from './Fields'
// import {film} from './arrays'

const Titles = (props) => {
	console.log(props)
	const {handleChangeTitle, title, array} = props;

	const mapped = array.map(title => {
		return (
			<Fields type="checkbox" label={title} value={title} id="title" onChange={handleChangeTitle} key={title}/>
		)
	})
	return (
		<Fragment>
			<h3>
			What do you specialize in?
			</h3>
			<div className=" fields">
				{mapped}

			</div>		
			</Fragment>
	)
}

export default Titles
