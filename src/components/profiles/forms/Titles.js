import React, {Fragment} from 'react'
import Fields from './Fields'
// import {film} from './arrays'

const Titles = (props) => {
	console.log(props)
	const {handleChangeTitle, array} = props;

	const mapped = array.map(title => {
		return (
				<Fields 
				key={title}
				type="checkbox" 
				label={title} 
				value={title} 
				id={title} 
				onChange={handleChangeTitle} 
				/>
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
