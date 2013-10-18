angular.module('$codaiNg.directives')

.directive('cdiToolTipModal',['$compile', function ($compile) {
    return {        
        restrict: 'EAC',
        scope: {
            model: '=',
            toolTipTemplateUrl: '=',
            modalTemplateUrl: '='
        }
    };
}]);