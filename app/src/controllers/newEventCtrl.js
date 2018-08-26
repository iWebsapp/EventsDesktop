var eventApp = angular.module('newEventCtrl', [])

eventApp.controller('newEventCtrl', ['$scope', '$location', 'config', 'restApiImg', function($scope, $location, config, restApiImg) {

	console.log('newEventCtrl')
	const currentWin = remote.getCurrentWindow()
	$scope.cancelEvent = function(){
		console.log('cancel....')
		currentWin.close()
	}

	$scope.newEvent = function(){
		var name = $scope.newevet.name
		var services = $scope.newevet.services
		var picture = $scope.newevet.picture
		var description = $scope.newevet.description
		var address = $scope.newevet.addreess
		var monday = $scope.newevet.monday
		var tuesday = $scope.newevet.tuesday
		var wednesday = $scope.newevet.wednesday
		var thursday = $scope.newevet.thursday
		var friday = $scope.newevet.friday
		var saturday = $scope.newevet.saturday
		var sunday = $scope.newevet.sunday
		var phone = $scope.newevet.phone
		var cellphone = $scope.newevet.cellphone
		var email = $scope.newevet.email
		var website = $scope.newevet.website
		var facebook = $scope.newevet.facebook
		var twitter = $scope.newevet.twtter
		var instagram = $scope.newevet.instagram
		var formData = new FormData();
		formData.append("name", name)
		formData.append("services", services)
		formData.append("picture", picture)
		formData.append("description", description)
		formData.append("address", address)
		formData.append("monday", monday)
		formData.append("tuesday", tuesday)
		formData.append("wednesday", wednesday)
		formData.append("thursday", thursday)
		formData.append("friday", friday)
		formData.append("saturday", saturday)
		formData.append("sunday", sunday)
		formData.append("phone", phone)
		formData.append("cellphone", cellphone)
		formData.append("email", email)
		formData.append("website", website)
		formData.append("facebook", facebook)
		formData.append("twitter", twitter)
		formData.append("instagram", instagram)

		restApiImg.call({
				method: 'post',
				url: 'places/create',
				data: formData,
				response: function (resp) {
					console.log('Se ha subido la imagen: ', resp)
					if(resp.status == 200){
						const win = remote.getCurrentWindow()
						dialog.showMessageBox(win, {
				      type: 'info',
				      title: config.name_app(),
				      message: 'Se ha registrado con exito tu negocio.'
				    })
						currentWin.close()
					}
				},
				error: function (error) {

					if(error.status == 500){
						const win = remote.getCurrentWindow()
						$scope.newevet.name = undefined
						dialog.showMessageBox(win, {
				      type: 'info',
				      title: config.name_app(),
				      message: 'Este negocio ya existe, intentalo con otro.'
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
				}
		})

	}

}])
