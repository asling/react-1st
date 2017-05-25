import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { DatePicker, message } from 'antd';
import InputContainer from './input';

import { datePickedAC, PICKER_DATE_CHANGE } from '../actions/valChange.actions';
 

//ui component
class HomeView extends Component{
	constructor(props){
		super(props);
		this.homeTitle = 'this is a home page';
		var { dispatch } = this.props;
		this.dispatch = dispatch;
	}

	handleChange(date){
		message.info('您选择的日期是: ' + date.toString());
		this.dispatch(datePickedAC(date));
		//console.log(this.props);
		// var { datePicked } = this.props;
		// this.datePicked = datePicked;
	}

	componentWillReceiveProps(nextProps){
		// console.log("nextProps:"+nextProps);
	}


	render(){
		var { userVal,datePicked } = this.props;
		console.log("datePicked:"+datePicked);
		this.datePicked = datePicked;
		return (
			<div>
				<h1>{ this.homeTitle ? this.homeTitle : 'It\'s a default title'}</h1>
				<div>{ userVal }</div>
				<InputContainer />

				<div style={{width:400, margin:'100px auto' }}>
					<DatePicker onChange={value=>this.handleChange(value)} />
					<div style={{marginTop:20}}>
						当前日期：{this.datePicked.toString()}
					</div>
				</div>

			</div>
		)
	}
}

//container component
function mapStateToProps(state){
	return {
		userVal: state.userVal,
		datePicked: state.datePicked,
	}
}

const HomeContainer = connect(mapStateToProps)(HomeView);

export default HomeContainer;