import React from 'react'
import {fields} from '../profiles/forms/arrays'

const Filter = ({filter}) => {
	const options = fields.map(field => {
	return (
		<option key={field} value={field}>{field}</option>
	)
})
	return (
		<div className="filter">
			<label htmlFor="">Filter by Category</label>

			<select className="ui inverted basic button"
				name="filter"
				id="filter"
				onChange={filter}
			>	
			<option value="All">All</option>
			{options}
			</select>
		</div>
		)
}

export default Filter
