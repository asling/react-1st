import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
//import { connect } from 'react-redux';

class ListView extends Component{
	constructor(props){
		super(props);

	}

	render(){
		return (
			<div>
				<div>wdfdsf</div>
				<ul>
					<li><NavLink to="/list/curry">这是一片好文章</NavLink></li>
					<li><NavLink to="/list/kobe">第二篇</NavLink></li>
					<li><NavLink to="/list/jordan">省略</NavLink></li>
				</ul>
			</div>
		)
	}
}

export default ListView;