import React,{ Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LayoutContainer from './components/layout';
import HomeContainer from './components/home';
import InputContainer from './components/input';
import ListView from './components/list';
import ListDetailContainer from './components/list.detail';

import auth from './auth';

export default class Routes extends Component{
	render(){
		return (
			<div>
			<Route path="/" render={(props)=> <LayoutContainer auth={auth} {...props} />}/>
			<Route path="/home" component={HomeContainer}/>
			<Route path="/list" component={ListView}/>
			<Route path="/list/:detail" component={ListDetailContainer} />
			</div>
		)
	}
}

