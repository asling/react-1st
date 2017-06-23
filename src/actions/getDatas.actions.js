import fetch from 'isomorphic-fetch';
import promise from 'es6-promise';

const promisePolyfill = promise.polyfill();

export const RECEIVE_LIST_DETAIL = 'RECEIVE_LIST_DETAIL';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT'

const receiveDetail = (detailName,detail) => ({
	type: RECEIVE_LIST_DETAIL,
	detailName,
	detail : detail.data.children[0],
	dateGet: Date.now()
});

const loginAction = (status,data) => ({
	type: LOGIN,
	status,
	data
});

const logoutAction = (status,data) => ({
	type: LOGOUT,
	status,
	data
});

export const fetchListDetail = detailName  => {
	return dispatch => {
		fetch(`//localhost:3000/list/${detailName}`)
		.then(response=>response.json())
		.then(json => dispatch(receiveDetail(detailName,json)));
	}
}

export const loginRequest = ( email, password ) => {
	return dispatch => {
		fetch(`//localhost:3000/auth?user=${email}&pass${password}`)
			.then(response => response.json())
			.then(json => dispatch(loginAction(json.status,json.data)));
	}
}

export const logoutRequest = () => {
	return dispatch => {
		fetch(`//localhost:3000/logout?user=${email}&pass${password}`)
			.then(response => response.json())
			.then(json => dispatch(loginAction(json.status,json.data)));
	}
}

