var eventApp = angular.module('newEventCtrl', [])

eventApp.controller('newEventCtrl', ['$scope', '$location', 'config', 'restApi', function($scope, $location, config, restApi) {

	console.log('newEventCtrl')
	const currentWin = remote.getCurrentWindow()
	$scope.cancelEvent = function(){
		console.log('cancel....')
		currentWin.close()
	}

	$scope.newEvent = function(){
		console.log('new event...')
		currentWin.close()
	}

}])
