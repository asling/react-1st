import { combineReducers } from 'redux';
import {USER_INPUT_CHANGE} from '../actions/valChange.actions';

export const userVal = (state, action) => {
	return action.value;
}

