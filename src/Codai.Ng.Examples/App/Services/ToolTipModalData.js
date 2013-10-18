'use strict';

examplesApp.factory('toolTipModalData', function () {
    return {
        getFamilyMembers: function () {
            var model = {                
                familyMembers: [{
                    name: 'Alec Whittington',
                    gender: 'M',
                    createdOn: '2013-10-01',
                    documents: [{ name: 'Application', size: 12345 }, { name: 'Referral', size: 12345 }]
                },
                {
                    name: 'Billy McCafferty',
                    gender: 'M',
                    createdOn: '2013-10-01',
                    documents: []
                }]
            };

            return model;
        }
    };
});