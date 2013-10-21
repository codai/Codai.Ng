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
                _$toolTipTemplate,
                _$modalLoader,
                _$toolTipLoader,
                hasTooltip = false,
                hasModal = false;

            if (attrs.modalTemplateUrl && attrs.modalTemplateUrl != "") {
                hasModal = true;
                _$modalLoader = $http.get(attrs.modalTemplateUrl, $templateCache)
                    .success(function (data) {
                        _$modalTemplate = data;
                    });
            }
            
            if (attrs.toolTipTemplateUrl && attrs.toolTipTemplateUrl != "") {
                hasTooltip = true;
                _$toolTipLoader = $http.get(attrs.toolTipTemplateUrl, $templateCache)
                    .success(function (data) {
                        _$toolTipTemplate = data;
                    });
            }

            return function ($scope, $element, $attrs) {
                var _modalElement,
                    _tooltipElement,
                    tooltipOptions = {};
                
                if (hasTooltip) {
                    _$toolTipLoader.then(function () {
                        _tooltipElement = $($compile(_$toolTipTemplate)($scope));
                        var html = _tooltipElement.html();
                        
                        tooltipOptions = {
                            html: true,
                            placement: 'right',
                            trigger: 'hover',
                            title: _tooltipElement
                    };
                        
                        $element.tooltip(tooltipOptions);
                    });

                    $element.on('mouseenter', function (e) {
                        e.preventDefault();
                        $element.tooltip('show');
                    });
                }
                
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