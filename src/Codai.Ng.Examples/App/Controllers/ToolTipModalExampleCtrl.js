'use strict';

examplesApp.controller('ToolTipModalExampleCtrl',
    function ToolTipModalExampleCtrl($scope, toolTipModalData) {
        $scope.model = toolTipModalData.getFamilyMembers();
        $scope.modalTemplateUrl = '/app/templates/directives/ToolTipModal-Modal.html';
        $scope.popoverTemplateUrl = '/app/templates/directives/ToolTipModal-ToolTip.html';
    }
);