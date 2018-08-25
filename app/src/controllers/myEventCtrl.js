import path from 'path'
var eventApp = angular.module('myEventCtrl', [])

eventApp.controller('myEventCtrl', ['$scope', '$location', 'config', 'restApi', function($scope, $location, config, restApi) {

	config.removeStorageWinNewEvnt()
	$scope.newevent = function(){

		const BrowserWindow = remote.BrowserWindow
		const loginchild = new BrowserWindow({
			width: 500,
	    height: 300,
			maximizable: true,
			frame: true,
			show: false
		})

		loginchild.once('ready-to-show', () => {
			loginchild.show()
			loginchild.focus()
		})

		config.addStorageWinNewEvnt('success')
		loginchild.loadURL(`file://${path.join(__dirname, '..')}/main/index.html`)

	}
}])
