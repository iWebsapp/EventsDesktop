var eventApp = angular.module('mapCtrl', [])

eventApp.controller('mapCtrl', ['$scope', '$location', 'config', 'restApi', function($scope, $location, config, restApi) {
	console.log('mapCtrl')
	config.removeStorageWinNewEvnt()
}])
