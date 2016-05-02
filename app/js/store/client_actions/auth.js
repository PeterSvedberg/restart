/*
The MIT License applies unless otherwise noted. See LICENSE.md for details.
Copyright (c) 2015 Peter Svedberg.
*/
import C from 'js/constants';
import Firebase from 'firebase';

const fireRef = new Firebase(C.FIREBASE);

const authActions = {
	// called at app start
	startListeningToAuth: function(){
		return function(dispatch, getState){
			fireRef.onAuth(function(authData){
				if (authData){ 
					dispatch({
						type: C.LOGIN_USER,
						uid: authData.uid,
						username: authData.github.displayName || authData.github.username
					});
				} else {
					if (getState().auth.currently !== C.ANONYMOUS){ // log out if not already logged out
						dispatch({type:C.LOGOUT});
					}
				}
			});
		};
	},
	attemptLogin: function(){
		return function(dispatch){
			dispatch({type:C.ATTEMPTING_LOGIN});
			fireRef.authWithOAuthPopup('github', function(error, authData) {
				if (error) {
					dispatch({type:C.DISPLAY_ERROR,error:'Login failed! '+error});
					dispatch({type:C.LOGOUT});
				} else {
					// startListeningToAuth have made sure that we update on changes
          console.log(authData);
				}
			});
		};
	},
	logoutUser: function(){
		return function(dispatch){
			dispatch({type:C.LOGOUT}); // don't really need to do this, but nice to get immediate feedback
			fireRef.unauth();
		};
	}
};

export default authActions;