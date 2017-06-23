import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Layout extends Component{
	constructor(props){
		super(props);
	}

	login(e){
		e.preventDefault();
		const { login } = this.props.auth;
		login();
	}

	logout(e){
		e.preventDefault();
		const { logout } = this.props.auth;
		logout();
	}

	render(){
		const { isAuthenticated } = this.props.auth;
		return (
			<div>

				{
					!isAuthenticated() && (
	                  <button
	                    className="btn-margin"
	                    onClick={this.login.bind(this)}
	                  >
	                    登录
	                  </button>
                  	)
				}

				{
		              isAuthenticated() && (
		                  <button
		                    className="btn-margin"
		                    onClick={this.logout.bind(this)}
		                  >
		                    注销
		                  </button>
		                )
				}

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
