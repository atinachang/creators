import React, {Fragment} from 'react'

const Inputs = ({ name, id, label, value, type,placeholder, onChange, accept, checked }) => {
   return (
  <li>
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
  </li>
   )
}


export {Inputs}
