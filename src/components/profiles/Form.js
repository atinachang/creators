import React, {Fragment} from 'react'
import { parent } from './forms/reusable/arrays';
// import Page from './forms/Page'
// import {Inputs} from './forms/reusable/Inputs';
import IndustriesRender from './forms/IndustriesRender'
import {Genre, Title} from './forms/Renders'
import StepOne from './forms/StepOne'



const Form = ({state, validator, handleChangeImage, handleChange,  selectAllCheckboxes, handleChangeGenre, createCheckbox, handleChangeTitle, handleCheckboxChange, handleChangeField, handleChangePronoun}) => {

	// const {industry, field, title} = state;
	// console.log("industry", industry, "field", field, "title", title )

	const deselectAll = (e) => {
	selectAllCheckboxes(false);
	state.field = []
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
		{/* <div className="inputs"> */}
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
		/>
		<Genre state={state}
			handleChangeGenre={handleChangeGenre}
			/>
		<Title state={state}
		handleChangeTitle={handleChangeTitle}
		/>

			{/* <Page 
			state={state}
			handleChangeGenre={handleChangeGenre}
			createCheckbox={createCheckbox}
			handleChangeTitle={handleChangeTitle}
			handleCheckboxChange={handleCheckboxChange}
			handleChangeField={handleChangeField}
			deselectAll={deselectAll}
			/> */}
		</div>
		</Fragment>
	)
}

export default Form
