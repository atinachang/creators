import Fields from './Fields'
import React, {Fragment} from 'react'
import {genres} from './arrays'

const Genres = (props) => {
	console.log(props)
	const {handleChangeGenre} = props


	const mapped = genres.map(genre => {
		return (
			<Fields type="checkbox" label={genre} value={genre} onChange={handleChangeGenre} key={genre}/>
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
