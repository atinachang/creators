import React, {Fragment} from 'react'
import {parent} from './forms/reusable/arrays'
// import Page from './forms/Page'
// import {Inputs} from './forms/reusable/Inputs';
import {IndustriesRender} from './forms/IndustriesRender'
import {Genre, Title} from './forms/Renders'
import StepOne from './forms/StepOne'
import PhotoUpload from './forms/PhotoUpload'

const Form = ({ state, validator, handleChange, selectAllCheckboxes, handleChangeGenre, createCheckbox, handleChangeTitle, handleCheckboxChange, handleChangeField, handleChangePronoun, handleChangeImage, handleStatesChange }) => {


	const deselectAll = (e) => {
	selectAllCheckboxes(false);
		state.field = []
		state.industry = []
		state.title = []
		e.preventDefault();
	e.stopPropagation();
	}

	const createFields = () => parent.map(createCheckbox)

	return (
		<Fragment>
			<h3>Let's get to know you!</h3>
			<h5>Submit yourself or a friend here</h5>
			<h4>Basic Info</h4>

		<StepOne 
		validator={validator}
		state={state}
		handleChangeImage={handleChangeImage}
		handleChange={handleChange}
		handleChangePronoun={handleChangePronoun}
		/>
		<h3>What do you do? </h3>
			<h4>
			Please select all that apply
		</h4>
			<ul className="ks-cboxtags">
				{createFields()}
			<input
			className="ui input"
			type="text"
			placeholder="Other"
			id="field"
			onChange={handleCheckboxChange}
			/>
			</ul>
		{/* </div> */}
			{/* <strong>You Selected: {split}</strong> */}

			<button className="ui button" onClick={(e)=>deselectAll(e)}>Clear Selection</button>
			<div className="page">
			<IndustriesRender state={state}
				handleChangeField={handleChangeField}
				handleCheckboxChange={handleCheckboxChange}
				handleChangeTitle={handleChangeTitle}
				handleStatesChange={handleStatesChange}
		/>
		<Genre state={state}
			handleChangeGenre={handleChangeGenre}
			/>
		<Title state={state}
		handleChangeTitle={handleChangeTitle}
				/>
				
		<PhotoUpload
			state={state}
		handleChangeImage={handleChangeImage}
		/>

		</div>
		</Fragment>
	)
}

export default Form
