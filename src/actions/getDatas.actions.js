import fetch from 'isomorphic-fetch';
import promise from 'es6-promise';

const promisePolyfill = promise.polyfill();

export const RECEIVE_LIST_DETAIL = 'RECEIVE_LIST_DETAIL';


const receiveDetail = (detailName,detail) => ({
	type: RECEIVE_LIST_DETAIL,
	detailName,
	detail : detail.data.children[0],
	dateGet: Date.now()
})


export const fetchListDetail = detailName  => {
	return dispatch => {
		fetch(`//localhost:3000/list/${detailName}`)
		.then(response=>response.json())
		.then(json => dispatch(receiveDetail(detailName,json)));
	}
}

