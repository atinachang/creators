import React, {Fragment} from 'react'
import Genres from './Genres'
import Titles from './Titles'
import {film, design, tech} from './arrays'

function StepThree(props){
	// console.log(props);
	const {currentStep, handleChangeGenre, handleChangeTitle, genre, field, title} = props;
	const page =[]


 if (currentStep !== 3) {
    return null
	} 


	
	field.forEach(field => {
		if (field === "DJ" || field === "Vocal Artist" || field === "Sound Engineer") {
			page.push(<Genres handleChangeGenre={handleChangeGenre} genre={genre} field={field} key={field}/>)
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

	// }
  return(
    <Fragment>
			{page}
    {/* <div className="form-group">
      <label htmlFor="password">Password</label>
      <input
        className="form-control"
        id="password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={props.password}
        onChange={props.handleChange}
        />      
    </div> */}
    <button className="ui button">Submit</button>
    </Fragment>
  );
}

export default StepThree
