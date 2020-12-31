import React, {Fragment, useState} from 'react'
// import StepThree from '../StepThree';
// import StepOne from './StepOne'
// import StepTwo from './StepTwo'

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
				<h1>report bug</h1>
				
		</Fragment>
	)
}

export default ReportBug
