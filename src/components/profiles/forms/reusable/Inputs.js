import React, {Fragment} from 'react'

export const Inputs = ({ name, id, label, value, type,placeholder, onChange, accept, checked, className }) => {
   return (
  <li  className={className}>
  <input
  id={id}
  name={name}
  type={type}
  value={value}
  onChange={onChange}
  placeholder={placeholder}
  accept={accept}
  />
     <label htmlFor={label}>{label}</label>

  </li>
   )
}

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
