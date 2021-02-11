import React, {Fragment} from 'react'
import { genres, dev, design, techdesign, techmark, techcon, filmprod, writing, photography} from './reusable/arrays'
import {add} from '../../helpers/helpers'

export const Genre = ({state, handleChangeGenre}) => {
	const { title } = state;
	const genre = []

	title.forEach(selected => {
		if (selected.includes("DJ") || selected.includes("Vocal Artist") || selected === "Producer") {
			add(genre, selected, genres, handleChangeGenre)
			// genre.push(
			// <FieldInputs 
			// 	className={"checkbox-light"}
			// 	key={genres}
			// 	onChange={handleChangeGenre}
			// 	genre={genre}
			// 	title={title}
			// 	array={genres}
			// />)
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
	const { title} = state;
	const expertise =[]

		title.forEach(selected => {
			if (selected === "Web Development") {
				add(expertise, selected, dev, handleChangeTitle)
				// expertise.push(
				// 	<FieldInputs 
				// 	className={"checkbox-light"}
				// 	key={dev}
				// 	onChange={handleChangeTitle}
				// 	title={title}
				// 	array={dev}
				// 	/>
				// 	)
				}

			if (selected === "Graphic Designer") {
			add(expertise, selected, design, handleChangeTitle)
			// expertise.push(
			// 	<FieldInputs
			// 		className={"checkbox-light"}
			// 		key={design}
			// 		onChange={handleChangeTitle}
			// 		title={title}
			// 		array={design}
			// 	/>
			// )
		}

			if (selected === "Design") {
			add(expertise, selected, techdesign, handleChangeTitle)
			// expertise.push(
			// 	<FieldInputs
			// 		className={"checkbox-light"}
			// 	key={techdesign}
			// 	onChange={handleChangeTitle}
			// 	title={title}
			// 	array={techdesign}
			// 	/>
			// )
		}

			if (selected === "Marketing") {
			add(expertise, selected, techmark, handleChangeTitle)
			// expertise.push(
			// 	<FieldInputs
			// 		className={"checkbox-light"}
			// 		key={techmark}
			// 		onChange={handleChangeTitle}
			// 		title={title}
			// 		array={techmark}
			// 	/>
			// )
		}

			if (selected === "Content") {
			add(expertise, selected, techcon, handleChangeTitle)
			// expertise.push(
			// 	<FieldInputs
			// 		className={"checkbox-light"}
			// 		key={techcon}
			// 		onChange={handleChangeTitle}
			// 		title={title}
			// 		array={techcon}
			// 	/>
			// )
		}

			if (selected === "Film Production") {
			add(expertise, selected, filmprod, handleChangeTitle)
			// expertise.push(
			// 	<FieldInputs
			// 		className={"checkbox-light"}
			// 	key={filmprod}
			// 	onChange={handleChangeTitle}
			// 	title={title}
			// 	array={filmprod}
			// 	/>
			// )
		}

			if (selected === "Writing") {
			add(expertise, selected, writing, handleChangeTitle)
			// expertise.push(
			// 	<FieldInputs 
			// 		className={"checkbox-light"}
			// 		key={writing}
			// 		onChange={handleChangeTitle}
			// 		array={writing}
			// 		title={title}
			// 	/>
			// )
		}

			if (selected === "Photography") {
			add(expertise, selected, photography, handleChangeTitle)
			// expertise.push(<FieldInputs 			
			// 	className={"checkbox-light"}
			// key={photography}
			// onChange={handleChangeTitle}
			// array={photography}
			// field={field}
			// />)
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