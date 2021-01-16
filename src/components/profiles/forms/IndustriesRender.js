import React, {Fragment} from 'react'
import {marketing, music, tech, film, photography, applied} from './reusable/arrays'
import {FieldInputs} from './reusable/renderedInputs'


const IndustriesRender = ({state, handleChangeField, 	handleCheckboxChange, handleChangeTitle, handleChangeGenre})=> {
	const {industry, field, title, genre} = state;
	// console.log("field", field)
	const fields = []

	industry.forEach(selected =>{
		if (selected === "Marketing") {
			fields.push(<FieldInputs 
				key={marketing}
				onChange={handleChangeField}
				array={marketing}
				industry={industry}
				// field={field}
				// title={title}
			/>)
		}

		if (selected === "Music") {
			fields.push(<FieldInputs 
				key={music}
				onChange={handleChangeTitle}
				array={music}
				industry={industry}
				title={title}
			/>)
		}

		if (selected === "Tech") {
			fields.push(<FieldInputs 
			key={tech}
			onChange={handleChangeField}
			array={tech}
			industry={industry}
			/>)
		}

		if (selected === "Film Production") {
			fields.push(<FieldInputs 
			key={film}
			onChange={handleChangeField}
			array={film}
			industry={industry}
			/>)
		}

		if (selected === "Photography") {
			fields.push(<FieldInputs 
			key={photography}
			onChange={handleChangeField}
			array={photography}
			industry={industry}
			/>)
		}

		if (selected === "Applied Arts") {
			fields.push(<FieldInputs 
			key={applied}
			onChange={handleChangeField}
			array={applied}
			industry={industry}
			/>)
		}

		else {
			return null
		}

	})

	return (
		<Fragment>
				{fields}
		</Fragment>
	)
}

export default IndustriesRender