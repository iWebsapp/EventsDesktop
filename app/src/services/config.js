var eventApp = angular.module('Config', []);

eventApp.factory('config', ['$location', function($location) {
	var setting = {
		token_name: function(){
			return process.env.TOKEN_NAME || 'Authentication'
		},
		urlGobal: function(){
			return process.env.LINK_API || 'localhost:2715/api/v1/'
		},
		name_app: function(){
			return process.env.NAME || 'EventApi'
		},
		storage: function(){
			return localStorage["Authentication"]
		},
		addStorage: function(data){
			localStorage["Authentication"] = ''
			localStorage["Authentication"] = data
		},
		removeStorage: function(){
			localStorage["Authentication"] = ''
		},
		getUserData: function () {
				try{
						var token = localStorage[API.token_name];
						if (token === '') return;

						var base64Url = token.split('.')[1];
						var base64 = base64Url.replace('-', '+').replace('_', '/');

						return JSON.parse(window.atob(base64)).data;
				} catch(err) {
						$location.path('/');
				}
		},
		hasToken: function () {
				return (localStorage[API.token_name] !== '');
		},
		logout: function () {
				localStorage[API.token_name] = '';
				$location.path('/login');
		}
	}

	return setting
}])
