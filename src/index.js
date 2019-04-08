import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MinMax from './components/MinMax';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux';
import weatherApp from './reducers/reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const store = createStore(weatherApp, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/minmax" component={MinMax} />
        <Route path="*" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
