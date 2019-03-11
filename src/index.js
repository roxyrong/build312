import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import LandingPage from "./components/landing_page";
import EventPage from './components/event_page';
import Signup from './components/signup';
import Login from './components/login';
import MembershipPage from './components/membership_page';
import MembershipPayment from './components/membership_payment';
import Payment from './components/payment';
import DonatePage from './components/donation_page';
import ProcessDonation from './components/donation_page/process_donation'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducers, applyMiddleware(thunk));

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
              <Route exact path='/membership/payment' component={MembershipPayment} />
              <Route exact path='/payment' component={Payment}/>
              <Route exact path='/donate' component={DonatePage} />
              <Route exact path='/process-donate' component = {ProcessDonation} />
            </Switch>
          </div>
    
        );
      }
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, 
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
