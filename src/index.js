import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import { Router, Route, Link, browserHistory } from 'react-router';
 
const element = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
    </Router>
);

render(element, document.querySelector('.container'));