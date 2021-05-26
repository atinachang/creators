import React, { Fragment } from "react";
import { parent } from "../helpers/arrays";
import { IndustriesRender } from "./forms/IndustriesRender";
import { Genre, Title } from "./forms/Renders";
import StepOne from "./forms/StepOne";
import PhotoUpload from "./forms/PhotoUpload";

const Form = ({
  state,
  validator,
  handleChange,
  selectAllCheckboxes,
  handleChangeGenre,
  createCheckbox,
  handleChangeTitle,
  handleCheckboxChange,
  handleChangePronoun,
  handleChangeImage,
  handleChangeField,
}) => {
  const deselectAll = (e) => {
    selectAllCheckboxes(false);
    state.field = [];
    state.industry = [];
    state.title = [];
    e.preventDefault();
    e.stopPropagation();
  };
  const createFields = () => parent.map(createCheckbox);

  return (
    <Fragment>
      <h2>Let's get to know you!</h2>
      <h6>Submit yourself or a friend here</h6>
      <h4>Basic Info</h4>

      <StepOne
        validator={validator}
        state={state}
        handleChangeImage={handleChangeImage}
        handleChange={handleChange}
        handleChangePronoun={handleChangePronoun}
      />
      <h4>What do you do? </h4>
      <h6>Please select all that apply</h6>
      <p>
        See category breakdowns{" "}
        <strong>
          <a
            href="/wecreate.pdf"
            style={{ color: "black" }}
            target="_blank"
            rel="noopener noreferrer">
            here
          </a>
        </strong>
      </p>
      <ul className="ks-cboxtags">
        {createFields()}
        <input
          className="ui input"
          type="text"
          placeholder="Other"
          id="field"
          onChange={handleCheckboxChange}
        />
      </ul>

      <button className="ui button" onClick={(e) => deselectAll(e)}>
        Clear Selection
      </button>
      <div className="page">
        <IndustriesRender
          state={state}
          handleChangeTitle={handleChangeTitle}
          handleChangeField={handleChangeField}
        />
        <Genre state={state} handleChangeGenre={handleChangeGenre} />
        <Title state={state} handleChangeTitle={handleChangeTitle} />

        <PhotoUpload state={state} handleChangeImage={handleChangeImage} />
      </div>
    </Fragment>
  );
};

export default Form;
