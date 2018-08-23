var eventApp = angular.module('eventApp', ['ngRoute'])

eventApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: `../tamplates/main/index.html`,
		controller: 'mainCtrl'
	})
	.when('/myevents', {
		templateUrl: `../tamplates/myevents/index.html`,
		controller: 'myEventCtrl'
	})
	.when('/favorites', {
		templateUrl: `../tamplates/favorites/index.html`,
		controller: 'favoritesCtrl'
	})
	.when('/map', {
		templateUrl: `../tamplates/map/index.html`,
		controller: 'mapCtrl'
	})
	.when('/profile', {
		templateUrl: `../tamplates/profile/index.html`,
		controller: 'profileCtrl'
	})
	.when('/settings', {
		templateUrl: `../tamplates/settings/index.html`,
		controller: 'settingsCtrl'
	})
	.otherwise({
		templateUrl: `../tamplates/err404/index.html`,
		controller: 'err404Ctrl'
	})
})

eventApp.controller('mainCtrl', function($scope) {
	console.log('que onda soy main')
})

eventApp.controller('myEventCtrl', function($scope) {
	console.log('myevents')
})

eventApp.controller('favoritesCtrl', function($scope) {
	console.log('favorites')
})

eventApp.controller('mapCtrl', function($scope) {
	console.log('map')
})

eventApp.controller('settingsCtrl', function($scope) {
	console.log('settings')
})

eventApp.controller('profileCtrl', function($scope) {
	console.log('profiles')
})

eventApp.controller('logsoutCtrl', function($scope) {
	console.log('exit')
})

eventApp.controller('menuCtrl', function($scope) {
	console.log('menu')
})

eventApp.controller('headerCtrl', function($scope) {
	console.log('header')
})

eventApp.controller('footerCtrl', function($scope) {
	console.log('footer')
})

eventApp.controller('err404Ctrl', function($scope) {
	console.log('error 404')
})

eventApp.controller('loginCtrl', function($scope) {
	console.log('login')
})
