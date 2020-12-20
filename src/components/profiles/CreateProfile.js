import React, { Component, useState, useEffect } from 'react';
import {connect} from 'react-redux';
import Fields from '../layout/Fields';
import {createProfile} from '../../store/actions/profileActions';
import {storage} from '../../config/fbConfig'
// import {useHistory} from 'react-router-dom';

// class CreateProfile extends Component {
// 	state = {
// 		name: {},
// 		field: [],
// 		image: null
// 	}
const CreateProfile = ({createProfile}) => {
	// console.log(createProfile)
	const [name, setName] = useState("");
	const [twitter, setTwitter] = useState("")
	const [instagram, setInstagram] = useState("")
	const [website, setWebsite] = useState("")
	const [field, setField] = useState([])
	const [image, setImage] = useState(null)
	const [url, setUrl] = useState(null);
	const [photoLink, setPhotoLink] = useState(null)
	const [progress, setProgress] = useState(0)
	const [inputs, setInputs] = useState({
		name: '',
		image: url ,
		field: [],
		twitter: '',
		instagram: '',
	})
	// console.log(url)
	
	const handleChange =(e) => {
		const {id, value} = e.target
		setInputs({...inputs, [id]: value})
		// console.log(inputs)
}

	function handleChangeCheckbox(e) {
			setField(field.concat([e.target.value]))
	}

	const handleChangeImage= (e) =>  {
		if (e.target.files[0]) {
				setImage(e.target.files[0])
		}
	}

	const handleImageSubmit = ()=> {
		const uploadImage = storage.ref(`/images/${image.name}`).put(image);
		uploadImage.on(
			"state_changed",
			snapshot => {
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setProgress(progress)
			},
			err => {
				console.log(err)
			},
			() => {
				storage
				.ref("images")
				.child(image.name)
				.getDownloadURL()
				.then( (url) => {
					setUrl(url)
					// console.log(url)
					// console.log(setUrl)
					// const newUrl = url.replace(/\?.+/g,"$'")
					// console.log(newUrl)
				})
				.catch((err) => {
					console.log(err)
				})
			}
			)

			if (setUrl === String) {
				return url
			}
			console.log(url)
		}

	const handleSubmit =(e)=>  {
			// let history = useHistory()

		e.preventDefault();
		// if (url === string) {

		// }
		console.log(inputs)
		// createProfile(() => inputs)
		// createProfile(state) //this is passed to mapDispatchToProps as the project
		// history.push('/')

	}
	// render() {
				// console.log('image', image)
		return (
				<form onSubmit={(e) => handleSubmit(e)}>
					<h2>Submit</h2>
					<div className="ui form">
						<div className="two fields">
					<Fields label="Your preferred name" type="text" id="name" onChange={(e) => handleChange(e)}/>
					<div>
						<progress value={progress} max="100"/>
					<Fields label="Upload an image" type="file" id="image" accept="image/*" onChange={(e) =>handleChangeImage(e)}/>

					<button className="ui button"onClick={() =>handleImageSubmit()}>Add</button>
					<img src={url} alt=""/>
					</div>

					</div>
					<div className="two fields">
					<Fields label="Instagram" type="text" id="instagram" placeholder="https://www.instagram/com/*" onChange={(e) => handleChange(e)}/>
					<Fields label="Twitter" type="text" id="twiter" placeholder="https://www.twitter/com/*" onChange={(e) => handleChange(e)}/>
					</div>
					<div className="two fields">
						<Fields label="Website" type="text" id="website" onChange={(e) => handleChange(e)}/>
					<Fields label="Email" type="text" id="email" onChange={(e) => handleChange(e)}/>
					</div>

				  <div className="inline fields">
			<h3>
				Please select all that apply
			</h3>
				<div className="four fields">
				<Fields type="checkbox" label="DJ" value="DJ"id="title" onChange={(e) => handleChangeCheckbox(e)}/>
				<Fields type="checkbox" label="Designer" value="Designer"id="title" onChange={(e) => handleChangeCheckbox(e)}/>
				<Fields type="checkbox" label="Film Production" value="Film Production"id="title" onChange={(e) => handleChangeCheckbox(e)}/>
				</div>
		</div>

		
			</div>
					<button className="ui button">Submit</button>
				</form>
		)
	}

	const mapDispatchToProps = (dispatch) => {
		return {
			createProfile: (profile) => dispatch(createProfile(profile))
		}
	}

export default connect(null, mapDispatchToProps)(CreateProfile)
