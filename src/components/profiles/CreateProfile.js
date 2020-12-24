import React, { Component, useState, useEffect, Fragment } from 'react';
import {connect} from 'react-redux';
// import Fields from './forms/Fields';
import {createProfile} from '../../store/actions/profileActions';
import {storage} from '../../config/config';
// import FileBase64 from 'react-file-base64';
import StepOne from './forms/StepOne';
import StepTwo from './forms/StepTwo'
import StepThree from './forms/StepThree'

// import {useHistory} from 'react-router-dom';

class CreateProfile extends Component {
	state = {
		currentStep: 1,
		name: "",
		// username: "",
		email: "",
		// password: "",
		field: [],
		genre: [],
		title: [],
		image: null,
		progress: 0,
		url: "",
		twitter: "",
		instagram: "",
		website: "",
		live: false,
		// files: []
	 } 

// const CreateProfile = ({createProfile}) => {
// 	const [field, setField] = useState([])
// 	const [genre, setgenre] = useState([])
// 	const [image, setImage] = useState(null)
// 	const [url, setUrl] = useState(null);
// 	const [progress, setProgress] = useState(0)
// 	const [inputs, setInputs] = useState({
// 		name: '',
// 		image: url ,
// 		field: [],
// 		twitter: '',
// 		instagram: '',
// 		genre: []
// 	})
	
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
	}

	handleChangeTitle = (e) => {
		const {value} = e.target
		this.setState({
			title: this.state.title.concat(value)
		})
		console.log(this.state.title)
	}


	 handleChangeImage= (e) =>  {
		if (e.target.files[0]) {
				// setImage(e.target.files[0])
				this.setState({
					image: e.target.files[0]
				})
		}
	}


	 handleImageSubmit = ()=> {
		 	console.log(this.state.image)

		const uploadImage = storage.ref(`/images/${this.state.image.name}`).put(this.state.image);
		uploadImage.on(
			"state_changed",
			snapshot => {
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				// setProgress(progress)
				this.setState({
					progress,
				})
			},
			err => {
				console.log(err)
			},
			() => {
				storage
				.ref("images")
				.child(this.state.image.name)
				.getDownloadURL()
				.then( (url) => {
					// setUrl(url)
					console.log(url)
					this.setState({
						image: url,
					})
				})
				.catch((err) => {
					console.log(err)
				})
			}
			)
		}


	 handleSubmit =(e)=>  {
			// let history = useHistory()
		e.preventDefault();
				console.log(this.state)
// console.log(this.state)
		// this.props.createProfile(this.state) //this is passed to mapDispatchToProps as the project
		// history.push('/')
		// this.props.history.push('/')
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

	render() {
				// console.log('image', image)

		return (
			<Fragment>
				<p>Step {this.state.currentStep}</p>
				<form onSubmit={this.handleSubmit} className="ui form">
					<StepOne currentStep={this.state.currentStep} handleChange={this.handleChange} email={this.state.email} name={this.state.name} twitter={this.state.twitter} instagram={this.state.instagram} website={this.state.website}/>
					<StepTwo 
          currentStep={this.state.currentStep} 
          handleChangeFields={this.handleChangeFields} 
        />
					<StepThree 
          currentStep={this.state.currentStep} 
          handleChangeGenre={this.handleChangeGenre}
          genre={this.state.genre} field={this.state.field} handleChangeTitle={this.handleChangeTitle} title={this.state.title}
        />

        {this.previousButton()}
        {this.nextButton()}
				</form>
			</Fragment>
			// 	<form onSubmit={((e) => this.handleSubmit(e))}>
			// 		<h2>Submit</h2>
			// 		<div className="ui form">
			// 			<div className="two fields">
			// 			<Fields label="Your preferred name" type="text" id="name" onChange={((e) => this.handleChange(e))}/>
			// 			<div>
			// 				<progress value={this.state.progress} max="100"/>
			// 				<Fields label="Upload an image" type="file" id="image" accept="image/*" onChange={(e) =>this.handleChangeImage(e)} />
			// 				<button className="ui button"onClick={() =>this.handleImageSubmit()}>Add</button>
			// 				<img src={this.state.url} alt="" formAction="/create"/>
							
			// 					{/* <span>{() =>this.handleImageErr()}</span> */}
							
			// 			</div>
			// 		</div>

			// 		<div className="two fields">
			// 			<Fields label="Instagram" type="text" id="instagram" placeholder="https://www.instagram/com/*" onChange={((e) => this.handleChange(e))}/>
						
			// 			<Fields label="Twitter" type="text" id="twitter" placeholder="https://www.twitter/com/*" onChange={((e) => this.handleChange(e))}/>
			// 		</div>

			// 		<div className="two fields">
			// 			<Fields label="Website" type="text" id="website" onChange={((e) => this.handleChange(e))}/>
			// 			<Fields label="Email" type="text" id="email" onChange={((e) => this.handleChange(e))}/>
			// 		</div>

			// 	  <div className="inline fields">
			// 			<h3>
			// 				Please select all that apply
			// 			</h3>
			// 			<div className="four fields">
			// 				<Fields type="checkbox" label="DJ" value="DJ"id="field" onChange={((e) => this.handleChange(e))}/>
			// 				<Fields type="checkbox" label="Designer" value="Designer"id="field" onChange={((e) => this.handleChange(e))}/>
			// 				<Fields type="checkbox" label="Film Production" value="Film Production"id="field" onChange={((e) => this.handleChange(e))}/>
			// 				<Fields type="checkbox" label="Consulting" value="Consulting"id="field" onChange={((e) => this.handleChange(e))}/>
			// 				<Fields type="checkbox" label="Design" value="Design"id="field" onChange={((e) => this.handleChange(e))}/>

			// 			</div>
			// 		</div>

			// 		<div className="inline fields">
			// 			<h3>
			// 				What genres of music do you specialize in?
			// 			</h3>
			// 			<div className="four fields">
			// 				<Fields type="checkbox" label="Hip-Hop" value="Hip-Hop"id="genres" onChange={((e) => this.handleChange(e))}/>
			// 				<Fields type="checkbox" label="House" value="House"id="genres" onChange={((e) => this.handleChange(e))}/>
			// 				<Fields type="checkbox" label="R&B" value="R&B"id="genres" onChange={((e) => this.handleChange(e))}/>
			// 			</div>
			// 		</div>
		
			// </div>
			// 		<button className="ui button" >Submit</button>
			// 	</form>

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
