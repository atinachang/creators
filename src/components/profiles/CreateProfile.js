import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {createProfile} from '../../store/actions/profileActions';
import { parent } from './forms/reusable/arrays'
import firebase from '../../config/config'
import {v4 as uuid} from 'uuid'
import SimpleReactValidator from 'simple-react-validator';
import Form from './Form'
import Checkbox from '../helpers/Checkbox'

class CreateProfile extends Component {
	constructor(props) {
		super(props);
			this.state = {
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
				industry: [],
				pronoun: [],
				// workPhotos: [],
				// file: [],
				workPhoto1: '',
				workPhoto2: '',
				workPhoto3: '',
				// industryState: false,
				checkboxes: parent.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    ),
				live: false,
				createdAt: new Date(),
		} 
		this.validator = new SimpleReactValidator();
	}
				
// ! TO DO
	// move handleChangeImage to helpers folder - cant be done?
	// create reusable function for handleFields, handleIndustry, handleGenre, etc
	// add multi/single image upload to form
	handleChange =(e) => {
		const {name, value} = e.target
		this.setState({
			[name]: value,
			}
		)
	}

	selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
				}
      }));
		})
	};
	

	handleCheckboxChange = e => {
    const { name, value } = e.target;
		const { industry} = this.state

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
			},
			industry: industry.concat(value),
			// industryState: true,
		}));		
		// console.log(industry)
	};
	
