'use strict';

examplesApp.controller('ToolTipModalExampleCtrl',
    function ToolTipModalExampleCtrl($scope, toolTipModalData) {
        $scope.model = toolTipModalData.getFamilyMembers();
        

    }
);