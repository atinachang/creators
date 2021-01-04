import React, {Fragment} from 'react'
import {Fields} from '../forms/Fields'

const StepOne = ({state, validator, handleChange, handleChangeImage}) => {
const {name, email, twitter, instagram, website, bio, photo, userId} = state;

return (

	<Fragment> 

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
			{validator.message('name', name, 'required|alpha_space')}
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
		placeholder="/profile/(youruserIDhere)"
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
			{validator.message('email', email, 'required|email')}

			<Fields label="Please upload an image of yourself" type="file" id="image" accept="image/*" onChange={handleChangeImage} />
			<img src={photo} alt={name} />
			{validator.message('photo', photo, 'required')}
				

				<label htmlFor="bio">Short Bio</label>
			<textarea name="bio" id="bio" value={bio} onChange={handleChange} rows="4" placeholder="Less than 100 words"></textarea>
			{validator.message('bio', bio, 'max:200')}

			</div>

			<h3>Social Media</h3>
			<div className="field">
				<Fields label="Twitter" type="text" id="twitter" name="twitter" value={twitter}onChange={handleChange} placeholder="https://www.twitter.com/*"/>
			{validator.message('twitter', twitter, 'url:https://www.twitter.com/ ')}

			<Fields label="Instagram" type="text" id="instagram" name="instagram" onChange={handleChange} value={instagram} placeholder="https://www.instagram.com/*"/>
			{validator.message('instagram', instagram, 'url:https://www.instagram.com/ ')}

			<Fields label="Website/Other" type="text" id="website" name="website" onChange={handleChange} value={website} placeholder="https://*"/>
			{validator.message('website', website, 'url:https:// ')}

			</div>

	</Fragment>	
	)
}

export default StepOne
