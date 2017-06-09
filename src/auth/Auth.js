/*
a service  class Auth 
*/

import history from '../history';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth.config.dev';

export default class Auth{

	constructor(){

		this.auth0 = new auth0.WebAuth(AUTH_CONFIG);

		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
		this.handleAuthentication = this.handleAuthentication(this);
	}

	login(){
		this.auth0.authorize();
	}

	handleAuthentication(){
		this.auth0.parseHash((err,authResult) => {
			if(authResult && authResult.accessToken && authResult.idToken){
				this.setSession(authResult);
				history.replace('/home');
			}else if(err){
				history.replace('/home');
				console.log(err);
				alert(`Error: ${err.error}. Check the console for further details.`);
			}
		})
	}

	setSession(authResult){
		let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
		localStorage.setItem('access_token',authResult.accessToken);
		localStorage.setItem('id_token',authResult.idToken);
		localStorage.setItem('expires_at',expiresAt);
	}

	logout(){
		localStorage.removeItem('access_token');
		localStorage.removeItem('id_token');
		localStorage.removeItem('expires_at');
		history.replace('/home');
	}

	isAuthenticated(){
		let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
		return new Date().getTime() < expiresAt;
	}
}
