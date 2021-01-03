import React, {Fragment} from 'react'
import {Fields, Checkbox} from './Fields'
import {fields} from './arrays'
import StepThree from './StepThree'

const StepTwo= (props)=> {
	// console.log(props)
	const { handleChangeFields, currentStep, } = props;
	// console.log(handleChecked)
  if (currentStep !== 2) {
    return null
	} 

	// const deselectAll = () => selectAllCheckboxes(false);

	
	const mapped = fields.map(item => {
		return (
			<Fields 
			key={item} 
			type="checkbox" 
			label={item} 
			value={item} 
			id={item} 
			onChange={(e) =>handleChangeFields(e)}/>	
				)
	})
  return(
		<Fragment> 
		<h2>What do you do? </h2>
			<h4>
			Please select all that apply
		</h4>
		<div className="inputs">
			{mapped}
		</div>

		</Fragment>
  );
}

export default StepTwo
