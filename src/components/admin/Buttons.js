import React, {Fragment} from 'react'



export const Socials = ({instagram, twitter, email, bio, name, website, field, title, genre}) => {
	// console.log(field)
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

const bioRender = () => {
	if (!bio) {
		return null
	}
	return (
		<div className="bio">
			<h3>About {name}</h3>
			<p>{bio}</p>
		</div>
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
const fieldRender = () => {
	const list=	field.map(item => {
			<p>{item}</p>
	})
	return (
		<div>
			<li>
				{list}
			</li>
		</div>
	)
}
const titleRender = () => {
	// let data =[]
// 	data = title.split(",")
// console.log(data)
	return (
		title.map(item => {
			<p className="ui basic button">{item}</p>
		})
	)
}
	return (
		<Fragment>
			<div>
			{bioRender()}

			</div>

				{fieldRender()}
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

