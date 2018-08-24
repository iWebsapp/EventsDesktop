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
