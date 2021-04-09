import React, {Fragment} from 'react'
import {marketing, music, tech, applied, performer, filmarts} from './reusable/arrays'
import { add } from '../../helpers/helpers'


export const IndustriesRender = ({state, handleChangeTitle, handleChangeField})=> {
	const { industry } = state;

	let fields = []


 industry.forEach(selected => {
		
	 if (selected === 'Marketing') {
			add(fields, selected, marketing, handleChangeTitle)
		}

		if (selected === "Music") {
			add(fields, selected, music, handleChangeField)

		}

		if (selected === "Tech") {
			add(fields, selected, tech, handleChangeField)
		}

		if (selected === "Film & Media Arts") {
			add(fields, selected, filmarts, handleChangeField)
		}

		if (selected === "Applied Arts") {
			add(fields, selected, applied, handleChangeField)
		}

		if (selected === "Performing Arts") {
			add(fields, selected, performer, handleChangeTitle)
		}
		else {
			return null
		}

	})

	return (
		<Fragment>
			{fields}
		</Fragment>
	)
}
