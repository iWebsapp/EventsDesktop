var eventApp = angular.module('ServicesApi', []);

eventApp.service('restApi', ['$http', 'config', function ($http, config) {
    this.call = function (conf) {
        var headers = {}
        headers[config.token_name()] = config.storage()
        const urlg = config.urlGobal() + conf.url

        var http_conf = {
            method: conf.method,
            url: urlg,
            data: typeof (conf.data) === 'undefined' ? null : conf.data,
            headers: headers
        };

        $http(http_conf).then(function successCallback(response) {
            conf.response(response.data)
        }, function errorCallback(response) {

            switch (response.status) {
                case 401: // No autorizado
                    config.logout();
                    break;
                case 422: // Validación
                    conf.validationError(response.data);
                    break;
                default:
                    conf.error(response);
                    console.log(response.statusText);
                    break;
            }

        })
    }
}])

eventApp.service('restApiImg', ['$http', 'config', function ($http, config) {
    this.call = function (conf) {
        var token = config.storage()
        const urlg = config.urlGobal() + conf.url
        var headers = {
            "Content-type": undefined,
            "Authorization": token
        }
        var http_conf = {
            method: conf.method,
            url: urlg,
            data: typeof (conf.data) === 'undefined' ? null : conf.data,
            headers: headers,
            transformRequest: angular.identity
        };

        $http(http_conf).then(function successCallback(response) {
            conf.response(response.data)
        }, function errorCallback(response) {

            switch (response.status) {
                case 401: // No autorizado
                    config.logout();
                    break;
                case 422: // Validación
                    conf.validationError(response.data);
                    break;
                default:
                    conf.error(response);
                    console.log(response.statusText);
                    break;
            }

        })
    }
}])

eventApp.directive('uploaderModel',['$parse', function($parse){

        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
              var model = $parse(attrs.uploaderModel);
              var modelSetter = model.assign;

                element.bind('change', function(){
                    scope.$apply(function(){
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        };

}])
