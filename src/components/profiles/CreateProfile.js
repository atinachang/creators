import React, { Component, useState, useEffect, Fragment } from 'react';
import {connect} from 'react-redux';
import firebase from '../../config/config'
import {createProfile} from '../../store/actions/profileActions';
import {storage} from '../../config/config';
import {v4 as uuid} from 'uuid'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {DisplayingErrorMessagesSchema} from './forms/Errors'
//  import { Formik, Form, Field } from 'formik';
//  import * as Yup from 'yup';
import StepOne from './forms/StepOne';
import StepTwo from './forms/StepTwo'
import StepThree from './forms/StepThree'
// import {fields} from './forms/arrays'
import SimpleReactValidator from 'simple-react-validator';
import Form from './Form'



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
				isChecked: null,
				live: false,
				createdAt: new Date(),
		} 
		this.validator = new SimpleReactValidator();
	}
				

	handleChange =(e) => {

		const {name, value} = e.target
		this.setState({
			[name]: value},
		)
	}

	// handleChecked = () => {
	// 	const {isChecked, genre} = this.state
	// 	if (genre.length > 0) {
  //     genre.map((item) => (genre.done = !isChecked));
	// 		this.setState({
	// 			isChecked: !isChecked
	// 		})
	// 	}
	// 	console.log(isChecked, genre)
	// }
	//   handleCheckboxChange = e => {
  //   const { name } = e.target;

  //   this.setState(prevState => ({
  //     checkboxes: {
  //       ...prevState.checkboxes,
  //       [name]: !prevState.checkboxes[name]
  //     }
	// 	}));
	// 	console.log(this.state.checkboxes)
  // };


	//   selectAllCheckboxes = isSelected => {
  //   Object.keys(this.state.checkboxes).forEach(checkbox => {
  //     // BONUS: Can you explain why we pass updater function to setState instead of an object?
  //     this.setState(prevState => ({
  //       checkboxes: {
  //         ...prevState.checkboxes,
  //         [checkbox]: isSelected
  //       }
  //     }));
  //   });
	// };

	handleChangeFields= (e) => {
		const {value} = e.target
		const {field} = this.state

		this.setState({
			field: field.concat(value),
		})
		console.log(field)
	}

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

	 const {name, email, twitter, instagram, website, photo, field, userId} = this.state;
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

}


// validate = values => {
// 	const errors = {};
// 	if (!values.name) {
// 		errors.name = 'Required';
// 	} 
// //  else if (values.name.length > 15) {
// //    errors.name = 'Must be 15 characters or less';
// //  }

// 	if (!values.userId) {
// 		errors.userId = 'Required';
// 	} 
// 	// else if (values.userId.length > 20) {
// 	// 	errors.userId = 'Must be 20 characters or less';
// 	// }

// 	if (!values.email) {
// 		errors.email = 'Required';
// 	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
// 		errors.email = 'Invalid email address';
// 	}

// 	return errors;
// };

_next = (e) => {
let currentStep = this.state.currentStep
	currentStep = currentStep >= 2? 3: currentStep + 1
	this.setState({
		currentStep: currentStep
	})	


};
	
	
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
const {name, email, twitter, instagram, website, photo, field, 
	currentStep, genre, bio, title, errors, userId} = this.state;

  //  const formik = useFormik({
  //    initialValues: {
  //      name: '',
  //      userId: '',
  //      email: '',
  //    },
  //    validate,
  //    onSubmit: values => {
  //      alert(JSON.stringify(values, null, 2));
  //    },
  //  });

	return (
		<Fragment>
			{/* <Formik        
				initialValues={{
				name: '',
				email: '',
				userId: ''
				}}
				validationSchema={DisplayingErrorMessagesSchema}			
			>
			{({ errors, touched }) => (
				<Form className="ui form" onSubmit={this.handleSubmit}>
					<div className="ui form error">

						<StepOne 
						errors={errors} 
						touched={touched} 
						currentStep={currentStep}
						name={name}
						userId={userId}
						email={email}
						handleChange={this.handleChange}
						validator={this.validator}
						/>
					<button type="submit" className="ui button">Submit</button>
						</div>
				</Form>
				)}
			</Formik> */}

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
					/>
					{/* <StepOne 
					currentStep={currentStep} 
					handleChange={this.handleChange} 
					email={email} 
					name={name} 
					twitter={twitter} 
					instagram={instagram} 
					website={website} 
					handleChangeImage={this.handleChangeImage}
					photo={photo} 
					bio={bio}
					userId={userId}
					userId={userId}
					handleChange={this.handleChange}
					validator={this.validator}
					/> */}
					{/* <StepTwo 
          currentStep={currentStep} 
					handleChangeFields={this.handleChangeFields} 
        />
					<StepThree 
					currentStep={currentStep} 
					handleChecked={this.handleChecked}
          handleChangeGenre={this.handleChangeGenre}
					handleChangeTitle={this.handleChangeTitle} 
					genre={genre} 
					field={field} 
					title={title}
        /> */}
				<button className="ui button" onClick={this.handleSubmit}>Submit</button>
				{/* {this.resetButton()}
        {this.previousButton()}
        {this.nextButton()} */}
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
