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


export {Fields}
