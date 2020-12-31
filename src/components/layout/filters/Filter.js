import React, {Fragment} from 'react'
import {fields, film} from '../../profiles/forms/arrays'
import {Options} from './Options'

export const Filter = ({filter}) => {
	return (
		<div className="filter">
		<p>Start by searching below</p>

			<label htmlFor="">Filter by Category</label>

			<select className="ui inverted basic button"
				name="filter"
				id="filter"
				onChange={filter}
			>	
			<option value="All">All</option>
			<Options array={fields}/>
			</select>
		</div>
		)
}

export const ArrayFilter = ({array, filter}) => {
	console.log(array)
	// const {field} = prop
	// const expert = []
	// console.log(film)


	return (
			<Fragment>
			<div className="filter">
			
			<label>Filter by Expertise</label>
			<select className="ui inverted basic button"
			name="filter"
			id="filter"
			onChange={filter}
			>
			<Options array={film}/>
			</select>
			{/* <p>film array</p> */}
			</div>
			</Fragment>
	)
}