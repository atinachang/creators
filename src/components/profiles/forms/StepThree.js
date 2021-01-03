import React, {Fragment} from 'react'
import Genres from './Genres'
import Titles from './Titles'
import {film, design, tech, genres, photo, writing} from './arrays'

const  StepThree =(props)=>{
	// console.log(props);
	const {currentStep, handleChangeGenre, handleChangeTitle, genre, field, title, handleChecked} = props;
	const page =[]

	// console.log(handleChangeGenre)


 if (currentStep !== 3) {
    return null
	} 
	
	field.forEach(field => {
		if (field === "DJ" || field === "Vocal Artist" || field === "Sound Engineer" || field === "Music Producer") {
			page.push(<Genres 
				key={genre}
				handleChangeGenre={handleChangeGenre} 
				genre={genre} 
				field={field} 
				// array={genres}
				// checked={handleChecked}
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
				key={photo} 
				handleChangeTitle={handleChangeTitle} 
				title={title} 
				array={photo}
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
			{page}

    {/* <button className="ui button">Submit</button> */}
    </Fragment>
  );
}

export default StepThree
