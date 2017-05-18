import React,{ Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LayoutContainer from './components/layout';
import HomeContainer from './components/home';
import InputContainer from './components/input';
import listView from './components/list';


export default class Routes extends Component{
	render(){
		return (
			<div>
			<Route path="/" component={LayoutContainer} />
			<Route path="/home" component={HomeContainer}/>
			<Route path="/lists" component={listView}/>
			</div>
		)
	}
}

