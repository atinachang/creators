import React, {Fragment} from 'react'
import Fields from './Fields'

function StepTwo(props) {
	// console.log(props)
	const { handleChangeFields, currentStep, field} = props;
  if (currentStep !== 2) {
    return null
	} 
	
	// if (field.includes('DJ')) {
	// 	return <div>DJ form</div>
	// }
  return(
		<Fragment> 
		<h2>What do you do? </h2>
			<h4>
			Please select all that apply
		</h4>
		<div className="five fields">
			<Fields type="checkbox" label="DJ" value="DJ"id="field" onChange={handleChangeFields}/>
			<Fields type="checkbox" label="Film Production" value="Film"id="field" onChange={handleChangeFields}/>
			<Fields type="checkbox" label="Consulting" value="Consulting"id="field" onChange={handleChangeFields}/>
			<Fields type="checkbox" label="Design" value="Design"id="field" onChange={handleChangeFields}/>
			<Fields type="checkbox" label="Tech" value="Tech"id="field" onChange={handleChangeFields}/>
		</div>
    {/* <div className="form-group">
      <label htmlFor="username">Username</label>
      <input
        className="form-control"
        id="username"
        name="username"
        type="text"
        placeholder="Enter username"
        value={props.username}
        onChange={props.handleChange}
        />
    </div> */}
		</Fragment>
  );
}

export default StepTwo
