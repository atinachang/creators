import React, {Fragment} from 'react'
import {marketing, music, tech, applied, performer, filmarts} from './reusable/arrays'
import { add } from '../../helpers/helpers'


export const IndustriesRender = ({state, handleChangeField, 	handleCheckboxChange, handleChangeTitle, handleChangeGenre, handleStatesChange})=> {
	const { industry } = state;
	// console.log(industry)
	// const handleChange = e => {
	// 	e=>handleStatesChange('title')
	// }
	let fields = []

 industry.forEach(selected => {
		
	 if (selected === 'Marketing') {
			// show(marketing, handleChangeTitle)
			add(fields, selected, marketing, handleChangeTitle)
			
			// if (fields.includes('Marketing')) {

			// };
		}

		if (selected === "Music") {
			add(fields, selected, music, handleChangeTitle)
			// fields.push(<FieldInputs 
			// 	className={"checkbox-dark"}
			// 	key={music}
			// 	onChange={handleChangeTitle}
			// 	array={music}
			// 	industry={industry}
			// 	title={title}
			// />)
		}

		if (selected === "Tech") {
			add(fields, selected, tech, handleChangeTitle)
			// fields.push(<FieldInputs 
			// className={"checkbox-dark"}
			// key={tech}
			// onChange={handleChangeField}
			// array={tech}
			// industry={industry}
			// />)
		}

		if (selected === "Film & Media Arts") {
			add(fields, selected, filmarts, handleChangeTitle)
			// fields.push(<FieldInputs 
			// className={"checkbox-dark"}
			// key={filmarts}
			// onChange={handleChangeField}
			// array={filmarts}
			// industry={industry}
			// />)
		}

		if (selected === "Applied Arts") {
			add(fields, selected, applied, handleChangeTitle)
			// fields.push(<FieldInputs 
			// className={"checkbox-dark"}
			// 	key={applied}
			// onChange={handleChangeField}
			// array={applied}
			// industry={industry}
			// />)
		}

		if (selected === "Performing Arts") {
			add(fields, selected, performer, handleChangeTitle)
			// fields.push(
			// 	<FieldInputs
			// className={"checkbox-dark"}	
			// 	key={performer}
			// 		onChange={handleChangeField}
			// 		array={performer}
			// 		industry={industry}
			// 	/>
			// )
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
