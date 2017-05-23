import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { USER_INPUT_CHANGE } from '../actions/valChange.actions';
import { RECEIVE_LIST_DETAIL } from '../actions/getDatas.actions';

export const userVal = (state = 'input whatever you want', action) => {
	if(action.type === USER_INPUT_CHANGE){
		return action.value;
	}else{
		return state;
	}
	
}
export const listDetail = (state = {
	term: 'nop',
	title: 'no title',
	content: 'default content',
},action) => {
	if(action.type === RECEIVE_LIST_DETAIL) {
		return {
			term:  action.detailName,
			title: action.detail.kind,
			content: action.detail.data.subreddit,
		}
	}else{
		return state;
	}
}

const rootReducer = combineReducers({
	userVal,
	listDetail,
	routerReducer
});

export default rootReducer;

