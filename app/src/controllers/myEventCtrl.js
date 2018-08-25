//import path from 'path'
//const app = require('electron').remote;
//const dialog = app.dialog;
var eventApp = angular.module('myEventCtrl', [])

eventApp.controller('myEventCtrl', ['$scope', '$location', 'config', 'restApi', function($scope, $location, config, restApi) {
	$scope.newevent = function(){
		$location.path('/myevents/new')
	}
}])
