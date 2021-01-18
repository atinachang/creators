import React, {Fragment} from 'react'
import { genres, dev, design, techdesign, techmark, techcon, filmprod, writing, photography} from './reusable/arrays'
import {FieldInputs} from './reusable/renderedInputs'

export const Genre = ({state, handleChangeGenre}) => {
	const {title} = state;
	const genre = []

	
	title.forEach(selected => {
		if (title.includes("DJ")) {
			genre.push(
			<FieldInputs 
				className={"checkbox-light"}
				key={genres}
				onChange={handleChangeGenre}
				genre={genre}
				title={title}
				array={genres}
			/>)
		} 
				
		else {
			return null
		}


	})
	return (
		<Fragment>
			{genre}
		</Fragment>
	)
}

export const Title = ({state, handleChangeTitle, handleChangeField}) => {
	const {title, field} = state;
	const expertise =[]

		field.forEach(selected => {

			if (selected === "Web Development") {
				expertise.push(
					<FieldInputs 
					className={"checkbox-light"}
					key={dev}
					onChange={handleChangeTitle}
					title={title}
					array={dev}
					/>
					)
				}

		if (selected === "Graphic Designer") {
			expertise.push(
				<FieldInputs
					className={"checkbox-light"}
					key={design}
					onChange={handleChangeTitle}
					title={title}
					array={design}
				/>
			)
		}

		if (selected === "Design") {
			expertise.push(
				<FieldInputs
					className={"checkbox-light"}
				key={techdesign}
				onChange={handleChangeTitle}
				title={title}
				array={techdesign}
				/>
			)
		}

		if (selected === "Marketing") {
			expertise.push(
				<FieldInputs
					className={"checkbox-light"}
					key={techmark}
					onChange={handleChangeTitle}
					title={title}
					array={techmark}
				/>
			)
		}

		if (selected === "Content") {
			expertise.push(
				<FieldInputs
					className={"checkbox-light"}
					key={techcon}
					onChange={handleChangeTitle}
					title={title}
					array={techcon}
				/>
			)
		}

		if (selected === "Film Production") {
			expertise.push(
				<FieldInputs
					className={"checkbox-light"}
				key={filmprod}
				onChange={handleChangeTitle}
				title={title}
				array={filmprod}
				/>
			)
		}

		if (selected === "Writing") {
			expertise.push(
				<FieldInputs 
					className={"checkbox-light"}
					key={writing}
					onChange={handleChangeTitle}
					array={writing}
					title={title}
				/>
			)
		}

		if (selected === "Photography") {
			expertise.push(<FieldInputs 			
				className={"checkbox-light"}
			key={photography}
			onChange={handleChangeTitle}
			array={photography}
			field={field}
			/>)
		}

		else {
			return null
		}
			})

			// const text = field.join(', ')
			return (
				<Fragment>
					{/* <p>You Selected: {text}</p> */}
					{expertise}
				</Fragment>
			)
}