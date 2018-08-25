var eventApp = angular.module('notfiCtrl', [])

eventApp.controller('notfiCtrl', ['$scope', '$location', 'config', 'restApi', function($scope, $location, config, restApi) {
	console.log('notfiCtrl')
	config.removeStorageWinNewEvnt()
}])
