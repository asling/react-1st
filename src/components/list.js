import React,{ Component } from 'react';
//import { connect } from 'react-redux';

class listView extends Component{
	constructor(props){
		super(props);

	}

	render(){
		return (
			<div>
				<ul>
					<li>这是一片好文章</li>
					<li>第二篇</li>
					<li>省略</li>
				</ul>
			</div>
		)
	}
}

export default listView;