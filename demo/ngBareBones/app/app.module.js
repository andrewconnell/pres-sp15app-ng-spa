(function () {
  'use strict';

  var app = angular.module('app',[
      'ngRoute',
      'AdalAngular'
  ]);

  app.config(['$httpProvider', 'adalAuthenticationServiceProvider',
    function($httpProvider, adalProvider){

      // security
      adalProvider.init({
        tenant:'',
        clientId:'',
        postLogoutRedirectUrl:'http://localhost:8000',
        endpoints:''
      });

    }]);

})();