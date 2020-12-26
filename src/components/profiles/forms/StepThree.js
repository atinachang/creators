import React, {Fragment} from 'react'
import Genres from './Genres'
import Titles from './Titles'
import {film, design, tech} from './arrays'

function StepThree(props){
	// console.log(props);
	const {currStep, handleChangeGenre, handleChangeTitle, genre, field, title} = props;
	const page =[]


 if (currStep !== 3) {
    return null
	} 
	
	field.forEach(field => {
		if (field === "DJ" || field === "Vocal Artist" || field === "Sound Engineer") {
			page.push(<Genres handleChangeGenre={handleChangeGenre} genre={genre} field={field} key={genre}/>)
		}

		if (field === 'Film') {
			page.push(<Titles key={field.id} handleChangeTitle={handleChangeTitle} title={title} array={film}/>)
		}

		if (field === 'Design') {
			page.push(<Titles key={field.id} handleChangeTitle={handleChangeTitle} title={title} array={design}/>)
		}

		if (field === 'Tech') {
			page.push(<Titles key={field.id} handleChangeTitle={handleChangeTitle} title={title} array={tech}/>)
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
