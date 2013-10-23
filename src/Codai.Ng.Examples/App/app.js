'use strict';

var examplesApp = angular.module('examplesApp', ['$codaiNg.directives'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/Modal',
            {
                templateUrl: 'App/Templates/ModalExample.html',
                controller: 'ModalExampleCtrl'
            });
        $routeProvider.otherwise({ redirectTo: '' });
        $locationProvider.html5Mode(false);
    });