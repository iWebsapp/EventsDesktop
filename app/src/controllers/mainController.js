import path from 'path'
const { remote } = require('electron')
var eventApp = angular.module('eventApp', ['ngRoute'])

eventApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: `../tamplates/login/index.html`, //login
		controller: 'loginCtrl'
	}).when('/home', {
		templateUrl: `../tamplates/main/index.html`, //main
		controller: 'homeCtrl'
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
})

eventApp.controller('mainCtrl', ['$scope', '$location', 'config', function($scope, $location, config) {
	if( config.storage() == undefined || config.storage() == '' ){
		$scope.login = false
	} else {
		$scope.login = true
	}
	console.log( $scope.login )
}])

eventApp.controller('homeCtrl', function($scope) {
	console.log('home')
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

eventApp.controller('menuCtrl', ['$scope', '$location', 'config', function($scope, $location, config) {
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
		$location.path('/noti')
		console.log('show this noti: ', num)
	}
	$scope.btnAllNoti = function(){
		$location.path('/noti')
		console.log('all noti')
	}
	$scope.btnLogout = function(){

		config.removeStorage()
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

		mainchild.loadURL(`file://${path.join(__dirname, '..')}/main/index.html`)

	}

}])

eventApp.controller('headerCtrl', function($scope) {
	console.log('header')
})

eventApp.controller('footerCtrl', function($scope) {
	console.log('footer')
})

eventApp.controller('err404Ctrl', function($scope) {
	console.log('error 404')
})

eventApp.controller('loginCtrl', ['$scope', '$location', 'config', function($scope, $location, config) {

	if( config.storage() == undefined || config.storage() == '' ){
		$location.path('/')
	} else {
		$location.path('/home')
	}

	$scope.login = function(){

		config.addStorage('l0g1nsuc533')
		const BrowserWindow = remote.BrowserWindow
		const loginchild = new BrowserWindow({
			width: 1200,
			height: 700,
			maximizable: true,
			frame: true,
			show: false
		})

		loginchild.once('ready-to-show', () => {
			loginchild.show()
			loginchild.focus()
		})

		loginchild.loadURL(`file://${path.join(__dirname, '..')}/main/index.html`)
	}
}])

eventApp.controller('notfiCtrl', function($scope) {
	console.log('notfiCtrl')
})

eventApp.factory('config', ['$location', function($location) {
	var setting = {
		token_name: function(){
			return process.env.TOKEN_NAME || 'Authentication'
		},
		urlGobal: function(){
			return process.env.LINK_API || 'localhost:2715/api/v1/'
		},
		name_app: function(){
			return process.env.NAME || 'EventApi'
		},
		storage: function(){
			return localStorage["Authentication"]
		},
		addStorage: function(data){
			localStorage["Authentication"] = ''
			localStorage["Authentication"] = data
		},
		removeStorage: function(){
			localStorage["Authentication"] = ''
		}
	}

	return setting
}])
