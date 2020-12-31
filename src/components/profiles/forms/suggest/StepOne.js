import React, {Fragment} from 'react'
import StepTwo from './StepTwo'
import Input from './Input'
import Fields from '../Fields'

const StepOne = (props) => {
	console.log(props)
	const {currentStep, handleChange, data, missing, other} = props;

		if (currentStep !== 1) {
		return null
	}

	const nofield = ()=> {
			if (data === 'no-field') {
		return (
			<Input label={missing} name="What are we missing?" id={missing} value={missing} onChange={(e)=>handleChange(e)}/>
		)
	}
	}

	const otherfield =() => {
		if (data === 'other') {
			return (
				<Input 
					type="textarea"
					label={other}
					name="Let us know!"
					id={other}
					value={other}
				/>
			)
		}
	}

	const button = data !== "" ? <button className="ui button">Submit</button> : null

	return (
		<Fragment>
			<form>
				<h3>What's Your Suggestion?</h3>

				<Input 
				type="radio"
				label={data}
				name="My field is missing!"
				value="no-field"
				onChange={(e) => handleChange(e)}
				/>

				<Input 
				type="radio"
				label={data}
				name="Other"
				value="other"
				id={data}
				onChange={(e)=> handleChange(e)}
				/>
				{/* <Fields 
				type="radio"
				label="Other"
				name={data}
				value="other"
				id={data}
				onChange={(e)=>handleChange(e)}
				/> */}
			{nofield()}
			{otherfield()}
			{button}
			</form>
		</Fragment>
	)
}

export default StepOne
