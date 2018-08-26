var eventApp = angular.module('Config', []);

eventApp.factory('config', ['$location', function($location) {
	var setting = {
		token_name: function(){
			return process.env.TOKEN_NAME || 'Authorization'
		},
		urlGobal: function(){
			return process.env.LINK_API || 'http://192.168.0.111:2715/api/v1/'
		},
		name_app: function(){
			return process.env.NAME || 'EventApi'
		},
		storage: function(){
			return localStorage["Authorization"]
		},
		addStorage: function(data){
			localStorage["Authorization"] = ''
			localStorage["Authorization"] = data
		},
		removeStorage: function(){
			localStorage["Authorization"] = ''
		},
		getUserData: function () {
				try{
						var token = localStorage["Authorization"];
						if (token === '') return;

						var base64Url = token.split('.')[1];
						var base64 = base64Url.replace('-', '+').replace('_', '/');

						return JSON.parse(window.atob(base64)).data;
				} catch(err) {
						$location.path('/');
				}
		},
		hasToken: function () {
				return (localStorage["Authorization"] !== '');
		},
		logout: function () {
				localStorage["Authorization"] = '';
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
