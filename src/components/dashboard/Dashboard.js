import React, { Fragment, Component, useState } from 'react'
import ProfileList from '../profiles/ProfileList';
import AdminList from '../admin/AdminList'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import { compose } from 'redux';
import {fields, film} from '../profiles/forms/arrays'
import {Filter, ArrayFilter} from '../layout/filters/Filter'
import {firestoreConnect} from 'react-redux-firebase';


const Dashboard =(props) => {
		const {profiles, auth} = props;
	// console.log(profiles)

	const [appFilter, setAppFilter] = useState("All")
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

		// this.setState({search:keyword})
		console.log(keyword)
		setSearch(keyword)
  }

// const tagFilter = e => {
// 	console.log(e.target.firstChild.data)
// }
		
	const sorted = profiles.sort((a,b) => b.createdAt - a.createdAt)

		let toRender = []
		profiles.filter((data)=>{
      if(search === null) {
				toRender.push(data)
			}
			else {
				if(data.field.toString().toLowerCase().includes(search.toString().toLowerCase()) || data.title.toString().toLowerCase().includes(search.toString().toLowerCase()) || data.genre.toString().toLowerCase().includes(search.toString().toLowerCase())) {
					toRender.push(data)
				}
			}
		})


		const mapped = toRender.map((card) =>{
			return (
				<ProfileList key={card.id} card={card} props={props} />
			)
		});

		// const items = sorted.filter((data)=>{
    //   if(search === null) {
		// 		return data
		// 	}
    //   else if(data.field.includes(search) || data.title.includes(search) ){
		// 		console.log(search)
		// 		console.log(data)
		// 			return data
    //   }
    // }).map(data =>{
    //   return(
		// 		<ProfileList key={data.id} props={props} profiles={profiles} data={data}/>
    //   )
    // })

		// const adminmap = sorted.map(card => {
		// 	return (
		// 		<AdminList key={card.id} card={card} />
		// 	)
		// })
		// const users = auth.uid ? adminmap : mapped;


		return (
			<Fragment>
				<div className="ui search">
				 <input type="text" className="prompt"  placeholder="Search by keyword" onChange={(e)=>searchSpace(e)} />
				</div>
				{/* <Filter filter={filter} /> */}
				<div className="ui link cards">
			{/* {auth.isLoaded && users} */}
			{mapped}
			{/* {items} */}
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