import {Fields} from './Fields'
import React, {Fragment} from 'react'
import {genres} from './arrays'
// import Input from './suggest/Input'

const Genres = (props) => {
	const {handleChangeGenre, genre, field, array, handleChecked} = props

	// console.log(handleChangeGenre)
	const mapped = genres.map(item => {
		return (
			<Fields 
			key={item} 
			type="checkbox" 
			label={item} 
			value={item} 
			id={item} 
			onChange={(e) =>handleChangeGenre(e)}/>
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
