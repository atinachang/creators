import React, {Fragment} from 'react'
import {marketing, music, tech, applied, performer, filmarts} from './reusable/arrays'
import {add} from './reusable/helpers'


export const IndustriesRender = ({state, handleChangeField, 	handleCheckboxChange, handleChangeTitle, handleChangeGenre})=> {
	const {industry} = state;
	let fields = []

	industry.forEach(selected => {
		
		if (selected === 'Marketing') {
			add(fields, selected, marketing, handleChangeTitle)
			// if (fields.includes('Marketing')) {
			// 	fields.push(<FieldInputs 
			// 		className={"checkbox-dark"}
			// 		key={marketing}
			// 		onChange={handleChangeTitle}
			// 		array={marketing}
			// 		industry={industry}
			// 	/>)
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
	// console.log(fields)
	// console.log(industry)

	// const text = industry.join(', ')
	return (
		<Fragment>
			{/* <p>You Selected: {text}</p> */}
				{fields}
		</Fragment>
	)
}
