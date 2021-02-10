import React, {Fragment} from 'react'
import { validate } from 'uuid';
import {Inputs} from './reusable/Inputs'

const StepOne = ({state, validator, handleChange, handleChangeImage, handleChangePronoun}) => {
	const { name, email, twitter, instagram, website, bio, photo, userId, pronoun } = state;
	// console.log("photo state",photo)

return (

	<Fragment> 

	<div className="two fields">

			<div className="field">
				<Inputs
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
			<Inputs
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
			<Inputs
			label="Your Preferred Pronoun (OPTIONAL)"
			type="text"
			id="pronoun"
			name="pronoun"
			onChange={handleChange}
			value={pronoun}
			placeholder="He/Him, She/Her, They/Them"
			/>
		</div>
			<div className="field">
				<Inputs
			label="Your Email"
			type="email"
			id="email"
			name="email"
			onChange={handleChange}
			value={email}
			placeholder="Your preferred contact email"/>
			{validator.message('email', email, 'required|email')}

			<div className="field">
				<Inputs label="Please upload an image of yourself" type="file" id="image" accept="image/*" onChange={e=>handleChangeImage(e,'photo')} />
			<img src={photo} alt={name} />
			{validator.message('photo', photo, 'required')}
			</div>
				
			<div className="field">
			<label htmlFor="bio">Short Bio</label>
			<textarea name="bio" id="bio" value={bio} onChange={handleChange} rows="4" placeholder="Less than 100 words"></textarea>
			{validator.message('bio', bio, 'max:200')}
			</div>

			</div>

			<h3>Social Media</h3>
			<div className="field">
				<Inputs label="Twitter" type="text" id="twitter" name="twitter" value={twitter}onChange={handleChange} placeholder="Twitter URL"/>
			{validator.message('twitter', twitter, 'url:https://www.twitter.com/ ')}
			</div>
			<div className="field">
			<Inputs label="Instagram" type="text" id="instagram" name="instagram" onChange={handleChange} value={instagram} placeholder="Instagram URL"/>
			{validator.message('instagram', instagram, 'url:https://www.instagram.com/ ')}
			</div>

			<div className="field">
			<Inputs label="Website/Other" type="text" id="website" name="website" onChange={handleChange} value={website} placeholder="Website URL"/>
			{validator.message('website', website, 'url:https:// ')}

			</div>

	</Fragment>	
	)
}

export default StepOne
