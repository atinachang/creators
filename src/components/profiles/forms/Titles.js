import React, {Fragment} from 'react'
import {Fields} from './Fields'
// import {film} from './arrays'

const Titles = ({handleChangeTitle, array, title, field}) => {


	const mapped = array.map(item => {
		return (
				<Fields 
				key={item}
				type="checkbox" 
				label={item} 
				value={item} 
				id={item} 
				onChange={handleChangeTitle} 
				/>
		)
	})

	const split = title.join(', ')
	return (
		<Fragment>
			<h3>{field} - 
			What do you specialize in?
			</h3>
			<div className=" inputs">
				{mapped}
		<strong>You Selected: {split}</strong>
			</div>		
			</Fragment>
	)
}

export default Titles
