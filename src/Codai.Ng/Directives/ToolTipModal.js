angular.module('$codaiNg.directives')

.directive('cdiToolTipModal', ['$http', '$compile', function ($http, $compile) {
    
    return {        
        restrict: 'EAC',
        scope: {
            userModel: '=',
            toolTipTemplateUrl: '=',
            modalTemplateUrl: '='
        },
        link: function(scope, element, attrs) {
            console.log("Recognized the Codai Directive");
            console.log(scope.userModel.name);
        }
    };
}]);