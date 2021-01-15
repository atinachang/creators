import {Inputs} from './Inputs'
import React, {Fragment} from 'react'
import {genres, marketing} from './arrays'

 const GenreInputs = ({field, handleChangeGenre, genre, industry}) => {
	const mapped = genres.map(item => {
		return (
			<Inputs 
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
				{/* <strong>You selected: {split}</strong> */}
			</div>

		</Fragment>
	)
}

 const FieldInputs = ({handleChangeField, handleChangeTitle, array, field, industry})=> {
	 console.log(array, field, industry)

	const fieldsMap = array.map(item => {
		return (
			<Inputs 
			key={item}
			type="checkbox"
			label={item}
			id={item}
			onChange={handleChangeField}
			/>
		)
	})

	return (
		<Fragment>
			<ul className="ks-cboxtags">
		{fieldsMap}
		<li>
		{/* <label>other</label> */}
		<input
		className="ui input"
		type="input"
		placeholder="Other"
		id="field"
		onChange={handleChangeField}
		/>
		</li>
		</ul>
		</Fragment>
	)

}


export {FieldInputs, GenreInputs}