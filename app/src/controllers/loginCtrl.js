import path from 'path'
const app = require('electron').remote;
const dialog = app.dialog;
var eventApp = angular.module('LoginCtrl', [])

eventApp.controller('loginCtrl', ['$scope', '$location', 'config', 'restApi', function($scope, $location, config, restApi) {

	if( config.storage() == undefined || config.storage() == '' ){
			$location.path('/')
	} else {
		if( config.storageWinNewEvnt() == undefined || config.storageWinNewEvnt() == '' ){
			$location.path('/home')
		} else {
			$location.path('/myevents/new')
			config.removeStorageWinNewEvnt()
		}
	}

	$scope.clean = function(){
		$scope.login = {
			email: undefined,
			password: undefined
		}
	}

	$scope.clean()

	$scope.login = function(){

		var data = {
			email: $scope.login.email,
			password: $scope.login.password
		}


		restApi.call({
				method: 'post',
				url: 'users/login',
				data: data,
				response: function (resp) {

					if( resp.status == 200 ){

						config.addStorage(resp.token)
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
				},
				error: function (error) {

					if( error.status == 400 ){
						$scope.clean()
						const win = remote.getCurrentWindow()
						dialog.showMessageBox(win, {
				      type: 'warning',
				      title: config.name_app(),
				      message: 'El correo electrónico y/o contraseña son incorrectos.'
				    })
					}

					if( error.status == 404 ){
						$scope.clean()
						const win = remote.getCurrentWindow()
						dialog.showMessageBox(win, {
				      type: 'warning',
				      title: config.name_app(),
				      message: 'Este correo electrónico no existe, intente con otro o cree una cuenta.'
				    })
					}

					if( error.status == 500 ){
						$scope.clean()
						const win = remote.getCurrentWindow()
						dialog.showMessageBox(win, {
				      type: 'warning',
				      title: config.name_app(),
				      message: 'Esta cuenta no se encuentra activada, para activada verifique su correo electrónico.'
				    })
					}

					if(error.status == 401){
						const win = remote.getCurrentWindow()
						$scope.newevet.name = undefined
						dialog.showMessageBox(win, {
				      type: 'error',
				      title: config.name_app(),
				      message: 'Accesso restringido'
				    })
					}

				},
				validationError: function (validerror) {
					console.log('Error de autenticacion: ', validerror)
					const win = remote.getCurrentWindow()
					dialog.showMessageBox(win, {
				    type: 'error',
				    title: config.name_app(),
				    message: 'Se ha producido un error, el sistema se reinicirá de manera acutomatica.'
				  }, () => {
				    app.relaunch()
				    app.exit(0)
				  })
				}
		})


	}

}])
