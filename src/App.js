import React, {Fragment} from 'react';
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

const App = ()=> {
  const app = "WeCreate.to"
  return (
    <Fragment>
    <BrowserRouter>
    <Nav />
      <div className="ui container">

    <div className="wrapper">
    <Header app={app} />
    <Switch>
    <Route exact path="/" render={() => <Dashboard app={app}/>} />
    <Route path="/profile/:id" component={ProfileDetails} />

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
