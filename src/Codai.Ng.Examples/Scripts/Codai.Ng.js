///#source 1 1 /common.js
/// <reference path="_all.js" />

angular.module('$codaiNg.config', []).value('$codaiNgConfig', {});
angular.module('$codaiNg.filters', ['$codaiNg.config']);
angular.module('$codaiNg.directives', ['$codaiNg.config']);
angular.module('$codaiNg', ['$codaiNg.filters', '$codaiNg.directives', '$codaiNg.config']);
///#source 1 1 /Directives/ToolTipModal.js
angular.module('$codaiNg.directives')

.directive('cdiToolTipModal', ['$http', '$compile', function ($http, $compile) {
    
    return {        
        restrict: 'EAC',
        scope: {
            userModel: '=',
            toolTipTemplateUrl: '=',
            modalTemplateUrl: '='
        },
        compile: function(element, cAttrs) {
            var template,
                $element,
                loader;

            return function(scope, element, lAtts) {
                loader = $http.get(scope.modalTemplateUrl)
                .success(function (data) {
                    template = data;
                });

                loader.then(function() {
                    $element = $($compile(template)(scope));
                });

                element.on('click', function(e) {
                    e.preventDefault();
                    $element.modal('show');
                });
            };
        }
    };
}]);
