import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import history from './history';
//import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';


import Routes from './Routes';

// const history = createHistory();

const historyMiddleware = routerMiddleware(history);

const middlewares = [ thunk, historyMiddleware ];

console.log(middlewares);

const store = createStore(reducers,applyMiddleware(...middlewares));

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Routes />
		</ConnectedRouter>
	</Provider>, document.getElementById("root")
)


