import React from 'react';
import { render } from 'react-dom';
import HomeContainer from './components/home';
import InputContainer from './components/input';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middlewares = [ thunk ];

const store = createStore(reducers,applyMiddleware(...middlewares));

render(
	<Provider store={store}>
		<div>
			<HomeContainer />
			<InputContainer />
		</div>
	</Provider>, document.getElementById("root")
)


