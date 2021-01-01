import Fields from './Fields'
import React, {Fragment} from 'react'
// import {genres} from './arrays'
// import Input from './suggest/Input'

const Genres = (props) => {
	const {handleChangeGenre, genre, field, array} = props

	const mapped = array.map(item => {
		return (
			<Fields 
			key={item}
			type="checkbox" 
			label={item} 
			value={item} 
			id={item}
			onChange={handleChangeGenre} 
			/>
		)
	})
	return (
		<Fragment>
			<h3>{field} -
			What genres of music do you specialize in?
			</h3>
			<div className="inputs">
				{mapped}
				{/* <Input 
				type="text"
				name="Other"
				label="Other"
				/> */}

				{/* <Fields 
			label="Hip-Hop" 
			type="checkbox" 
			id="Hip-Hop" 
			value="Hip-Hop" 
			onChange={handleChangeGenre} 
			/>
		<Fields 
			type="checkbox" 
			label="R&B" 
			value="R&B" 
			id="R&B" 
			// name="R&B" 
			onChange={handleChangeGenre} 
			/> */}
			</div>

		</Fragment>
	)
}

export default Genres
