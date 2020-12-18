import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import Dashboard from './components/dashboard/Dashboard';
import ProfileDetails from './components/profiles/ProfileDetails';
import Footer from './components/layout/Footer';
import {connect} from 'react-redux';
import { compose } from 'redux';
// import firestoreconnect after connecting reducer
import {firestoreConnect} from 'react-redux-firebase';

import './index.scss';

const App = ()=> {
  return (
    <Fragment>
      <div className="ui container">
    <BrowserRouter>
    <Nav />
    <div className="wrapper">
    <Header />
    <Switch>
    <Route exact path="/" component={Dashboard} />
    {/* <Route path="/:id" render={(props) => <ProfileDetails props={props} /> }/> */}
    <Route path="/:id" component={ProfileDetails} />
    </Switch>
    </div>
    </BrowserRouter>
    <Footer />
    </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
	return {
		profiles: state.firestore.ordered.profiles
	}
}

export default compose(
  connect(
    mapStateToProps),
    firestoreConnect([
{      collection: 'profiles'} 
   ]))(App);
