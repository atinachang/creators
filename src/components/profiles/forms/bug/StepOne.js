import React, {Fragment} from 'react'
import Fields from '../Fields'

const StepOne = (props) => {
	console.log(props)
	const {currentStep, handleChange, data} = props;
	return (
		<Fragment>
			<form>
				<h3>What's Your Suggestion?</h3>
				<Fields 
				type="radio"
				label="My field is missing!"
				name={data}
				value="no-field"
				id={data}
				onChange={(e)=>handleChange(e)}
				/>
				<Fields 
				type="radio"
				label="Other"
				name={data}
				value="other"
				id={data}
				onChange={(e)=>handleChange(e)}
				/>
			</form>
		</Fragment>
	)
}

export default StepOne
