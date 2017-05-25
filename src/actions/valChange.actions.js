export const USER_INPUT_CHANGE = 'USER_INPUT_CHANGE';
export const PICKER_DATE_CHANGE = 'PICKER_DATE_CHANGE';
export const valChangeActionCreator = value => ({
	type:USER_INPUT_CHANGE,
	value
});

export const datePickedAC = date => ({
	type:PICKER_DATE_CHANGE,
	date:date
});