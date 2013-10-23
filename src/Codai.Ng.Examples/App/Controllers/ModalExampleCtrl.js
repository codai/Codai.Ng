'use strict';

examplesApp.controller('ModalExampleCtrl',
    function ModalExampleCtrl($scope, modalData) {
        $scope.model = modalData.getFamilyMembers();
        $scope.modalTemplateUrl = '/app/templates/directives/Modal.html';
    }
);