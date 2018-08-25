var eventApp = angular.module('profileCtrl', [])

eventApp.controller('profileCtrl', ['$scope', '$location', 'config', 'restApi', function($scope, $location, config, restApi) {
	console.log('profiles')
	config.removeStorageWinNewEvnt()
}])
