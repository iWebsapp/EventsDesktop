var eventApp = angular.module('Config', []);

eventApp.factory('config', ['$location', function($location) {
	var setting = {
		token_name: function(){
			return process.env.TOKEN_NAME || 'Authentication'
		},
		urlGobal: function(){
			return process.env.LINK_API || 'http://192.168.0.111:2715/api/v1/'
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
						var token = localStorage["Authentication"];
						if (token === '') return;

						var base64Url = token.split('.')[1];
						var base64 = base64Url.replace('-', '+').replace('_', '/');

						return JSON.parse(window.atob(base64)).data;
				} catch(err) {
						$location.path('/');
				}
		},
		hasToken: function () {
				return (localStorage["Authentication"] !== '');
		},
		logout: function () {
				localStorage["Authentication"] = '';
				$location.path('/');
		},
		storageWinNewEvnt: function(){
			return localStorage["newEvent"]
		},
		addStorageWinNewEvnt: function(data){
			localStorage["newEvent"] = ''
			localStorage["newEvent"] = data
		},
		removeStorageWinNewEvnt: function(){
			localStorage["newEvent"] = ''
		}
	}

	return setting
}])
