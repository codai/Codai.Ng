///#source 1 1 /common.js
/// <reference path="_all.js" />

angular.module('$codaiNg.config', []).value('$codaiNgConfig', {});
angular.module('$codaiNg.filters', ['$codaiNg.config']);
angular.module('$codaiNg.directives', ['$codaiNg.config']);
angular.module('$codaiNg', ['$codaiNg.filters', '$codaiNg.directives', '$codaiNg.config']);
///#source 1 1 /Directives/ToolTipModal.js
angular.module('$codaiNg.directives')

.directive('cdiToolTipModal', ['$http', '$compile', '$templateCache', function ($http, $compile, $templateCache) {
    
    return {        
        restrict: 'EAC',
        scope: {
            userModel: '=',
            toolTipTemplateUrl: '@',
            modalTemplateUrl: '@'
        },
        replace: false,
        compile: function(element, attrs) {
            var _$modalTemplate,
                _$modalLoader,
                hasModal = false;

            if (attrs.modalTemplateUrl && attrs.modalTemplateUrl != "") {
                hasModal = true;
                _$modalLoader = $http.get(attrs.modalTemplateUrl, $templateCache)
                    .success(function (data) {
                        _$modalTemplate = data;
                    });
            }

            return function ($scope, $element, $attrs) {
                var _modalElement;
                
                if (hasModal) {
                    _$modalLoader.then(function () {
                        _modalElement = $($compile(_$modalTemplate)($scope));
                        var html = _modalElement.html();
                    });

                    $element.on('click', function (e) {
                        e.preventDefault();
                        _modalElement.modal('show');
                    });
                }
            };
        }
    };
}]);
