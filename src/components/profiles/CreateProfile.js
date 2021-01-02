import React, { Component, useState, useEffect, Fragment } from 'react';
import {connect} from 'react-redux';
import firebase from '../../config/config'
import {createProfile} from '../../store/actions/profileActions';
import {storage} from '../../config/config';
import {v4 as uuid} from 'uuid'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {DisplayingErrorMessagesSchema} from './forms/Errors'
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
import StepOne from './forms/StepOne';



class CreateProfile extends Component {
	state = {
		currentStep: 1,
		userId: "",
		name: "",
		email: "",
		bio: "",
		photo: "",
		twitter: "",
		instagram: "",
		website: "",
		field: [],
		genre: [],
		title: [],
		// isChecked: null,
		live: false,
		createdAt: new Date(),

	 } 

	
	 handleChange =(e) => {

		const {name, value} = e.target
		this.setState({
			[name]: value},
		)
	}



	handleChangeFields= (e) => {
		const {value} = e.target
		const {field, isChecked} = this.state

		this.setState({
			field: field.concat(value),
			// isChecked: true
		})
		// console.log(this.state.isChecked)
	}

	handleChangeGenre = (e) => {
		const {value} = e.target
		const {genre} = this.state
		this.setState({
			genre: genre.concat(value)
		})
		// console.log(this.state.genre)
	}

	handleChangeTitle = (e) => {
		const {value} = e.target
		const {title} = this.state
		this.setState({
			title: title.concat(value)
		})
		// console.log(this.state.title)
	}

	 handleChangeImage= async (e) =>  {
		const file = e.target.files[0];
		const id = uuid()
		const imagesRef = firebase.storage().ref("images").child(id);
		await imagesRef.put(file)

		console.log(file)
		imagesRef.getDownloadURL().then(url => {
			console.log(url)
			this.setState({
				photo: url
			})
		})
}


	 handleSubmit =(e)=>  {
const MySwal = withReactContent(Swal)

	 const {name, email, twitter, instagram, website, photo, field, userId} = this.state;
	 const {createProfile, history} = this.props;
			// let history = useHistory()
		e.preventDefault();

		// console.log(this.props)
// 		Swal.fire({
// 			icon: 'success',
// 			allowOutsideClick: true,
// 			allowEscapeKey: true,
// 			title: name,
// 			imageUrl: photo,
// 			imageWidth: 200,
// 			imageHeight: 200,
// 			width: 700,
// 			html: `
// 			<p>Your Field(s) of Work: ${field}</p>
// 			<p>Email: ${email}</p>
// 			<p>Twitter: ${twitter}</p>
// 			<p>Instagram: ${instagram} </p>
// 			<p>Website: <a href=${website}/></p>
// 	`
// })

console.log(this.state)
// createProfile(this.state)
		history.push('/thankyou')

}

_next = (e) => {
let currentStep = this.state.currentStep
	currentStep = currentStep >= 2? 3: currentStep + 1
	this.setState({
		currentStep: currentStep
	})	
};
	
	
_prev = () => {
let currentStep = this.state.currentStep
currentStep = currentStep <= 1? 1: currentStep - 1
this.setState({
	currentStep: currentStep
})
}

_reset = () => {
window.location.reload(false);
}

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button 
        className="ui button" 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <3){
    return (
      <button 
        className="ui button" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }
  return null;
}

resetButton(){
	return (
		<button className="ui button" onClick={this._reset}>Reset Form</button>
	)
}


	render() {
const {name, email, twitter, instagram, website, photo, field, 
	currentStep, genre, bio, title, errors, userId, isChecked, allFieldsValid} = this.state;

	// console.log(this.DisplayingErrorMessagesSchema)
    // const renderNameValidationError = name.valid ? (
    //   ""
    // ) : (
    //   <ErrorValidationLabel txtLbl={name.requiredTxt} />
    // );
    // const renderUserValidationError = userId.valid ? (
    //   ""
    // ) : (
    //   <ErrorValidationLabel txtLbl={userId.requiredTxt} />
    // );


	return (
		<Fragment>
			<Formik        
				initialValues={{
				name: '',
				email: '',
				userId: ''
				}}
				validationSchema={DisplayingErrorMessagesSchema}
				onSubmit={values => {
				// same shape as initial values
				console.log(values);
			}}>
			{({ errors, touched }) => (
				<Form className="ui form">
					<div className="ui form error">

						<StepOne 
						errors={errors} 
						touched={touched} 
						currentStep={currentStep}
						name={name}
						userId={userId}
						email={email}
						handleChange={this.handleChange}
						/>
					{/* <Field name="email" type="email"/>
					{touched.email && errors.email && <div>{errors.email}</div>} */}
					<button type="submit" className="ui button">Submit</button>

						</div>
				</Form>
				)}
			</Formik>
			{/* <DisplayingErrorMessagesExample /> */}
				{/* <p>Step {currentStep}</p> */}

				{/* <form 
				onSubmit={this.handleSubmit} 
				className="ui form"
				noValidate
				>
					<StepOne 
					currentStep={currentStep} 
					handleChange={this.handleChange} 
					email={email} 
					name={name} 
					twitter={twitter} 
					instagram={instagram} 
					website={website} 
					handleChangeImage={this.handleChangeImage}
					photo={photo} 
					bio={bio}
					userId={userId}
					// errors={errors}
					validateEmail={this.validateEmail}
					// allFieldsValid={allFieldsValid}
					// renderNameValidationError={renderNameValidationError}
					// renderUserValidationError={renderUserValidationError}
					/>
					<StepTwo 
          currentStep={currentStep} 
					handleChangeFields={this.handleChangeFields} 
					// isChecked={isChecked}

        />
					<StepThree 
          currentStep={currentStep} 
          handleChangeGenre={this.handleChangeGenre}
					handleChangeTitle={this.handleChangeTitle} 
					genre={genre} 
					field={field} 
					title={title}
        />
				{this.resetButton()}
        {this.previousButton()}
        {this.nextButton()}
				</form>
 */}
			</Fragment>
					)
	}
}

	 function mapDispatchToProps(dispatch) {
		//  console.log(dispatch)
		return {
			createProfile: (profile) => dispatch(createProfile(profile))
		}
	}


export default connect(null, mapDispatchToProps)(CreateProfile)
