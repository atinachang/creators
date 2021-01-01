import React, {Fragment} from 'react'
import Genres from './Genres'
import Titles from './Titles'
import {film, design, tech, genres, photo, writing} from './arrays'

const  StepThree =(props)=>{
	// console.log(props);
	const {currentStep, handleChangeGenre, handleChangeTitle, genre, field, title} = props;
	const page =[]


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
				/>)
		}

		if (field === 'Film Production') {
			page.push(<Titles 
				key={title} 
				handleChangeTitle={handleChangeTitle} 
				title={title} 
				array={film}/>)
		}

		if (field === 'Design') {
			page.push(<Titles 
				key={design} 
				handleChangeTitle={handleChangeTitle} 
				title={title} 
				array={design}/>)
		}

		if (field === 'Tech') {
			page.push(<Titles key={tech} handleChangeTitle={handleChangeTitle} title={title} array={tech}/>)
		}
		
		if (field === 'Photography') {
			page.push(<Titles key={photo} handleChangeTitle={handleChangeTitle} title={title} array={photo}/>)
		}

		if (field === 'Writing') {
			page.push(<Titles 
			key={writing}
			handleChangeTitle={handleChangeTitle}
			title={title}
			array={writing}
			/>)
		}
		else {
			return null
		}
	})

  return(
    <Fragment>
			{page}

    <button className="ui button">Submit</button>
    </Fragment>
  );
}

export default StepThree
