import React, {Fragment} from 'react'
import Fields from '../Fields'
import StepTwo from './StepTwo'

const StepOne = (props) => {
	// console.log(props)
	const {currentStep, handleChange, data} = props;

		if (currentStep !== 1) {
		return null
	}

	const second = ()=> {
			if (data === 'no-field') {
		return (
			<StepTwo />
		)
	}
	}

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
			{second()}
			</form>
		</Fragment>
	)
}

export default StepOne
