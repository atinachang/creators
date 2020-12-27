import React, { Component, useState, useEffect, Fragment } from 'react';
import {connect} from 'react-redux';
import firebase from '../../config/config'
// import Fields from './forms/Fields';
import {createProfile} from '../../store/actions/profileActions';
import {storage} from '../../config/config';
import {v4 as uuid} from 'uuid'
import StepOne from './forms/StepOne';
import StepTwo from './forms/StepTwo'
import StepThree from './forms/StepThree'
import {useHistory} from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Create = () => {
	const [currentStep, setCurrentStep] = useState(1)
	const [field, setField] = useState([])
	const [genre, setGenre] = useState([])
	const [title, setTitle] = useState([])
	const [photo, setPhoto] = useState("")
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		bio: "",
		twitter: "",
		instagram: "",
		website: "",
		live: false,
	})
	const {name, email, bio, twitter, instagram, website, live} = formData;
	const profile =[]
	
	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData({
			...formData,
			[name]: value
		})
}


	const handleChangeFields= (e) => {
		const {value} = e.target
		setField(field.concat(value))
		console.log(field)
	}

	const handleChangeGenre = (e) => {
		const {value} = e.target
		setGenre(genre.concat(value))
		console.log(genre)
	}

	const handleChangeTitle = (e) => {
		const {value} = e.target
		setTitle(title.concat(value))
		console.log(title)
	}

	 const handleChangeImage= async (e) =>  {
		const file = e.target.files[0];
		const id = uuid()
		const imagesRef = firebase.storage().ref("images").child(id);
		await imagesRef.put(file)
		console.log(file)
		imagesRef.getDownloadURL().then(url => {
			console.log(url)
			setPhoto(url)
		})
		
	
}

let history = useHistory()
	const handleSubmit =(e)=>  {
		e.preventDefault();
		console.log(formData, field, genre, title, photo)
		const { name, email, bio, twitter, instagram, website } = formData
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
	profile.push(formData, field, title, genre, photo)
	createProfile(profile) //this is passed to mapDispatchToProps as the project
	
	
		// console.log(this.state)
		// history.push('/')
		history.push('/thankyou')
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
	
	// const	_reset = () => {
	// 	setFormData({
	// 		...formData,
	// 		name: "",
	// 	email: "",
	// 	// field: [],
	// 	// genre: [],
	// 	// title: [],
	// 	bio: "",
	// 	// photo: "",
	// 	twitter: "",
	// 	instagram: "",
	// 	website: "",
	// 	live: false,
	// 	})
	// 	setField("")
	// 	setTitle("")
	// 	setPhoto("")
	// 	setGenre("")
	// }

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

// const resetButton = ()=>{
// 	return (
// 		<button className="ui button" onClick={() =>_reset()}>Reset Form</button>
// 	)
// }

	
		return (
			<Fragment>
				<p>Step {currentStep}</p>
				<form onSubmit={e=>handleSubmit(e)} className="ui form">
					<StepOne 
					currStep={currentStep} 
					handleChange={e=>handleChange(e)} 
					formData={formData}
					handleChangeImage={e=>handleChangeImage(e)}
					/>
					<StepTwo 
          currStep={currentStep} 
					handleChangeFields={e=>handleChangeFields(e)}
					field={field}
					 
        />
					<StepThree 
          currStep={currentStep} 
          handleChangeGenre={e=>handleChangeGenre(e)}
					genre={genre} 
					field={field} 
					title={title}
					handleChangeTitle={e=>handleChangeTitle(e)} 
        />
				{/* {resetButton()} */}
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
