import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import Layout from './components/layout';
import HomeContainer from './components/home';
import InputContainer from './components/input';
import listView from './components/list';

import Routes from './Routes';

const history = createHistory();

const historyMiddleware = routerMiddleware(history);

const middlewares = [ thunk, historyMiddleware ];

const store = createStore(reducers,applyMiddleware(...middlewares));

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Routes />
		</ConnectedRouter>
	</Provider>, document.getElementById("root")
)


