var eventApp = angular.module('Router', []);

eventApp.config(['$routeProvider', '$locationProvider',  function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: `../tamplates/login/index.html`, //login
		controller: 'loginCtrl'
	}).when('/home', {
		templateUrl: `../tamplates/main/index.html`, //main
		controller: 'homeCtrl'
	}).when('/myevents/new', {
		templateUrl: `../tamplates/newevent/index.html`, //myevents
		controller: 'newEventCtrl'
	}).when('/myevents/edit/:id', {
		templateUrl: `../tamplates/newevent/index.html`, //myevents
		controller: 'newEventCtrl'
	}).when('/myevents', {
		templateUrl: `../tamplates/myevents/index.html`, //myevents
		controller: 'myEventCtrl'
	}).when('/favorites', {
		templateUrl: `../tamplates/favorites/index.html`, //favorites
		controller: 'favoritesCtrl'
	}).when('/map', {
		templateUrl: `../tamplates/map/index.html`, //map
		controller: 'mapCtrl'
	}).when('/profile', {
		templateUrl: `../tamplates/profile/index.html`, //profile
		controller: 'profileCtrl'
	}).when('/settings', {
		templateUrl: `../tamplates/settings/index.html`, //settings
		controller: 'settingsCtrl'
	}).when('/noti', {
		templateUrl: `../tamplates/noti/index.html`, //settings
		controller: 'notfiCtrl'
	}).otherwise({
		templateUrl: `../tamplates/err404/index.html`, //err404
		controller: 'err404Ctrl'
	})
}])
