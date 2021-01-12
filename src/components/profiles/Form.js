import React, {Fragment} from 'react'
import { fields } from './forms/arrays';
import Page from './forms/Page'
import StepOne from './forms/StepOne'



const Form = ({state, validator, handleChangeImage, handleChange,  selectAllCheckboxes, handleChangeGenre, createCheckbox, handleChangeTitle, handleCheckboxChange}) => {


	const deselectAll = (e) => {
	selectAllCheckboxes(false);
	state.field = []
		e.preventDefault();
	e.stopPropagation();

	}

	const createFields = () => fields.map(createCheckbox)


	return (
		<Fragment>
			<h2>Let's get to know you!</h2>
			<h5>Submit yourself or a friend here</h5>
			<h3>Basic Info</h3>

<StepOne 
validator={validator}
state={state}
handleChangeImage={handleChangeImage}
handleChange={handleChange}
/>
		<h2>What do you do? </h2>
			<h4>
			Please select all that apply
		</h4>
		<div className="inputs">
			{createFields()}
			<input 
			className="ui input"
			type="text"
			placeholder="Other"
			id="field"
			onChange={handleCheckboxChange}
			/>
		</div>
			{/* <strong>You Selected: {split}</strong> */}

			<button className="ui button" onClick={(e)=>deselectAll(e)}>Clear Selection</button>
		<div className="page">
			<Page 
			state={state}
			handleChangeGenre={handleChangeGenre}
			createCheckbox={createCheckbox}
			handleChangeTitle={handleChangeTitle}
			handleCheckboxChange={handleCheckboxChange}
			deselectAll={deselectAll}
			/>
		</div>
		</Fragment>
	)
}

export default Form
