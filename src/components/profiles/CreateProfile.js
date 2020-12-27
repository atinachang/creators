import React, { Component, useState, useEffect, Fragment } from 'react';
import {connect} from 'react-redux';
import firebase from '../../config/config'
// import Fields from './forms/Fields';
import {createProfile} from '../../store/actions/profileActions';
import {storage} from '../../config/config';
import {v4 as uuid} from 'uuid'
// import FileBase64 from 'react-file-base64';
import StepOne from './forms/StepOne';
import StepTwo from './forms/StepTwo'
import StepThree from './forms/StepThree'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


class CreateProfile extends Component {
	state = {
		currentStep: 1,
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
	 } 
	
	
	 handleChange =(e) => {
		const {name, value} = e.target
		this.setState({
				[name]: value,
		})
	}


	handleChangeFields= (e) => {
		const {value} = e.target
		this.setState({
			field: this.state.field.concat(value),
		})
		console.log(this.state.field)
	}

	handleChangeGenre = (e) => {
		const {value} = e.target
		this.setState({
			genre: this.state.genre.concat(value)
		})
		console.log(this.state.genre)
	}

	handleChangeTitle = (e) => {
		const {value} = e.target
		this.setState({
			title: this.state.title.concat(value)
		})
		console.log(this.state.title)
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

	 const {name, email, twitter, instagram, website, photo, field} = this.state;
	 const {createProfile, history} = this.props;
			// let history = useHistory()
		e.preventDefault();
		console.log(this.state)
		// console.log(this.props)
		Swal.fire({
			icon: 'success',
			allowOutsideClick: true,
			allowEscapeKey: true,
			title: name,
			imageUrl: photo,
			imageWidth: 200,
			imageHeight: 200,
			width: 700,
			html: `
			<p>Your Field(s) of Work: ${field}</p>
			<p>Email: ${email}</p>
			<p>Twitter: ${twitter}</p>
			<p>Instagram: ${instagram} </p>
			<p>Website: <a href=${website}/></p>
	`
})

// console.log(this.state)
createProfile(this.state)
		// this.props.createProfile(this.state) //this is passed to mapDispatchToProps as the project
		history.push('/thankyou')
	
		// this.props.history.push('/thankyou')
	}
	  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
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
			 const {name, email, twitter, instagram, website, photo, field, currentStep, genre, bio, title} = this.state;

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
					bio={bio}/>
					<StepTwo 
          currentStep={currentStep} 
          handleChangeFields={this.handleChangeFields} 
        />
					<StepThree 
          currentStep={currentStep} 
          handleChangeGenre={this.handleChangeGenre}
          genre={genre} field={field} handleChangeTitle={this.handleChangeTitle} title={title}
        />
				{/* <StepFour currentStep={this.state.currentStep}/> */}
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
