angular.module('$codaiNg.directives')

.directive('cdiToolTipModal', ['$http', '$compile', function ($http, $compile) {
    
    return {        
        restrict: 'EAC',
        scope: {
            userModel: '=',
            toolTipTemplateUrl: '=',
            modalTemplateUrl: '='
        },
        replace: false,
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