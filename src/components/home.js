import React,{ Component } from 'react';
import { connect } from 'react-redux';

//ui component
class HomeView extends Component{
	constructor(props){
		super(props);
		this.homeTitle = 'this is a home page';
	}

	render(){
		var { userVal } = this.props;
		return (
			<div>
				<h1>{ this.homeTitle ? this.homeTitle : 'It\'s a default title'}</h1>
				<div>{ userVal }</div>
			</div>
		)
	}
}

//container component
function mapStateToProps(state){
	return {
		userVal: state.userVal
	}
}

const HomeContainer = connect(mapStateToProps)(HomeView);

export default HomeContainer;