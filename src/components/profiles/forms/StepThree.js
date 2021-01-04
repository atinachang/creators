import React, {Fragment} from 'react'
import Genres from './Genres'
import Titles from './Titles'
import {film, design, tech, genres, photog, writing} from './arrays'

const  StepThree =(props)=>{
	const {handleChangeGenre, handleChangeTitle, genre, field, title} = props;
	const page =[]

	
	field.forEach(field => {
		if (field === "DJ" || field === "Vocal Artist" || field === "Sound Engineer" || field === "Music Producer") {
			page.push(<Genres 
				key={genre}
				handleChangeGenre={handleChangeGenre} 
				genre={genre} 
				field={field} 
				/>)
		}

		if (field === 'Film Production') {
			page.push(<Titles 
				key={film} 
				handleChangeTitle={handleChangeTitle} 
				title={title} 
				array={film}
				field={field}
				/>)
		}

		if (field === 'Design') {
			page.push(<Titles 
				key={design} 
				handleChangeTitle={handleChangeTitle} 
				title={title} 
				array={design}
				field={field}
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

  return(
    <Fragment>
			{/* {validator.message('field', field, 'required|accepted')} */}

			{page}

    {/* <button className="ui button">Submit</button> */}
    </Fragment>
  );
}

export default StepThree
