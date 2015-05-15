(function () {
  'use strict';

  // create the angular app
  //  inject angular-route & adal service
  var app = angular.module('app', [
    'ngRoute',
    'AdalAngular'
  ]);

  app.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider',
    function ($routeProvider, $httpProvider, adalProvider) {

      // setup routes in the app
      $routeProvider
          .when('/', {
            templateUrl: 'app/home/home.html',
          })
          .when('/employees', {
            templateUrl   : 'app/employees/employees.html',
            controller    : 'ngBareBones.employeesController',
            controllerAs  : 'vm',
            requireADLogin: true
          })
          .otherwise({redirectTo: '/'});

      // setup adal
      adalProvider.init({
        tenant               : 'cc49913f-171f-48d5-bcc9-db3967acfbed',
        clientId             : '00e1d0e1-195f-469d-8f31-620053626cdf',
        postLogoutRedirectUrl: 'http://localhost:8000',
        endpoints            : {
          'https://acio36503.sharepoint.com/sites/ExpenseManager/_api/': 'https://acio36503.sharepoint.com'
        }
      }, $httpProvider);

    }]);
})();