import React, {Fragment} from 'react'
import { genres, dev, fields} from './reusable/arrays'
import {GenreInputs, FieldInputs} from './reusable/renderedInputs'

const Skills = ({state, handleChangeGenre, handleChangeTitle}) => {
	const {title, field} = state;
	console.log(state)
	// console.log("title", title)
	const expertise = []

	
	title.forEach(selected => {
		if (selected === "DJ" || selected === "Vocal Artist" || selected === "Producer" || selected === "Sound Engineer") {
			expertise.push(
			<FieldInputs 
				key={genres}
				onChange={handleChangeGenre}
				genre={genres}
				title={title}
				array={genres}
			/>)
		} 
				
		else {
			return null
		}

		field.forEach(selected => {

			if (selected === "Web Developement") {
				expertise.push(
					<FieldInputs 
					key={dev}
					onChange={handleChangeTitle}
					title={title}
					array={dev}
					/>
					)
				}
			})


	})
	return (
		<Fragment>
			{expertise}
		</Fragment>
	)
}

export default Skills
