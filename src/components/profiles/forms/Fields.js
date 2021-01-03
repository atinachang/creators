import { FormikProvider } from "formik";
import React, {Fragment} from 'react'

const Fields = ({ name, id, label, value, type,placeholder, onChange, accept, checked }) => {
   return (
  <Fragment>
  <label htmlFor={label}>{label}</label>
  <input
  id={id}
  name={name}
  type={type}
  value={value}
  onChange={onChange}
  placeholder={placeholder}
  accept={accept}
  />
  </Fragment>
   )
}

const Checkbox = ({label, name,id, value, type, onChange, checked, isSelected, onCheckboxChange}) => {
  return (
    <div className="field">
      <label>{label} 
      <input type="checkbox"
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange} 
        />
      </label>
    </div>
  )
}

export {Fields, Checkbox}
