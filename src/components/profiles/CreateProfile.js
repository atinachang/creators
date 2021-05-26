import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { createProfile } from "../../store/actions/profileActions";
import { parent } from "../helpers/arrays";
import firebase from "../../config/config";
import { v4 as uuid } from "uuid";
import SimpleReactValidator from "simple-react-validator";
import Form from "./Form";
import Checkbox from "../helpers/Checkbox";

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
      soundcloud: "",
      field: [],
      genre: [],
      title: [],
      industry: [],
      pronoun: [],
      workPhoto1: "",
      workPhoto2: "",
      workPhoto3: "",
      checkboxes: parent.reduce(
        (options, option) => ({
          ...options,
          [option]: false,
        }),
        {}
      ),
      live: false,
      createdAt: new Date(),
    };
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  // ! TO DO
  // move handleChangeImage to helpers folder - cant be done?
  // create reusable function for handleFields, handleIndustry, handleGenre, etc
  // add multi/single image upload to form
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  selectAllCheckboxes = (isSelected) => {
    Object.keys(this.state.checkboxes).forEach((checkbox) => {
      this.setState((prevState) => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected,
        },
      }));
    });
  };

  handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    const { industry } = this.state;

    this.setState((prevState) => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      },
      industry: checked
        ? [...industry, value]
        : industry.filter((el) => el !== value),
    }));
  };

  handleStatesChange = async (e, update) => {
    const { value } = e.target;

    this.setState({
      [update]: update.concat(value),
    });
  };

  handleChangeGenre = (e) => {
    const { value, checked } = e.target;
    const { genre } = this.state;
    this.setState({
      genre: checked ? [...genre, value] : genre.filter((el) => el !== value),
    });
  };

  handleChangeField = (e) => {
    const { value, checked } = e.target;
    const { field } = this.state;

    this.setState({
      field: checked ? [...field, value] : field.filter((el) => el !== value),
    });
  };

  handleChangeTitle = (e) => {
    const { value, checked } = e.target;
    const { title } = this.state;

    this.setState({
      title: checked ? [...title, value] : title.filter((el) => el !== value),
    });
  };

  handleChangePronoun = (e) => {
    const { value, checked } = e.target;
    const { pronoun } = this.state;

    this.setState({
      pronoun: checked
        ? [...pronoun, value]
        : pronoun.filter((el) => el !== value),
    });
  };

  handleChangeImage = async (e, name) => {
    const file = e.target.files[0];
    const id = uuid();
    const imagesRef = firebase.storage().ref("images").child(id);
    await imagesRef.put(file);

    imagesRef.getDownloadURL().then((url) => {
      // console.log(url)
      this.setState({
        [name]: url,
      });
    });
  };

  handleReset = (e) => {
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
      soundcloud: "",
      field: [],
      genre: [],
      title: [],
      industry: [],
      checkboxes: parent.reduce(
        (options, option) => ({
          ...options,
          [option]: false,
        }),
        {}
      ),
      live: false,
      createdAt: new Date(),
    });
  };

  handleSubmit = (e) => {
    const { name, checkboxes } = this.state;
    const { createProfile, history } = this.props;
    e.preventDefault();

    if (this.validator.allValid()) {
      alert(`Thanks ${name}! You've submitted the form! \uD83D\uDE00 `);
      createProfile(this.state);
      history.push("/thankyou");
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }

    Object.keys(checkboxes).filter((checkbox) => checkboxes[checkbox]);
  };

  createCheckbox = (option) => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
      value={option}
    />
  );

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} className="ui form" noValidate>
          <Form
            state={this.state}
            handleChange={this.handleChange}
            validator={this.validator}
            handleChangeImage={this.handleChangeImage}
            createCheckbox={this.createCheckbox}
            selectAllCheckboxes={this.selectAllCheckboxes}
            handleChangeGenre={this.handleChangeGenre}
            handleChangeTitle={this.handleChangeTitle}
            handleCheckboxChange={this.handleCheckboxChange}
            handleChangePronoun={this.handleChangePronoun}
            handleChangeField={this.handleChangeField}
          />

          <button className="ui button" onClick={this.handleSubmit}>
            Submit
          </button>
          <button className="ui button" onClick={this.handleReset}>
            Reset Form
          </button>
        </form>
      </Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createProfile: (profile) => dispatch(createProfile(profile)),
  };
}

export default connect(null, mapDispatchToProps)(CreateProfile);
