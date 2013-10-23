angular.module('$codaiNg.directives')

.directive('cdiModal', ['$http', '$compile', '$templateCache', function ($http, $compile, $templateCache) {
    
    return {        
        restrict: 'EAC',
        scope: {
            userModel: '=',
            templateUrl: '='
        },
        replace: false,
        link: function($scope, $element, $attrs) {
            var template;
            var _$loader, _modalElement;
            
            _$loader = $http.get($scope.templateUrl, $templateCache)
                .success(function(data) {
                    template = data;
                });

            _$loader.then(function() {
                _modalElement = $($compile(template)($scope));
            });
            
            $element.on('click', function (e) {
                e.preventDefault();
                _modalElement.modal('show');
            });
        }
    };
}]);