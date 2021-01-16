import {Inputs} from './Inputs'
import React, {Fragment} from 'react'
import {genres} from './arrays'

export  const GenreInputs = ({handleChangeGenre, title}) => {
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

	// const split = genre.join(', ')
	return (
		<Fragment>
			<h3>{title} -
			What genres of music do you specialize in?
			</h3>
			<ul className="ks-cboxtags">
				{mapped}
		{/* <li> */}
		{/* <label>other</label> */}
		{/* <input
		className="ui input"
		type="input"
		placeholder="Other"
		id="field"
		onChange={handleChangeGenre}
		/>
		</li> */}
			</ul>

		</Fragment>
	)
}

export  const FieldInputs = ({  onChange, array, className})=> {

	const fieldsMap = array.map(item => {
		return (
			<Inputs 
			className={className}
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
		{/* <li>
		<input
		className="ui input"
		type="text"
		placeholder="Other"
		id={title}
		value={title}
		onChange={handleChangeTitle}
		/>
		</li> */}
		</ul>
		</Fragment>
	)

}


// export {FieldInputs, GenreInputs}