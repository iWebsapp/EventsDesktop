var eventApp = angular.module('mainCtrl', [])

eventApp.controller('mainCtrl', ['$scope', '$location', 'config', function($scope, $location, config) {
	if( config.storage() == undefined || config.storage() == '' ){
		$scope.login = false
	} else {
		$scope.login = true
	}
	console.log( $scope.login )
}])
