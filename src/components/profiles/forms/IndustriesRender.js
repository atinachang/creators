import React, {Fragment} from 'react'
import {marketing, music, tech, applied, performer, filmarts} from './reusable/arrays'
import {FieldInputs} from './reusable/renderedInputs'


const IndustriesRender = ({state, handleChangeField, 	handleCheckboxChange, handleChangeTitle, handleChangeGenre})=> {
	const {industry, title} = state;
	const fields = []

	industry.forEach(selected =>{
		if (selected === "Marketing") {
			fields.push(<FieldInputs 
				key={marketing}
				onChange={handleChangeTitle}
				array={marketing}
				industry={industry}
				// field={field}
				// title={title}
			/>)
		}

		if (selected === "Music") {
			fields.push(<FieldInputs 
				className={"checkbox-dark"}
				key={music}
				onChange={handleChangeTitle}
				array={music}
				industry={industry}
				title={title}
			/>)
		}

		if (selected === "Tech") {
			fields.push(<FieldInputs 
			className={"checkbox-dark"}
			key={tech}
			onChange={handleChangeField}
			array={tech}
			industry={industry}
			/>)
		}

		if (selected === "Film & Media Arts") {
			fields.push(<FieldInputs 
			className={"checkbox-dark"}
			key={filmarts}
			onChange={handleChangeField}
			array={filmarts}
			industry={industry}
			/>)
		}



		if (selected === "Applied Arts") {
			fields.push(<FieldInputs 
			className={"checkbox-dark"}
				key={applied}
			onChange={handleChangeField}
			array={applied}
			industry={industry}
			/>)
		}

		if (selected === "Performing Arts") {
			fields.push(
				<FieldInputs
			className={"checkbox-dark"}	
				key={performer}
					onChange={handleChangeField}
					array={performer}
					industry={industry}
				/>
			)
		}


		else {
			return null
		}

	})

	// const text = industry.join(', ')
	return (
		<Fragment>
			{/* <p>You Selected: {text}</p> */}
				{fields}
		</Fragment>
	)
}

export default IndustriesRender