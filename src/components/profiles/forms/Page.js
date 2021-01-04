import React, {Fragment} from 'react'
import {Fields} from './Fields'
import {fields, film, design, tech, genres, photog, writing} from './arrays'
import Genres from './Genres'
import Titles from './Titles'

const Page = ({state, handleChangeGenre, handleChangeTitle}) => {
		const { photo, field,  genre, title } = state;

	const page =[]

	field.forEach(field => {
		if (field === "DJ" || field === "Vocal Artist" || field === "Sound Engineer" || field === "Music Producer") {
			page.push(<Genres 
				key={genre}
				handleChangeGenre={handleChangeGenre}
				field={field}
				genre={genre}
				/>)
		}

		if (field === 'Film Production') {
			page.push(<Titles 
				key={film} 
				handleChangeTitle={handleChangeTitle} 
				array={film}
				field={field}
				title={title}
				/>)
		}

		if (field === 'Design') {
			page.push(<Titles 
				key={design} 
				handleChangeTitle={handleChangeTitle} 
				title={title} 
				array={design}
				field={field}
				title={title}
				/>)
		}

		if (field === 'Tech') {
			page.push(<Titles 
				key={tech} 
				handleChangeTitle={handleChangeTitle} 
				title={title} 
				array={tech}
				field={field}
			/>)
		}
		
		if (field === 'Photography') {
			page.push(<Titles 
				key={photog} 
				handleChangeTitle={handleChangeTitle} 
				title={title} 
				array={photog}
				field={field}
			/>)
		}

		if (field === 'Writing') {
			page.push(<Titles 
			key={writing}
			handleChangeTitle={handleChangeTitle}
			title={title}
			array={writing}
			field={field}
			/>)
		}
		else {
			return null
		}

	})


	return (
		<Fragment>
			{page}
		</Fragment>
	)
}

export default Page