handleStatesChange = async (e, update) => {
	const { value } = e.target;
	// const { update } = this.state.[update];
	console.log(value)

	this.setState({
		[update]: update.concat(value)
	})
	// console.log(update)
	}

	handleChangeGenre = (e) => {
		const {value} = e.target
		const {genre} = this.state
		this.setState({
			genre: genre.concat(value)
		})
		// console.log(genre)
	}

	handleChangeField = e => {
		const {value} = e.target;
		const {field} = this.state

		this.setState({
			field: field.concat(value)
		})
		// console.log(field)
	}

	handleChangeTitle = (e) => {
		const {value} = e.target
		const {title} = this.state

		this.setState({
			title:  title.concat(value)
		})
		// console.log(title)
	}

	handleChangePronoun = (e) => {
		const {value} = e.target;
		const {pronoun} = this.state

		this.setState({
			pronoun: pronoun.concat(value)
		})
		// console.log(pronoun)
	}

	handleFiles =async  (e) => {
		const id = uuid();
		const files = Array.from(e.target.files);
		// console.log(files)
		// const images = [];
		let imagesRef;

		const loopImages = files.map(async (file) => {
			imagesRef = firebase.storage().ref("images").child(id);
			await imagesRef.put(file);
			console.log(file)
		})

		const results = await Promise.all(loopImages)
		console.log(results)
			// 	imagesRef.getDownloadURL(file).then(url => {
			// 	console.log(file)
			// 	console.log(url)
			// })

		
		// const imagesRef = firebase.storage().ref("images").child(id);

		// const loopImages = files.forEach(async(file) => {
		// 	const imagesRef = firebase.storage().ref("images").child(id);
		// 		await imagesRef.put(file)

		// })
		// console.log(loopImages)
		// imagesRef.getDownloadURL().then(url => {
		// 	console.log(url)
		// })

	}

	handleFilesUpload = async() => {
		// const {file} = this.state
		// const id = uuid()
		// const imagesRef = firebase.storage().ref("images").child(id);
		// await imagesRef.put(file)

		// imagesRef.getDownloadURL().then(url => {
		// 	console.log(url)
		// 	// this.setState({
		// 	// 	file: file.push(url)
		// 	// })
		// })
		// storageRef.child(`images/${file}`)
	}

	handleImage = async (e, data) => {
		// const { workPhotos } = this.state;
		// let picName;
		// let id;
		// let file;
		// let refURL;
		// let updatedURL = [];


		// const loop = Object.keys(workPhotos).map((key) => {
			// const id = uuid()
		// 	file = workPhotos[key]

		// 	let newRef = storageRef.child(id).put(file).then(snapshot => {
		// 		let progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
		// 		console.log(`Upload is: ${progress}% done`);
		// 		snapshot.ref.getDownloadURL().then(url =>{
			
		// 			let newURL = {
		// 				[key]: url
		// 			}

		// 			refURL = {
		// 				...refURL,
		// 				[key]: newURL,
		// 				key,
		// 			}

		// 			updatedURL.push(newURL);

		// 			let picId;
		// 			mainRef.child('images').on('value', (snap) => (picId = snap.val()));
		// 			console.log(mainRef.bytesTransferred)

		// 			const newUserId = Object.keys(picId).filter((key) => key === userId);
		// 			let newObj;
				

		// 			Object.keys(workPhotos).map(key => {
		// 				const refKey = Object.keys(updatedURL[key] || {}).map(key => {
		// 					return key;
		// 				});

		// 				let date = refKey[0];
		// 				if (refKey.length !== 0) {
		// 					newObj = {
		// 						...newObj,
		// 						[refKey]: {
		// 							date,
		// 							url: updatedURL[key][refKey]
		// 						}
		// 					};
		// 				} else {
		// 					return
		// 					}
		// 					return newObj
						
						
		// 			});
		// 			})
		// 		})
		// 	})
		// }

		// const file = e.target.files[0];
		// const imagesRef = firebase.storage().ref("images").child(id);
		// await imagesRef.put(file)

		
		

		// imagesRef.getDownloadURL().then(url => {
		// 	this.setState({
		// 		[data]: url
		// })
	}
		handleChangeImage= async (e,  name) =>  {
		const file = e.target.files[0];
		const id = uuid()
		const imagesRef = firebase.storage().ref("images").child(id);
		await imagesRef.put(file)

		imagesRef.getDownloadURL().then(url => {
			this.setState({
				[name]: url
			})
		})
	}

	handleReset =(e) => {
		e.preventDefault();
		e.stopPropagation();
		this.setState({
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
			industry: [],
			checkboxes: parent.reduce(
			(options, option) => ({
			...options,
			[option]: false
			}),
			{}
			),
			live: false,
			createdAt: new Date(),
		})
	}


	 handleSubmit =(e)=>  {
	 const {name, checkboxes} = this.state;
	 const {createProfile, history} = this.props;
		e.preventDefault();

	  if (this.validator.allValid()) {
    alert(`Thanks ${name}! You've submitted the form! \uD83D\uDE00 `);
  } else {
    this.validator.showMessages();
    this.forceUpdate();
  }

// console.log(this.state)
	createProfile(this.state)
	history.push('/thankyou')
	Object.keys(checkboxes)
				.filter(checkbox => checkboxes[checkbox])	
}


  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
			onCheckboxChange={this.handleCheckboxChange}
			// onCheckboxChange={this.handleIndustryChange}
			key={option}
			value={option}
    />
  );

	render() {

	return (
		<Fragment>
				<form 
				onSubmit={this.handleSubmit} 
				className="ui form"
				noValidate
			>
					<Form state={this.state}
					handleChange={this.handleChange}
					handleStatesChange={this.handleStatesChange}
					validator={this.validator}
					handleChangeImage={this.handleChangeImage}
					createCheckbox={this.createCheckbox}
					selectAllCheckboxes={this.selectAllCheckboxes}
					handleChangeGenre={this.handleChangeGenre}
					handleChangeTitle={this.handleChangeTitle}
					handleCheckboxChange={this.handleCheckboxChange}
					handleChangeField={this.handleChangeField}
					handleChangePronoun={this.handleChangePronoun}
					/>

				<button className="ui button" onClick={this.handleSubmit}>Submit</button>
				<button className="ui button" onClick={this.handleReset}>Reset Form</button>
				</form>

			</Fragment>
					)
	}
}

	 function mapDispatchToProps(dispatch) {
		return {
			createProfile: (profile) => dispatch(createProfile(profile))
		}
	}


export default connect(null, mapDispatchToProps)(CreateProfile)
