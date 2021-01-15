import React, {Fragment} from 'react'
import { film, design, tech, photography, writing} from './reusable/arrays'
import {GenreInputs} from './reusable/renderedInputs'
import Titles from './Titles'

const Page = ({state, handleChangeGenre, handleChangeTitle, deselectAll, handleChangeField}) => {
	// console.log(state)
		const {  field,  genre, title , industry} = state;
		// console.log(industry)
	const page =[]

	industry.forEach(select => {
	// 	if (select === "Music") {
	// 		page.push(
	// 		<GenreInputs 
	// 							key={genre}
	// 				handleChangeGenre={handleChangeGenre}
	// 				industry={industry}
	// 				genre={genre}

			
	// 		/>)
	// 	}


		if (select === "DJ" || select === "Vocal Artist" || select === "Sound Engineer" || select === "Music Producer") {
				page.push(<GenreInputs 
					key={genre}
					handleChangeGenre={handleChangeGenre}
					industry={industry}
					genre={genre}
					/>)
		}

		if (field === 'Film Production') {
				page.push(<Titles 
					key={film} 
					handleChangeField={handleChangeField} 
					array={film}
					field={field}
					title={title}
					/>)
				} 
			
		if (field === 'Design') {
			page.push(<Titles 
				key={design} 
				handleChangeField={handleChangeField} 
				title={title} 
				array={design}
				field={field}
				/>)
		}

		if (field === 'Tech') {
			page.push(<Titles 
				key={tech} 
				handleChangeField={handleChangeField} 
				title={title} 
				array={tech}
				field={field}
			/>)
		}
		
		if (field === 'Photography') {
			page.push(<Titles 
				key={photography} 
				handleChangeField={handleChangeField} 
				title={title} 
				array={photography}
				field={field}
			/>)
		}

		if (field === 'Writing') {
			page.push(<Titles 
			key={writing}
			handleChangeField={handleChangeField}
			title={title}
			array={writing}
			field={field}
			/>)
		}
		else {
			return null
		}

	})


	return (
		<Fragment>
			<ul className="ks-cboxtags">
				{page}
			</ul>

			{/* <button className="ui button" onClick={deselectAll}>Clear Selection</button> */}
		</Fragment>
	)
}

export default Page
