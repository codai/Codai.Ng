'use strict';

var examplesApp = angular.module('examplesApp', ['$codaiNg.directives'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/ToolTipModal',
            {
                templateUrl: 'App/Templates/ToolTipModalExample.html',
                controller: 'ToolTipModalExampleCtrl'
            });
        $routeProvider.otherwise({ redirectTo: '' });
        $locationProvider.html5Mode(false);
    });