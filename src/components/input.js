import React,{ Component } from 'react';
import { valChangeActionCreator } from '../actions/valChange.actions';
import { connect } from 'react-redux';
class InputView extends Component{
	constructor(props){
		super(props);
		this.inputHandler = this.inputHandler.bind(this);
	}

	inputHandler(value){
		const { dispatch } = this.props;
		dispatch(valChangeActionCreator(value));
	}

	render(){
		const { userVal } = this.props;
		return (
			<div>
				<input type="text" value={userVal} onChange={this.inputHandler} />
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		userVal: state.userVal,
	}
}
const InputContainer = connect(mapStateToProps)(InputView);
export default InputContainer;