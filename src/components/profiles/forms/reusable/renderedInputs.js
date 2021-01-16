import {Inputs} from './Inputs'
import React, {Fragment} from 'react'
import {genres, marketing} from './arrays'

export  const GenreInputs = ({field, handleChangeGenre, genre, title}) => {
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
			<h3>{title} -
			What genres of music do you specialize in?
			</h3>
			<ul className="ks-cboxtags">
				{mapped}
		<li>
		{/* <label>other</label> */}
		<input
		className="ui input"
		type="input"
		placeholder="Other"
		id="field"
		onChange={handleChangeGenre}
		/>
		</li>
			</ul>

		</Fragment>
	)
}

export  const FieldInputs = ({handleChangeField, handleChangeTitle, onChange, array, field, industry, title})=> {
	// console.log("title", title)
	// console.log(array)

	const fieldsMap = array.map(item => {
		return (
			<Inputs 
			key={item}
			type="checkbox"
			label={item}
			value={item}
			id={item}
			onChange={onChange}
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
		onChange={onchange}
		/>
		</li>
		</ul>
		</Fragment>
	)

}


// export {FieldInputs, GenreInputs}