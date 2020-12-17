import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import Dashboard from './components/dashboard/Dashboard';
import './index.css';

const App = ()=> {
  return (
    <div className="ui container">
      <BrowserRouter>
      {/* <Nav /> */}
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
