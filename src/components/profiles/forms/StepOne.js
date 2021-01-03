import React, {Fragment} from 'react'
import {Fields} from '../forms/Fields'
import StepTwo from './StepTwo'
import {fields} from './arrays'

const StepOne = (props) => {
const {name, email, twitter, instagram, website, bio, photo, currentStep, handleChange, handleChangeImage, userId, errors, touched, validator, handleChangeFields} = props;

if (currentStep !== 1) {
	return null
}
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
return (

	<Fragment> 

		<h2>Let's get to know you!</h2>
		<h3>Basic Info</h3>
		<div className="field">
				<Fields 
				label="Name" 
				required 
				type="text" 
				id="name" 
				name="name" 
				onChange={handleChange} 
				placeholder="Your preferred name"/>
			{validator.message('name', name, 'required|alpha')}

		<Fields 
				label="User ID" 
				required 
				type="text" 
				id="userId" 
				name="userId" 
				value={userId}
				onChange={handleChange} 
				placeholder="This will be used for your custom profile page. No spaces please!"
				/>
			{validator.message('userId', userId, 'required|alpha_num_dash')}
			
			<Fields 
			label="Your Email" 
			type="email" 
			id="email" 
			name="email" 
			onChange={handleChange} 
			value={email} 
			placeholder="Your preferred contact email"/>
			{validator.message('email', email, 'required|email')}
			</div>

			<div>
			<Fields label="Please upload an image of yourself" type="file" id="image" accept="image/*" onChange={handleChangeImage} />
			<img src={photo} alt={name} />				
			</div>

			<Fields label="Short Bio" type="text" id="bio" name="bio" onChange={handleChange} value={bio} placeholder="Keep it less than 150 words" maxlength="200"/>

				<h3>Social Media</h3>
	<Fields label="Twitter" type="text" id="twitter" name="twitter" value={twitter}onChange={handleChange} placeholder="https://www.twitter.com/*"/>

	<Fields label="Instagram" type="text" id="instagram" name="instagram" onChange={handleChange} value={instagram} placeholder="https://www.instagram/com/*"/>

	<Fields label="Website" type="text" id="website" name="website" onChange={handleChange} value={website} placeholder="https://*"/>

	</Fragment>	
	)
}

export default StepOne
