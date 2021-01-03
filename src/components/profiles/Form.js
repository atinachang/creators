import React, {Fragment} from 'react'
import {Fields} from './forms/Fields'
import {fields} from './forms/arrays'


const Form = ({state, validator, handleChangeImage, handleChange, handleChangeFields}) => {
	const {name, userId, email, photo, bio, twitter, instagram, website, field} = state;

		const mapped = fields.map(item => {
		return (
			<Fragment key={item}>
				<Fields
			type="checkbox"
			label={item}
			value={item}
			id={item}
			onChange={(e)=>handleChangeFields(e)}/>
			</Fragment>
		)
	})

	return (
		<Fragment>
			<h2>Let's get to know you!</h2>
			<h3>Basic Info</h3>

<div className="two fields">

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
			</div>

		<div className="field">
			<Fields
		label="User ID"
		required
		type="text"
		id="userId"
		name="userId"
		value={userId}
		onChange={handleChange}
		placeholder="https://wecreate.to/profile/(youruserIDhere)"
		/>
		{validator.message('userId', userId, 'required|alpha_num_dash')}
		</div>
</div>

			<div className="field">
				<Fields
			label="Your Email"
			type="email"
			id="email"
			name="email"
			onChange={handleChange}
			value={email}
			placeholder="Your preferred contact email"/>
			{/* {validator.message('email', email, 'required|email')} */}

			<Fields label="Please upload an image of yourself" type="file" id="image" accept="image/*" onChange={handleChangeImage} />
			<img src={photo} alt={name} />
			{validator.message('photo', photo, 'required')}
				

			{/* <Fields label="Short Bio" type="textarea" id="bio" name="bio" onChange={handleChange} value={bio} placeholder="Keep it less than 150 words" maxlength="200"/> */}
				<label htmlFor="bio">Short Bio</label>
			<textarea name="bio" id="bio" value={bio} onChange={handleChange} rows="4"></textarea>
			</div>

			<h3>Social Media</h3>
			<div className="field">
				<Fields label="Twitter" type="text" id="twitter" name="twitter" value={twitter}onChange={handleChange} placeholder="https://www.twitter.com/*"/>
			
			<Fields label="Instagram" type="text" id="instagram" name="instagram" onChange={handleChange} value={instagram} placeholder="https://www.instagram/com/*"/>
			
			<Fields label="Website" type="text" id="website" name="website" onChange={handleChange} value={website} placeholder="https://*"/>
			</div>

		<h2>What do you do? </h2>
			<h4>
			Please select all that apply
		</h4>
			{validator.message('field', field, 'required|accepted')}
		<div className="inputs">
			{mapped}

		</div>
		</Fragment>
	)
}

export default Form
