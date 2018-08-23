import path from 'path'

var eventApp = angular.module('eventApp', ['ngRoute'])

eventApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: `../tamplates/main/index.html`, //main
		controller: 'mainCtrl'
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
	}).otherwise({
		templateUrl: `../tamplates/err404/index.html`, //err404
		controller: 'err404Ctrl'
	})
})

eventApp.controller('mainCtrl', function($scope) {
	console.log('main')
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

eventApp.controller('menuCtrl', function($scope, $location) {
	$scope.btnProfile = function(){
		$location.path('/profile')
	}
	$scope.btnSettings = function(){
		$location.path('/settings')
	}
	$scope.btnHome = function(){
		$location.path('/')
	}
	$scope.btnMyevents = function(){
		$location.path('/myevents')
	}
	$scope.btnFavorites = function(){
		$location.path('/favorites')
	}
	$scope.btnMap = function(){
		$location.path('/map')
	}
	$scope.btnShowNoti = function(num){
		console.log('show this noti: ', num)
	}
	$scope.btnAllNoti = function(){
		console.log('all noti')
	}
	$scope.btnLogout = function(){
		const { remote } = require('electron')
		const currentWin = remote.getCurrentWindow()
    const browserWindow = remote.BrowserWindow
    const mainchild = new browserWindow({
      width: 770,
      height: 500,
      maximizable: true,
      show: false
    })

		currentWin.hide()

    mainchild.once('ready-to-show', () => {
      mainchild.show()
      mainchild.focus()
    })

		mainchild.loadURL(`file://${path.join(__dirname, '..')}/login/index.html`)

	}
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
