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
import {useHistory} from 'react-router-dom';

const Create = () => {
	const [currentStep, setCurrentStep] = useState(1)
	// const [name, setName] = useState("")
	// const [email, setEmail] = useState("")
	// const [field, setField] = useState([])
	// const [genre, setGenre] = useState([])
	// const [title, setTitle] = useState([])
	// const [bio, setBio] = useState("")
	// const [photo, setPhoto] = useState("")
	// const [twitter, setTwitter] = useState("")
	// const [instagram, setInstagram] = useState("")
	// const [website, setWebsite] = useState("")
	// const [live, setLive] = useState("")
	const [formData, setFormData] = useState({
		// currentStep: 1,
		name: "",
		email: "",
		field: [],
		genre: [],
		title: [],
		bio: "",
		photo: "",
		twitter: "",
		instagram: "",
		website: "",
		live: false,
	})
	const {name, email, field, genre, title, bio, photo, twitter, instagram, website, live} = formData;

	
	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData({
			...formData,
			[name]: value
		})
}


	const handleChangeFields= (e) => {
		const {value} = e.target
		setFormData({
			...formData,
			field: field.concat(value)
		})
		// console.log(formData)
		// this.setState({
		// 	field: this.state.field.concat(value),
		// })
		// console.log(this.state.field)
	}

	const handleChangeGenre = (e) => {
		const {value} = e.target
		this.setState({
			genre: this.state.genre.concat(value)
		})
	}

	const handleChangeTitle = (e) => {
		const {value} = e.target
		this.setState({
			title: this.state.title.concat(value)
		})
		console.log(this.state.title)
	}

	 const handleChangeImage= async (e) =>  {
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

let history = useHistory()
	const handleSubmit =(e)=>  {
		e.preventDefault();
		console.log(formData)
		// console.log(this.state)
		// createProfile(formData) //this is passed to mapDispatchToProps as the project
		// history.push('/')
		// history.push('/thankyou')
	}
	const _next = () => {
    let currStep = currentStep
    currStep = currentStep >= 2? 3: currentStep + 1
		setCurrentStep(currStep)
}
	
	const  _prev = () => {
    let currStep = currentStep
    currStep = currentStep <= 1? 1: currentStep - 1
    setCurrentStep(currStep)
}
	
	const	_reset = () => {
		setFormData({
			...formData
		})
	}

/*
* the functions for our button
*/
const previousButton= () => {
  let currStep = currentStep;
  if(currStep !==1){
    return (
      <button 
        className="ui button" 
        type="button" onClick={() =>_prev()}>
      Previous
      </button>
    )
  }
  return null;
}

const nextButton= () =>{
  let currStep = currentStep;
  if(currStep <3){
    return (
      <button 
        className="ui button" 
        type="button" onClick={()=>_next()}>
      Next
      </button>        
    )
  }
  return null;
}

const resetButton = ()=>{
	return (
		<button className="ui button" onClick={() =>_reset()}>Reset Form</button>
	)
}

	
		return (
			<Fragment>
				<p>Step {currentStep}</p>
				<form onSubmit={e=>handleSubmit(e)} className="ui form">
					<StepOne 
					currStep={currentStep} 
					handleChange={e=>handleChange(e)} 
					// email={email} 
					// name={name} 
					// twitter={twitter} 
					// instagram={instagram} 
					// website={website} 
					formData={formData}
					// handleImageSubmit={e=>handleImageSubmit()} 
					handleChangeImage={e=>handleChangeImage()}
					// photo={this.state.photo} 
					// bio={this.state.bio}
					/>
					<StepTwo 
          currStep={currentStep} 
					handleChangeFields={e=>handleChangeFields(e)} 
					// formData={formData}
        />
					<StepThree 
          currStep={currentStep} 
          handleChangeGenre={e=>handleChangeGenre(e)}
          genre={genre} field={field} handleChangeTitle={e=>handleChangeTitle(e)} title={title}
        />
				{/* <StepFour currentStep={this.state.currentStep}/> */}
				{resetButton()}
        {previousButton()}
        {nextButton()}
					{/* <button className="ui button">Submit</button> */}

				</form>
			</Fragment>
		)
	}

	 function mapDispatchToProps(dispatch) {
		//  console.log(dispatch)
		return {
			createProfile: (profile) => dispatch(createProfile(profile))
		}
	}


export default connect(null, mapDispatchToProps)(Create)
