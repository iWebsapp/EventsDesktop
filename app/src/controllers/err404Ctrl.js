var eventApp = angular.module('err404Ctrl', [])

eventApp.controller('err404Ctrl', ['$scope', '$location', 'config', 'restApi', function($scope, $location, config, restApi) {
	console.log('err404Ctrl')
	config.removeStorageWinNewEvnt()
}])
