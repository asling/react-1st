import React,{ Component } from 'react';
import { connect } from 'react-redux';

//ui component
class HomeView extends Component{
	constructor(props){
		super(props);
		var { homeTitle, userVal } = this.props;
	}

	render(){
		return (
			<div>
				<h1>{ homeTitle ? homeTitle : 'It\'s a default title'}</h1>
				<div>{ userVal }</div>
			</div>
		)
	}
}

//container component
function mapStateToProps(state){
	return {
		homeTitle: state.homeData
	}
}

const HomeContainer = connect(mapStateToProps)(HomeView);

export default HomeContainer;