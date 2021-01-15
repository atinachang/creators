import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange, value }) => (
  <li>
    <input
      type="checkbox"
      name={label}
      value={value}
      checked={isSelected}
      onChange={onCheckboxChange}
      />
    <label>
    {label}
    </label>
  </li>
);

export default Checkbox;