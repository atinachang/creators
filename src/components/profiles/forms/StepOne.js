import React, {Fragment} from 'react'
import Fields from '../forms/Fields'
import {Field } from 'formik'

const StepOne = (props) => {
const {name, email, twitter, instagram, website, bio, photo, currentStep, handleChange, handleChangeImage, userId, errors, touched} = props;

if (currentStep !== 1) {
	return null
}

return (

	<Fragment> 

		<h2>Let's get to know you!</h2>
		<h3>Basic Info</h3>
			<div className="field">
				<Field  placeholder=" Name"
			name={name} type="text" id={name} value={name}
			onChange={handleChange}
			/>
			{touched.name && errors.name && <div className="ui error message">{errors.name}
			</div>}
			</div>

			<div className="field">
				<Field
			type="text"
			id="userId"
			name="userId"
			value={userId}
			onChange={handleChange}
			placeholder="This will be used for your custom profile page. No spaces please!"
			/>
			{touched.userId && errors.userId && <div className="ui error message">{errors.userId}
			</div>}
			</div>

			<div className="field">
			<Field
			type="email"
			id={email}
			name={email}
			onChange={handleChange}
			value={email}
			placeholder="Your preferred contact email"/>
			{touched.email && errors.email && <div className="ui error message">{errors.email}
			</div>}
			</div>

		{/* <div className="field">
				<Fields 
				label="Name" 
				required 
				type="text" 
				id="name" 
				name="name" 
			//  value={name}
				onChange={handleChange} 
				placeholder="Your preferred name"/>

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
			
			<Fields 
			label="Your Email" 
			type="email" 
			id="email" 
			name="email" 
			onChange={handleChange} 
			value={email} 
			placeholder="Your preferred contact email"/>
			{errors.email.length === 0 && 
<span className='ui pointing red basic label'>{errors.email}</span>}
			</div> */}

			{/* <div>
			<Fields label="Please upload an image of yourself" type="file" id="image" accept="image/*" onChange={handleChangeImage} />
			<img src={photo} alt={name} />				
			</div> */}

			{/* <Fields label="Short Bio" type="text" id="bio" name="bio" onChange={handleChange} value={bio} placeholder="Keep it less than 150 words" maxlength="200"/>

				<h3>Social Media</h3>
	<Fields label="Twitter" type="text" id="twitter" name="twitter" value={twitter}onChange={handleChange} placeholder="https://www.twitter.com/*"/>

	<Fields label="Instagram" type="text" id="instagram" name="instagram" onChange={handleChange} value={instagram} placeholder="https://www.instagram/com/*"/>

	<Fields label="Website" type="text" id="website" name="website" onChange={handleChange} value={website} placeholder="https://*"/> */}

	{/* </div> */}
	</Fragment>	
	)
}

export default StepOne
