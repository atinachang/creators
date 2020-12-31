import React, {Fragment} from 'react'
import Fields from '../Fields'
const Input = ({label, name, type, id, value, onChange}) => {
	return (
		<div className="field">
			<label htmlFor={label}>{name}</label>
			<input type={type}
				name={name}
				id={id}
				value={value}
				onChange={onChange}
			/>
		</div>
	)
}

export default Input
