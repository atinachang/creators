import React, {Fragment, useState} from 'react'
import StepOne from './StepOne'

const ReportBug = () => {
	const [currentStep, setCurrentStep] = useState(1)
	// const [formData, setFormData] = useState({
	// 	suggest: "",
	// 	data: ""
	// })
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
				data={data}
				/>
		</Fragment>
	)
}

export default ReportBug
