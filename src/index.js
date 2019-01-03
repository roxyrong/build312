import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from "./components/landing_page";
import EventPage from './components/event_page';
import Signup from './components/signup';
import Login from './components/login';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import MembershipPage from './components/membership_page';

class App extends React.Component {
    render() {
        return (
          <div>
            <Switch>
              <Route exact path='/' component={LandingPage}/>
              <Route exact path='/event' component={EventPage}/>
              <Route exact path='/signup' component={Signup}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/membership' component={MembershipPage}/>
            </Switch>
          </div>
    
        );
      }
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
