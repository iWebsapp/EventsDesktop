var eventApp = angular.module('favoritesCtrl', [])

eventApp.controller('favoritesCtrl', ['$scope', '$location', 'config', 'restApi', function($scope, $location, config, restApi) {
	console.log('favoritesCtrl')
	config.removeStorageWinNewEvnt()
}])
