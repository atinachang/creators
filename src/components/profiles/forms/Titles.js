import React, {Fragment} from 'react'
import {Fields} from './Fields'
// import {film} from './arrays'

const Titles = (props) => {
	console.log(props)
	const {handleChangeTitle, array, title, field} = props;

	const mapped = array.map(item => {
		return (
				<Fields 
				key={item}
				type="checkbox" 
				label={item} 
				value={item} 
				id={item} 
				onChange={(e)=>handleChangeTitle(e)} 
				/>
		)
	})
	return (
		<Fragment>
			<h3>{field} - 
			What do you specialize in?
			</h3>
			<div className=" inputs">
				{mapped}

			</div>		
			</Fragment>
	)
}

export default Titles
