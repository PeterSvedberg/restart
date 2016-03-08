var Redux = require('redux'),
	authReducer = require('./auth');

var rootReducer = Redux.combineReducers({
	auth: authReducer
});

module.exports = rootReducer;