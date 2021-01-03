import React, { Component, useState, useEffect, Fragment } from 'react';
import {connect} from 'react-redux';
import firebase from '../../config/config'
import {createProfile} from '../../store/actions/profileActions';
import {storage} from '../../config/config';
import {v4 as uuid} from 'uuid'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import StepOne from './forms/StepOne';
import StepTwo from './forms/StepTwo'
import StepThree from './forms/StepThree'
import {fields} from './forms/arrays'
import SimpleReactValidator from 'simple-react-validator';
import Form from './Form'
import Checkbox from './forms/Checkbox'



class CreateProfile extends Component {
	constructor(props) {
		super(props);
			this.state = {
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
				checkboxes: fields.reduce(
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
	}

	  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
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
		const {field} = this.state

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
			},
				field: field.concat(value),

		}));
		console.log(field)
		
  };

	// handleChangeFields= (e) => {
	// 	const {value} = e.target
	// 	const {field} = this.state

	// 	this.setState({
	// 		field: field.concat(value),
	// 	})
	// 	console.log(field)
	// }

	handleChangeGenre = (e) => {
		const {value} = e.target
		const {genre} = this.state
		this.setState({
			genre: genre.concat(value)
		})
		console.log(this.state.genre)
	}

	handleChangeTitle = (e) => {
		const {value} = e.target
		const {title} = this.state
		this.setState({
			title: title.concat(value)
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

// const MySwal = withReactContent(Swal)

	 const {name, email, twitter, instagram, website, photo, field, userId, checkboxes} = this.state;
	 const {createProfile, history} = this.props;
			// let history = useHistory()
		e.preventDefault();
		// e.stopPropagation();

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
	  if (this.validator.allValid()) {
    alert('You submitted the form and stuff!');
  } else {
    this.validator.showMessages();
    // rerender to show messages for the first time
    // you can use the autoForceUpdate option to do this automatically`
    this.forceUpdate();
  }

console.log(this.state)
// createProfile(this.state)
Object.keys(checkboxes)
      .filter(checkbox => checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
      });
}



  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
			onCheckboxChange={this.handleCheckboxChange}
			key={option}
			value={option}
    />
  );

  // createCheckboxes = () => fields.map(this.createCheckbox);

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
					handleChangeFields={this.handleChangeFields}
					createCheckbox={this.createCheckbox}
					selectAllCheckboxes={this.selectAllCheckboxes}
					handleChangeGenre={this.handleChangeGenre}
					handleChangeTitle={this.handleChangeTitle}
					handleChangeGenre={this.handleChangeGenre}
					/>

				<button className="ui button" onClick={this.handleSubmit}>Submit</button>
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
