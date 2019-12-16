import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './app';
import * as serviceWorker from './serviceWorker';
import HttpsRedirect from 'react-https-redirect';
import 'bootstrap/dist/css/bootstrap.min.css';

const loggerMiddleware = createLogger();
const store = createStore(reducers, applyMiddleware(thunk));
// const store = createStore(reducers, applyMiddleware(thunk, loggerMiddleware));

ReactDOM.render(
  <HttpsRedirect>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
    </BrowserRouter>
  </HttpsRedirect>
, 
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
