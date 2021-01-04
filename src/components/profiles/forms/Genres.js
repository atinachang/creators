import {Fields} from './Fields'
import React, {Fragment} from 'react'
import {genres} from './arrays'

const Genres = ({field, handleChangeGenre, genre}) => {
	const mapped = genres.map(item => {
		return (
			<Fields 
			key={item} 
			type="checkbox" 
			label={item} 
			value={item} 
			id={item} 
			onChange={(e)=>handleChangeGenre(e)}/>
					)
	})

	const split = genre.join(', ')
	return (
		<Fragment>
			<h3>{field} -
			What genres of music do you specialize in?
			</h3>
			<div className="inputs">
				{mapped}
				<strong>You selected: {split}</strong>
			</div>

		</Fragment>
	)
}

export default Genres
