import {Fields} from './Fields'
import React, {Fragment} from 'react'
import {genres} from './arrays'

const Genres = (props) => {
	const {handleChangeGenre,  field } = props

	const mapped = genres.map(item => {
		return (
			<Fields 
			key={item} 
			type="checkbox" 
			label={item} 
			value={item} 
			id={item} 
			onChange={handleChangeGenre}/>
					)
	})
	return (
		<Fragment>
			<h3>{field} -
			What genres of music do you specialize in?
			</h3>
			<div className="inputs">
				{mapped}
			</div>

		</Fragment>
	)
}

export default Genres
