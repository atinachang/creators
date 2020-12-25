import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import Dashboard from './components/dashboard/Dashboard';
import ProfileDetails from './components/profiles/ProfileDetails';
import CreateProfile from './components/profiles/CreateProfile';
import Footer from './components/layout/Footer';
import SignIn from './components/admin/auth/SignIn';
import Admin from './components/admin/Admin';
import AdminList from './components/admin/AdminList'
import {connect} from 'react-redux';
import { compose } from 'redux';
// import firestoreconnect after connecting reducer
import {firestoreConnect} from 'react-redux-firebase';

import './index.scss';

const App = (props)=> {
  // console.log(profiles)
  // console.log(auth)
  const {auth} = props
  // const nav = !auth.uid ? <Nav/> : null
  return (
    <Fragment>
      <div className="ui container">
    <BrowserRouter>

    <Nav />
    {/* {nav} */}
    <div className="wrapper">
    {/* <Header /> */}
    <Switch>
    <Route exact path="/" component={Dashboard} />
    {/* <Route path="/:id" render={(props) => <ProfileDetails props={props} /> }/> */}
    <Route path="/profile/:id" component={ProfileDetails} />

    <Route path="/create" component={CreateProfile} />
    {/* <Route path="/signin" component={SignIn}/> */}
    <Route path="/admin" component={Admin} />
    {/* <Route path='/admin/list' component={AdminList} /> */}
    </Switch>
    </div>
    </BrowserRouter>
    {/* <Footer /> */}
    </div>
    </Fragment>
  );
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

// export default App
