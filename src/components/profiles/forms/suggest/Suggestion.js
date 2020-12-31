import React, {Fragment, useState} from 'react'
import Fields from '../Fields'
import StepThree from '../StepThree';
import StepOne from './StepOne'
import StepTwo from './StepTwo'


const Suggestion = () => {
	const [currentStep, setCurrentStep] = useState(1)
	const [missing, setMissing] = useState("")
	const [other, setOther] = useState("")
	const [data, setData] = useState("")

	const [suggest, setSuggest] = useState("")

	const handleChange = (e) => {
		e.preventDefault()
		const {name, value} = e.target;
		setData(value)
		console.log(data)
	}

	return (
		<Fragment>
				<StepOne 
				currentStep={currentStep}
				handleChange={handleChange}
				data={data} missing={missing} other={other}
				/>
				
		</Fragment>
	)}

export default Suggestion
