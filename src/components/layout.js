import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Layout extends Component{
	constructor(props){
		super(props);
	}


	render(){
		return (
			<div>
				<ul role="nav">
					<li><NavLink to="/home" activeClassName="nav-active">我的主页</NavLink></li>
					<li><NavLink to="/list" activeClassName="nav-active">文章列表</NavLink></li>
				</ul>
			</div>
		)
	}
}

//container component
function mapStateToProps(state){
	return {}
}

const LayoutContainer = connect(mapStateToProps)(Layout);

export default LayoutContainer;
