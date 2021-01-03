import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange, value }) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
				name={label}
				value={value}
        checked={isSelected}
        onChange={onCheckboxChange}
      />
      {label}
    </label>
  </div>
);

export default Checkbox;