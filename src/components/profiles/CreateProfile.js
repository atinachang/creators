import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import firebase from '../../config/config'
import {createProfile} from '../../store/actions/profileActions';
import {v4 as uuid} from 'uuid'
import { parent} from './forms/reusable/arrays'
import SimpleReactValidator from 'simple-react-validator';
import Form from './Form'
import Checkbox from './forms/reusable/Checkbox'



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
				

	handleChange =(e) => {
		const {name, value} = e.target
		this.setState({
			[name]: value,
		}
		)
		console.log(value)
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
				industry: industry.concat(value)
		}));		
  };



	handleChangeGenre = (e) => {
		const {value} = e.target
		const {genre} = this.state
		this.setState({
			genre: genre.concat(value)
		})
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
			title: title.concat(value)
		})
	}

	handleChangePronoun = (e) => {
		const {value} = e.target;
		const {pronoun} = this.state

		this.setState({
			pronoun: pronoun.concat(value)
		})
		console.log(pronoun)
	}

	handleChangeImage= async (e) =>  {
		const file = e.target.files[0];
		const id = uuid()
		const imagesRef = firebase.storage().ref("images").child(id);
		await imagesRef.put(file)

		imagesRef.getDownloadURL().then(url => {
			console.log(url)
			this.setState({
				photo: url
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
