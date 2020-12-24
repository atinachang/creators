import React, {Fragment} from 'react'
import Genres from './Genres'
import Titles from './Titles'
import {film} from './arrays'

function StepThree(props){
	// console.log(props);
	const {currentStep, handleChangeGenre, handleChangeTitle, genre, field, title} = props;
	const page =[]


 if (currentStep !== 3) {
    return null
	} 


	
	field.forEach(field => {
		if (field === "DJ") {
			page.push(<Genres handleChangeGenre={handleChangeGenre} genre={genre} field={field} key={field}/>)
		}

		if (field === 'Film') {
			page.push(<Titles key={field.id} handleChangeTitle={handleChangeTitle} title={title} key={field} film={film}/>)
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
    <button className="ui button">Sign up</button>
    </Fragment>
  );
}

export default StepThree
