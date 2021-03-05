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
				industryState: false,
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

	newIndustryArr= [
		{
			industry: "Applied Arts",
			checked: false,
		},
		{
			industry: "Film & Media Arts",
			checked: false,
			}
	]
				
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
		const { industry, industryState } = this.state;

		this.setState(prevState => ({
			checkboxes: {
				...prevState.checkboxes,
				[name]: !prevState.checkboxes[name]
			},
			industry: industry.concat(value),
			industryState: true
		}));
		// console.log("industry", industry)
		// console.log(industryState)
	}
	
	
handleStatesChange = async (e, update) => {
	const { value } = e.target;
	// const { update } = this.state.[update];
	// console.log(value)

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
		// console.log("field",field)
	}

	handleChangeTitle = (e) => {
		const {value} = e.target
		const {title} = this.state

		this.setState({
			title:  title.concat(value)
		})
		// console.log("title",title)
	}

	handleChangePronoun = (e) => {
		const {value} = e.target;
		const {pronoun} = this.state

		this.setState({
			pronoun: pronoun.concat(value)
		})
		// console.log(pronoun)
	}

		handleChangeImage= async (e,  name) =>  {
		const file = e.target.files[0];
		const id = uuid()
		const imagesRef = firebase.storage().ref("images").child(id);
		await imagesRef.put(file)

			imagesRef.getDownloadURL().then(url => {
			// console.log(url)
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
		// console.log("industry state",this.state.industryState)

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
