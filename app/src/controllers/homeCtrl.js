var eventApp = angular.module('homeCtrl', [])

eventApp.controller('homeCtrl', ['$scope', '$location', 'config', 'restApi', function($scope, $location, config, restApi) {
	console.log('homeCtrl')
	config.removeStorageWinNewEvnt()
}])
