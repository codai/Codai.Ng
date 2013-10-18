'use strict';

examplesApp.controller('ToolTipModalExampleCtrl',
    function ToolTipModalExampleCtrl($scope, toolTipModalData) {
        $scope.model = toolTipModalData.getFamilyMembers();
        $scope.modalTemplateUrl = '/app/templates/directives/ToolTipModal-Modal.html';

    }
);