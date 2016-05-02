/*
The MIT License applies unless otherwise noted. See LICENSE.md for details.
Copyright (c) 2015 Peter Svedberg.
*/
import C from 'js/constants';
import AT from 'js/store/actiontypes';
import initialState from 'js/store/initialstate';

export default (currentstate, action) => {
	switch(action.type){
		case AT.ATTEMPTING_LOGIN:
			return {
				currently: C.AWAITING_AUTH_RESPONSE,
				username: 'guest',
				uid: null
			};
		case AT.LOGOUT:
			return {
				currently: C.ANONYMOUS,
				username: 'guest',
				uid: null
			};
		case AT.LOGIN_USER:
			return {
				currently: C.LOGGED_IN,
				username: action.username,
				uid: action.uid
			};
		default: return currentstate || initialState.auth;
	}
};