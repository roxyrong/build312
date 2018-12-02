import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import LandingPage from "./components/landing_page";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
    render() {
        return (
          <div>
            <switch>
              <Route exact path='/' component={LandingPage}/>
            </switch>
          </div>
    
        );
      }
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
