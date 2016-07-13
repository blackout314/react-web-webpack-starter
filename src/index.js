import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
import List from "./components/List";
import Detail from "./components/Detail";

const element = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={List} />
            <Route path="/detail" component={Detail} />
        </Route>
    </Router>
);

render(element, document.querySelector('.container'));