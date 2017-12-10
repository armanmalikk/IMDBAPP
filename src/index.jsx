import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import store from './store.jsx';
import { Provider } from "react-redux";
import Main from './Common/main.component.jsx'
import Home from './Pages/Home/home.component.jsx'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
        </Route>
    </Router>
  </Provider>,
    document.getElementById('container')
);
