import React, { Component, useState, useEffect } from 'react';
import {connect} from 'react-redux';
import Fields from '../layout/Fields';
import {createProfile} from '../../store/actions/profileActions';
import {storage} from '../../config/fbConfig'
// import {useHistory} from 'react-router-dom';

class CreateProfile extends Component {
	state = {
		name: "",
		field: [],
		image: null,
		progress: 0,
		url: ""
	}
// const CreateProfile = ({createProfile}) => {
// 	const [field, setField] = useState([])
// 	const [genres, setGenres] = useState([])
// 	const [image, setImage] = useState(null)
// 	const [url, setUrl] = useState(null);
// 	const [progress, setProgress] = useState(0)
// 	const [inputs, setInputs] = useState({
// 		name: '',
// 		image: url ,
// 		field: [],
// 		twitter: '',
// 		instagram: '',
// 		genres: []
// 	})
	
	 handleChange =(e) => {
		const {id, value} = e.target
		this.setState((state) => {
			return {
				[id]:value,
				// field: state.field.concat([value])
			}
		})

		// console.log([value])
		// setInputs({...inputs, [id]: value})
		// setField(field.concat([value]))
		// console.log([value], [id])
}

	// const handleChangeFields= (e) => {
	// 		setField(field.concat([e.target.value]))
	// 		console.log(e.target.value)
	// }

	// const handleChangeGenre = (e) => {
	// 	setGenres(genres.concat([e.target.value]))
	// 	console.log(e.target.value)
	// }

	 handleChangeImage= (e) =>  {
		if (e.target.files[0]) {
				// setImage(e.target.files[0])
				this.setState({
					image: e.target.files[0]
				})
		}
	}


	 handleImageSubmit = ()=> {
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
					this.setState({
						url: url
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
		// createProfile(state) //this is passed to mapDispatchToProps as the project
		// history.push('/')

	}



	render() {
				// console.log('image', image)
		return (
				<form onSubmit={((e) => this.handleSubmit(e))}>
					<h2>Submit</h2>
					<div className="ui form">
						<div className="two fields">
						<Fields label="Your preferred name" type="text" id="name" onChange={((e) => this.handleChange(e))}/>
						<div>
							<progress value={this.state.progress} max="100"/>
							<Fields label="Upload an image" type="file" id="image" accept="image/*" onChange={(e) =>this.handleImageSubmit(e)}/>
							<button className="ui button"onClick={() =>this.handleImageSubmit()}>Add</button>
							<img src={this.state.url} alt=""/>
						</div>
					</div>

					<div className="two fields">
						<Fields label="Instagram" type="text" id="instagram" placeholder="https://www.instagram/com/*" onChange={((e) => this.handleChange(e))}/>
						<Fields label="Twitter" type="text" id="twitter" placeholder="https://www.twitter/com/*" onChange={((e) => this.handleChange(e))}/>
					</div>

					<div className="two fields">
						<Fields label="Website" type="text" id="website" onChange={((e) => this.handleChange(e))}/>
						<Fields label="Email" type="text" id="email" onChange={((e) => this.handleChange(e))}/>
					</div>

				  <div className="inline fields">
						<h3>
							Please select all that apply
						</h3>
						<div className="four fields">
							<Fields type="checkbox" label="DJ" value="DJ"id="field" onChange={((e) => this.handleChange(e))}/>
							<Fields type="checkbox" label="Designer" value="Designer"id="field" onChange={((e) => this.handleChange(e))}/>
							<Fields type="checkbox" label="Film Production" value="Film Production"id="field" onChange={((e) => this.handleChange(e))}/>
						</div>
					</div>

					<div className="inline fields">
						<h3>
							What genres of music do you specialize in?
						</h3>
						<div className="four fields">
							<Fields type="checkbox" label="Hip-Hop" value="Hip-Hop"id="genres" onChange={((e) => this.handleChange(e))}/>
							<Fields type="checkbox" label="House" value="House"id="genres" onChange={((e) => this.handleChange(e))}/>
							<Fields type="checkbox" label="R&B" value="R&B"id="genres" onChange={((e) => this.handleChange(e))}/>
						</div>
					</div>

		
			</div>
					<button className="ui button">Submit</button>
				</form>
		)
	}
}

	 function mapDispatchToProps(dispatch) {
		return {
			createProfile: (profile) => dispatch(createProfile(profile))
		}
	}


export default connect(null, mapDispatchToProps)(CreateProfile)
