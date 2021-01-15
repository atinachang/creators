import React, {Fragment} from 'react'
import {marketing, music, tech, film, photography, applied} from './reusable/arrays'
import {FieldInputs} from './reusable/renderedInputs'


const IndustriesRender = ({state, handleChangeField, 	handleCheckboxChange, handleChangeTitle})=> {
console.log(state)
	const {industry, field, title} = state;
// console.log(title)
	const fields = []

	industry.forEach(selected =>{
		if (selected === "Marketing") {
			fields.push(<FieldInputs 
				key={marketing}
				handleChangeTitle={handleChangeTitle}
				array={marketing}
				industry={industry}
			/>)
		}

		if (selected === "Music") {
			fields.push(<FieldInputs 
				key={music}
				handleChangeTitle={handleChangeTitle}
				array={music}
				industry={industry}
			/>)
		}

		if (selected === "Tech") {
			fields.push(<FieldInputs 
			key={tech}
			handleChangeTitle={handleChangeTitle}
			array={tech}
			industry={industry}
			/>)
		}

		if (selected === "Film Production") {
			fields.push(<FieldInputs 
			key={film}
			handleChangeTitle={handleChangeTitle}
			array={film}
			industry={industry}
			/>)
		}

		if (selected === "Photography") {
			fields.push(<FieldInputs 
			key={photography}
			handleChangeTitle={handleChangeTitle}
			array={photography}
			industry={industry}
			/>)
		}

		if (selected === "Applied Arts") {
			fields.push(<FieldInputs 
			key={applied}
			handleChangeTitle={handleChangeTitle}
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
			<div>
				{fields}
			</div>
		</Fragment>
	)
}

export default IndustriesRender