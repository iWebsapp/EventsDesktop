var eventApp = angular.module('settingsCtrl', [])

eventApp.controller('settingsCtrl', ['$scope', '$location', 'config', 'restApi', function($scope, $location, config, restApi) {
	console.log('settingsCtrl')
	config.removeStorageWinNewEvnt()
}])
