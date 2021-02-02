import React, {Fragment, useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
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

import './index.scss';
import ProfileSummary from './components/profiles/ProfileSummary';

const App = (props)=> {
  const {profiles} = props;
  const app = "wecreate"
  const [search, setSearch] = useState(null)

  const searchSpace=(e)=>{
  let keyword = e.target.value;	
  // console.log(keyword)
  setSearch(keyword)
  }

    if (profiles === undefined) {
      return (
    <div className="ui segment">
    <div className="ui active centered inline loader"></div>
    </div>
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
    <Nav app={app} searchSpace={searchSpace}/>
      <div className="ui container">

    <div className="wrapper fade-in">
    <Header app={app} />
    <Switch>
    <Route exact path="/" render={() => <Dashboard app={app} toRender={toRender}/>} />
    <Route path="/profile/:id" component={ProfileDetails} />
    {/* <Route path="/profile:/id" render={()=> <ProfileDetails filter={()=>setSearch(null)}/>}/> */}
    <Route path="/create" component={CreateProfile} />
    <Route path="/admin" component={Admin} />
    <Route path="/thankyou" component={ThankYou} />
    <Route path="/FAQ" render={() =><Faq app={app}/>} />
    </Switch>
    </div>
    </div>
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
