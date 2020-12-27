import Fields from './Fields'
import React, {Fragment} from 'react'
import {genres} from './arrays'

const Genres = (props) => {
	console.log(props)
	const {handleChangeGenre, genre} = props


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
			<div className="fields">
				{mapped}
			</div>

		</Fragment>
	)
}

export default Genres
