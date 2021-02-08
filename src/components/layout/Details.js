import React, { Fragment } from 'react'
import {NavLink} from 'react-router-dom'


export const Socials = ({instagram, twitter, email, bio, name, website}) => {
const igRender= () =>{
		if (!instagram) {
		return null
	}
	return (
		<a href={instagram}>
		<i className={`instagram icon`}></i>
		</a>
	)
}

const emailRender = () =>{
if (!email ) {
		return null
	}
	return (
				<a href={`mailto: ${email}`}>
		<i className={`paper plane icon`}></i>
		</a>
	)
}

const twitRender = () =>{
	if (!twitter) {
		return null
	}
	return (
		<a href={twitter}>
		<i className={`twitter icon`}></i>
		</a>
	)
}

const webRender = () => {
if (!website) {
	return null
}
return (
 <a href={website}>
	 <i className={`linkify icon`}></i>
 </a>
)
}

	return (
		<Fragment>
			<div className="socials">
		<h4>Contact:</h4>
		
		{igRender()}
		{twitRender()}
		{emailRender()}
		{webRender()}
		</div>
		</Fragment>
	)
}

export const Info = ({field, genre, title, filter}) => {
const fieldRender = () => {
	const fieldList = field.map(field => 
	<NavLink to="/search" key={field} >
		<li className="dark"  data-value={field} onClick={filter}>{field}</li>
	</NavLink>
		)
		return (
		<div className="segment">
			<h4>Fields of Work</h4> 
			<ul >{fieldList}</ul>
		</div>
		)
}
const titleRender = () => {

	if (title.length ===0) {
		return null
	}

	const titleList = title.map(title => 
		<NavLink to="/search" key={title}>
			<li className="light" data-value={title} onClick={ filter}>{title}</li>
		</NavLink>
		)
		
		return (
		<div className="segment">
			<h4>
				Expertise
			</h4>
			<ul >{titleList}</ul>
		</div>
		)
	}


	const genreRender = () => {
		const genreList = genre.map(title =>
			<NavLink to="/search" key={title}>
				<li className="light" data-value={ title} onClick={filter}>{title}</li>
			</NavLink>
		)
		if (genre.length === 0) {
			return null
		}

		return (
		<div className=" segment">
			<h4>Genres:</h4>
		{genreList}
		</div>
		)
}
return (
	<Fragment>
		{fieldRender()}
		{titleRender()}
		{genreRender()}


	</Fragment>
)
}


export const Bio =({bio}) => {
	const bioRender = ()=> {
		if (bio.length === 0) {
			return null
		}

		return (
		<div className=" segment">
			<h4>Bio:</h4>
			<p>{bio}</p>
		</div>
		)
}
	return (
		<div className="segment">
			{bioRender()}
		</div>
	)
}

export const Pronoun = ({pronoun}) => {
	const render = () => {
		if (pronoun === undefined || pronoun.length === 0) {
			return null
		}

		return (
			<div className="segment">
				<strong>Pronouns</strong>
				<p>{pronoun}</p>
			</div>
		)
	}
	return (
		<div className="segment">
			{render()}
		</div>
	)
}