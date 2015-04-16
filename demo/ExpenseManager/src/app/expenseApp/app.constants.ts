///<reference path="../../../tools/typings/tsd.d.ts" />
///<reference path="../../../tools/typings/expenseApp.d.ts" />

'use strict';

module expenseApp {

    var settings: shared.IAdalSettings = {
        tenant: 'cc49913f-171f-48d5-bcc9-db3967acfbed',
        clientId: '00e1d0e1-195f-469d-8f31-620053626cdf',
        baseSPUrl: 'https://acio36503.sharepoint.com/sites/ExpenseManager/_api/',
        baseOneDriveUrl: 'https://aci036503-my.sharepoint.com/_api/v1.0/me',
        aadEndpoints:
            {
                /* 'target endpoint to be called': 'target endpoint's resource ID'  */

                // sharepoint site containing lists
                'https://acio36503.sharepoint.com/sites/ExpenseManager/_api/': 'https://acio36503.sharepoint.com',
                // o365 files api
                'https://acio36503-my.sharepoint.com/_api/v1.0/me':'https://acio36503-my.sharepoint.com/'
            }
    };

    angular.module('expenseApp').constant('settings', settings);

}
