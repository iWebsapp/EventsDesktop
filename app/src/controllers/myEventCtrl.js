import path from 'path'
var eventApp = angular.module('myEventCtrl', [])

eventApp.controller('myEventCtrl', ['$scope', '$location', 'config', 'restApi', function($scope, $location, config, restApi) {

	$scope.myevents = []
	config.removeStorageWinNewEvnt()
	$scope.URL = config.urlGobal() + 'src/'
	$scope.newevent = function(){

		const BrowserWindow = remote.BrowserWindow
		const loginchild = new BrowserWindow({
			width: 300,
	    height: 500,
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

	$scope.loadList = function(){

		restApi.call({
		    method: 'get',
		    url: 'places/my/all',
		    response: function (resp) {
					if( resp.status == 200 ){
						$scope.myevents = resp.data
						console.log( $scope.myevents )
					}
		    },
		    error: function (error) {
		      console.log('Se ha producido un error: ',error)
		    },
		    validationError: function (validerror) {
		      console.log('Error de autenticacion: ', validerror)
		    }
		})

	}

	$scope.loadList()

	$scope.removeEvent = function(id){
		//console.log(id)

		restApi.call({
		    method: 'delete',
		    url: 'places/delete/' + id,
		    response: function (resp) {
		      console.log('Exito: ', resp)
					if( resp.status == 200 ){

						const win = remote.getCurrentWindow()
						dialog.showMessageBox(win, {
							type: 'info',
							title: config.name_app(),
							message: 'Este negocio ha sido eliminado con exito.'
						}, (data) =>{
							$scope.loadList()
						})

					}
		    },
		    error: function (error) {
		      console.log('Se ha producido un error: ',error)
		    },
		    validationError: function (validerror) {
		      console.log('Error de autenticacion: ', validerror)
		    }
		})


	}

	$scope.editEvent = function(id){
		console.log(id)
	}

	$scope.deleteEvent = function(id){
		const win = remote.getCurrentWindow()
		dialog.showMessageBox(win, {
			title: config.name_app(),
		  message: '¿Estas seguro de eliminar este negocio?',
		  buttons: ['Eliminar', 'Cancelar'],
		  defaultId: 0,
		  cancelId: 1
		}, response => {
		    if (response === 0) {
					$scope.removeEvent(id)
		    }
		})
	}

}])
