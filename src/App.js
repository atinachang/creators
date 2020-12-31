import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import Dashboard from './components/dashboard/Dashboard';
import ProfileDetails from './components/profiles/ProfileDetails';
import CreateProfile from './components/profiles/CreateProfile';
// import CreateProfileHooks from './components/profiles/CreateProfileHooks'
import Footer from './components/layout/Footer';
// import SignIn from './components/admin/auth/SignIn';
import Admin from './components/admin/Admin';
// import AdminList from './components/admin/AdminList'
import ThankYou from './components/layout/ThankYou'
import ReportBug from './components/profiles/forms/bug/ReportBug'
import Suggestion from './components/profiles/forms/suggest/Suggestion'
import {connect} from 'react-redux';
import { compose } from 'redux';
// import firestoreconnect after connecting reducer
import {firestoreConnect} from 'react-redux-firebase';

import './index.scss';

const App = (props)=> {
  const {profiles} = props;
  const app = "wecreate.to"
  return (
    <Fragment>
      <div className="ui container">
    <BrowserRouter>

    <Nav />
    <div className="wrapper">
    <Header app={app} />
    <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/profile/:id" component={ProfileDetails} />

    <Route path="/create" component={CreateProfile} />
    <Route path="/admin" component={Admin} />
    <Route path="/thankyou" component={ThankYou} />
    <Route path='/report' component={ReportBug} />
    <Route path='/suggestion' component={Suggestion} />
    </Switch>
    </div>
    </BrowserRouter>
    <Footer app={app}/>
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
