import React, { Fragment, useState } from 'react'
import ProfileList from '../profiles/ProfileList';
import AdminList from '../admin/AdminList'
import {connect} from 'react-redux';
import { compose } from 'redux';
import {firestoreConnect} from 'react-redux-firebase';


const Dashboard =(props) => {
		const {profiles, auth, app} = props;

	// const [appFilter, setAppFilter] = useState("All")
	const [search, setSearch] = useState(null)

	// 	const filter =(e) => {
	// const {value} = e.target
	// 	setAppFilter(value)
	// }

	if (profiles === undefined) {
	return (
<div className="ui segment">
<div className="ui active centered inline loader"></div>
</div>

)
}
// let profToRender = [];
// profiles.forEach((profile) => {
// 	if (appFilter === "All") {
// 		profToRender.push(profile)
// 	} else{
// 		if (profile.field.includes(appFilter)) {
// 			profToRender.push(profile)
// 		}
// 	} 
// })
  const searchSpace=(e)=>{
		let keyword = e.target.value;	
		console.log(keyword)
		setSearch(keyword)
  }

		let toRender = []
		profiles.filter((data)=>{
      if(search === null) {
				return toRender.push(data)
			}
			else {
				if(
					data.field.toString().toLowerCase().includes(search.toString().toLowerCase()) || 
					data.title.toString().toLowerCase().includes(search.toString().toLowerCase()) || 
					data.genre.toString().toLowerCase().includes(search.toString().toLowerCase()) || 
					data.name.toString().toLowerCase().includes(search.toString().toLowerCase())) {
						toRender.push(data)
				} 
			} 
		})
	const sorted = toRender.sort((a,b) => b.createdAt - a.createdAt)


		const mapped = sorted.map((card) =>{
			return (
				<ProfileList key={card.id} card={card} props={props} />
			)
		});


		const adminmap = sorted.map(card => {
			return (
				<AdminList key={card.id} card={card} />
			)
		})
		const users = auth.uid ? adminmap : mapped;


		return (
			<Fragment>
				<div className="copy">
						<h4>Create. Connect. Flourish. For the community, by the community.</h4>
					<h5>
					{app} is a database of	Freelancers and Creatives in Toronto.
					</h5>
				</div>
				<div className="ui search">
				 <input type="text" className="prompt"  placeholder="Search by Keyword" onChange={(e)=>searchSpace(e)} />
				</div>
				{/* <Filter filter={filter} /> */}
				<div className="ui link cards">
			{auth.isLoaded && users}
			</div>
			</Fragment>
		)
	}

const mapStateToProps = (state) => {
	return {
		profiles: state.firestore.ordered.profiles,
		auth: state.firebase.auth
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'profiles'}
	])
)(Dashboard)