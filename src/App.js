import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import Dashboard from './components/dashboard/Dashboard';
import ProfileDetails from './components/profiles/ProfileDetails';
import './index.scss';

const App = ()=> {
  return (
    <div className="ui container">
      <BrowserRouter>
      {/* <Nav /> */}
      <div className="wrapper">
      <Header />
        <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/:newId" component={ProfileDetails}/>
      </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
