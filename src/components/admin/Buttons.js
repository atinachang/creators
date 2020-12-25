import React, {Fragment} from 'react'



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
	return (
		<Fragment>
			{bioRender()}
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

