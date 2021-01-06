import React, {Fragment} from 'react'
import { fields } from './forms/arrays';
import Page from './forms/Page'
import StepOne from './forms/StepOne'



const Form = ({state, validator, handleChangeImage, handleChange,  selectAllCheckboxes, handleChangeGenre, createCheckbox, handleChangeTitle}) => {


	const deselectAll = () => {
	selectAllCheckboxes(false);
	state.field = []
	}

	const createFields = () => fields.map(createCheckbox)

	const split = state.field.join(', ')

	return (
		<Fragment>
			<h2>Let's get to know you!</h2>
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
		</div>
			<strong>You Selected: {split}</strong>

			<button className="ui button" onClick={deselectAll}>Clear Selection</button>
		<div className="page">
			<Page 
			state={state}
			handleChangeGenre={handleChangeGenre}
			createCheckbox={createCheckbox}
			handleChangeTitle={handleChangeTitle}
			/>
		</div>
		</Fragment>
	)
}

export default Form
