import React, {Fragment} from 'react'
import Fields from '../forms/Fields'

const StepOne = (props) => {
	// console.log(props)
	// const {name, email, handleChange, currentStep, twitter, instagram, website, handleImageSubmit, progress, handleChangeImage, photo, bio} = props;
	const {name, email, twitter, instagram, website, bio, photo, currentStep, handleChange, handleChangeImage, errors} = props;
	// console.log(errors)
		// const {name, email, field, genre, title, bio, photo, twitter, instagram, website, live} = props.formData;

	if (currentStep !== 1) {
		return null
	}

	// const emailErr = ()=> {
	// 	if (!errors.email) {return null}
	// 	else {
	// 		return (
	// 			<p className="ui pointing red basic label">{errors.email}</p>
	// 		)
	// 	}
	// }

	const nameErr = () => {
		if (!errors.name) {
			return null
		} else {
			return (
				<p className="ui pointing red basic label">{errors.name}</p>
			)
		}
	}
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
				 value={name}
				 onChange={handleChange} 
				 placeholder="Your preferred name"/>
				 {/* {nameErr()} */}
				
			 
			 <Fields 
			 label="Your Email" 
			 required
			 type="email" 
			 id="email" 
			 name="email" 
			 onChange={handleChange} 
			 value={email} 
			 placeholder="Your preferred contact email"/>
			 {errors.email.length > 0 && 
  <span className='ui pointing red basic label'>{errors.email}</span>}
			 {/* {emailErr()} */}
			 </div>

				<div>
				<Fields label="Please upload an image of yourself" type="file" id="image" accept="image/*" onChange={handleChangeImage} />
				{/* {errors.photo = "" && 
				<p className='ui pointing red basic label'>{errors.photo}</p>} */}
				<img src={photo} alt={name} />				
				</div>

				<Fields label="Short Bio" type="text" id="bio" name="bio" onChange={handleChange} value={bio} placeholder="Keep it less than 150 words" maxlength="200"/>

					<h3>Social Media</h3>
		<Fields label="Twitter" type="text" id="twitter" name="twitter" value={twitter}onChange={handleChange} placeholder="https://www.twitter.com/*"/>

		<Fields label="Instagram" type="text" id="instagram" name="instagram" onChange={handleChange} value={instagram} placeholder="https://www.instagram/com/*"/>

		<Fields label="Website" type="text" id="website" name="website" onChange={handleChange} value={website} placeholder="https://*"/>

    </Fragment>	)
}

export default StepOne
