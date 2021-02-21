import React, {Fragment, useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from './components/layout/Nav';
import Dashboard from './components/dashboard/Dashboard';
import ProfileDetails from './components/profiles/ProfileDetails';
import CreateProfile from './components/profiles/CreateProfile';
import Footer from './components/layout/Footer';
import Admin from './components/admin/Admin';
import ThankYou from './components/layout/ThankYou'
import Faq from './components/layout/Faq'
import {connect} from 'react-redux';
import { compose } from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import Loader from './components/layout/Loader'
import FilterView from './components/layout/views/FilterView'
import './index.scss';

export const app = "wecreate"

const App = (props)=> {
  const {profiles} = props;
  const [search, setSearch] = useState("")

  // dashboard - render if search === null
  // search - render if search !== null; activate on click of searchbar

  // const searchSpace = (e) => {
  //   let keyword = e.target.value;	
  //   console.log(e.target)
  //   setSearch(keyword)
  // }
  // pass searchSpace to FilteredView
  // when user clicks header - reset searchSpace to null?


    if (profiles === undefined) {
      return (
          <Loader />
      )
    } else {

		let toRender = []
		profiles.forEach((data)=>{
      if(search === null) {
				 toRender.push(data)
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
  return (
    <Fragment>
      <BrowserRouter>
      <div className="container">
    <Nav {...props} app={app} setSearch={setSearch} toRender={toRender}  />
    {/* <div className="ui container"> */}

    <div className="fade-in wrapper">
    <Switch>
    <Route exact path="/" render={() => <Dashboard app={app} toRender={toRender} />} />
    <Route path="/search" render={(props) => <FilterView {...props} toRender={toRender} />  }/>          
    <Route path="/profile/:id" render={(props) => <ProfileDetails {...props} setSearch={setSearch}  />}/>          
    <Route path="/create" component={CreateProfile} />
    <Route path="/admin" component={Admin} />
    <Route path="/thankyou" component={ThankYou} />
    <Route path="/FAQ" render={() =><Faq app={app}/>} />
    </Switch>
    </div>
    </div>
    {/* </div> */}
    </BrowserRouter>
    <Footer app={app}/>
    </Fragment>
  );
  }
}

const mapStateToProps = (state) => {
	return {
    profiles: state.firestore.ordered.profiles,
    auth: state.firebase.auth,

	}
}

export default compose(
  connect(
    mapStateToProps),
    firestoreConnect([
{      collection: 'profiles'} 
   ]))(App);
