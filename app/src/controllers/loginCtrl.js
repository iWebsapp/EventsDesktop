import path from 'path'
var eventApp = angular.module('LoginCtrl', [])

eventApp.controller('loginCtrl', ['$scope', '$location', 'config', function($scope, $location, config) {

	if( config.storage() == undefined || config.storage() == '' ){
		$location.path('/')
	} else {
		$location.path('/home')
	}

	$scope.login = function(){

		config.addStorage('l0g1nsuc533')
		const { remote } = require('electron')
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
