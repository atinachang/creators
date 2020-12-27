import React, {Fragment} from 'react'
import Fields from '../forms/Fields'

const StepOne = (props) => {
	// console.log(props)
	// const {name, email, handleChange, currentStep, twitter, instagram, website, handleImageSubmit, progress, handleChangeImage, photo, bio} = props;
	const {name, email, twitter, instagram, website, bio, photo, currentStep, handleChange, handleChangeImage} = props;
		// const {name, email, field, genre, title, bio, photo, twitter, instagram, website, live} = props.formData;

	if (currentStep !== 1) {
		return null
	}
	return (
    <Fragment> 
			<h2>Let's get to know you!</h2>
			<h3>Basic Info</h3>
 			<div className="basic">
				 <Fields label="Your preferred name" required type="text" id="name" name="name" value={name}onChange={handleChange} placeholder="Your preferred name"/>
			 
			 <Fields label="Your preferred contact email" type="text" id="email" name="email" onChange={handleChange} value={email} placeholder="Enter email"/>
			 </div>

				<div>
				<Fields label="Please upload an image of yourself" type="file" id="image" accept="image/*" onChange={handleChangeImage} />
				<img src={photo} alt="" formAction="/create"/>				
				</div>

				<Fields label="Short Bio" type="text" id="bio" name="bio" onChange={handleChange} value={bio} placeholder="Keep it less than 150 words" maxlength="200"/>

					<h3>Social Media</h3>
		<Fields label="Twitter" type="text" id="twitter" name="twitter" value={twitter}onChange={handleChange} placeholder="https://www.twitter.com/*"/>

		<Fields label="Instagram" type="text" id="instagram" name="instagram" onChange={handleChange} value={instagram} placeholder="https://www.instagram/com/*"/>

		<Fields label="Website" type="text" id="website" name="website" onChange={handleChange} value={website} placeholder="https://*"/>

    </Fragment>	)
}

export default StepOne
