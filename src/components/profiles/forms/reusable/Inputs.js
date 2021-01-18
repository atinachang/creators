import React from 'react'

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

