import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { USER_INPUT_CHANGE } from '../actions/valChange.actions';

export const userVal = (state = 'input whatever you want', action) => {
	if(action.type === USER_INPUT_CHANGE){
		return action.value;
	}else{
		return state;
	}
	
}

const rootReducer = combineReducers({
	userVal,
	routerReducer
});

export default rootReducer;

