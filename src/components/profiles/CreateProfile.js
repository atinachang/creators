import React, { Component, useState, useEffect, Fragment } from 'react';
import {connect} from 'react-redux';
import firebase from '../../config/config'
import {createProfile} from '../../store/actions/profileActions';
import {storage} from '../../config/config';
import {v4 as uuid} from 'uuid'
import StepOne from './forms/StepOne';
import StepTwo from './forms/StepTwo'
import StepThree from './forms/StepThree'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


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
		live: false,
		createdAt: new Date(),
		errors: {
			name: null,
			email: '',
			field: [],
		}
	 } 
	
	
	 handleChange =(e) => {
		// const validateEmail = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

		const {name, value} = e.target
		// let errors = this.state.errors
	
		// switch (name) {
		// 	case 'name':
		// 		errors.name = null ? 'You must include a name' : '';
		// 		break;
		// 	case 'email':
		// 		errors.email = validateEmail.test(value) ?'' : 'Email is not valid';
		// 		break;
			// case 'field':
			// 	errors.field = value.length = 0 ? 'You must select a Field of Work' : '';
			// 	break;
			// case 'photo':
			// 	errors.photo = '' ? 'You must upload a photo' : '';
			// 	break;
				// default:
				// 	break;
		
		this.setState({
			// errors,
			[name]: value},
			// ()=> {
				// console.log(errors)
			// }
		)
	}



	handleChangeFields= (e) => {
		const {value} = e.target
		const {field} = this.state
		this.setState({
			field: field.concat(value),
		})
		// console.log(this.state.field)
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
	  _next = () => {
    let currentStep = this.state.currentStep
		// const {name} = this.state
		// if (!this.state.errors) {
			currentStep = currentStep >= 2? 3: currentStep + 1
			this.setState({
				currentStep: currentStep
			})
			
		// } else {
		// 				Swal.fire(
		// 		`Oops, ${name} did you forget something?`
		// 	)
		// }
		
		// 		if (this.validateForm(this.state.errors)) {
		// 	console.info('Valid form')
		// } else {
		// 	// console.error('Invalid form')
		// 	Swal.fire(
		// 		'Oops, you have to submit something!'
		// 	)
		// }
	}
	
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
			currentStep, genre, bio, title, errors, userId} = this.state;

		return (
			<Fragment>
				<p>Step {currentStep}</p>
				<form onSubmit={this.handleSubmit} className="ui form">
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
					errors={errors}
					userId={userId}
					/>
					<StepTwo 
          currentStep={currentStep} 
					handleChangeFields={this.handleChangeFields} 

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
