import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from "./components/landing_page";
import DashboardPage from "./components/dashboard_page"
import EventPage from './components/event_page';
import Signup from './components/signup';
import Login from './components/login';
import MembershipPage from './components/membership_page';
import MembershipPayment from './components/membership_payment';
import DonatePage from './components/donation_page';
import ProcessDonationPage from './components/process_donation_page';
import ContactPage from './components/contact_page'
import { history } from './helpers/history';
import { alertActions } from './actions/alert_action';
import { PrivateRoute } from './components/private_route';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
    });
}

    render() {
        return (
          <div>
            <Router history={history}>
             <Switch>
              <Route exact path='/' component={LandingPage}/>
              <PrivateRoute exact path="/dashboard" component={DashboardPage} />
              <Route exact path='/event' component={EventPage}/>
              <Route exact path='/signup' component={Signup}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/membership' component={MembershipPage}/>
              <Route exact path='/membership/payment' component={MembershipPayment} />
              <Route exact path='/donate' component={DonatePage} />
              <Route exact path='/process-donate' component = {ProcessDonationPage} />
              <Route exact path='/contact' component = {ContactPage} />
              </Switch>
            </Router>
          </div>
    
        );
      }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

export default connect(mapStateToProps)(App); 