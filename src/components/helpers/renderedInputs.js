import { Inputs } from "./Inputs";
import React, { Fragment } from "react";
import { genres } from "./arrays";

export const GenreInputs = ({ handleChangeGenre, title }) => {
  const mapped = genres.map((item) => {
    return (
      <Inputs
        key={item}
        type="checkbox"
        label={item}
        value={item}
        id={item}
        onChange={(e) => handleChangeGenre(e)}
      />
    );
  });

  return (
    <Fragment>
      <h3>{title} - What genres of music do you specialize in?</h3>
      <ul className="ks-cboxtags">{mapped}</ul>
    </Fragment>
  );
};

export const FieldInputs = ({ onChange, array, className }) => {
  const fieldsMap = array.map((item) => {
    return (
      <Inputs
        className={className}
        key={item}
        type="checkbox"
        label={item}
        value={item}
        id={item}
        onChange={onChange}
      />
    );
  });

  return (
    <Fragment>
      <ul className="ks-cboxtags">{fieldsMap}</ul>
    </Fragment>
  );
};
