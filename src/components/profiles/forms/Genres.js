import Fields from './Fields'
import React, {Fragment} from 'react'
import {genres} from './arrays'
import Input from './suggest/Input'

const Genres = (props) => {
	console.log(props)
	const {handleChangeGenre, genre} = props
	// console.log(handleChangeGenre)

	const mapped = genres.map(item => {
		return (
			<Fields 
			key={item}
			type="checkbox" 
			label={item} 
			value={item} 
			id={item}
			onChange={(e)=>handleChangeGenre(e)} 
			/>
		)
	})
	return (
		<Fragment>
			<h3>
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
