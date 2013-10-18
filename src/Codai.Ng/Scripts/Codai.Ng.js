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
        link: function(scope, element, attrs) {
            console.log("Recognized the Codai Directive");
            console.log(scope.userModel.name);
        }
    };
}]);
