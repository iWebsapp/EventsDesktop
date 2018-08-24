import path from 'path'
const { remote } = require('electron')
var eventApp = angular.module('menuCtrl', [])

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
