import React, {Fragment} from 'react'
import Fields from './Fields'
import {fields} from './arrays'

function StepTwo(props) {
	// console.log(props)
	const { handleChangeFields, currentStep} = props;
  if (currentStep !== 2) {
    return null
	} 
	
	const mapped = fields.map(field => {
		return (
			<Fields key={field} type="checkbox" label={field} value={field} id={field} onChange={handleChangeFields}/>
		)
	})
  return(
		<Fragment> 
		<h2>What do you do? </h2>
			<h4>
			Please select all that apply
		</h4>
		<div className="five fields">
			{mapped}


		</div>

		</Fragment>
  );
}

export default StepTwo
