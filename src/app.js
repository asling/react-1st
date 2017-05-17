import React from 'react';
import { render } from 'react-dom';
import HomeContainer from '../../component/home';
import InputContainer from '../../component/input';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';

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


