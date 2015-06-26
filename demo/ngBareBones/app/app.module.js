(function () {
  'use strict';

  var app = angular.module('app',[
      'ngRoute',
      'AdalAngular'
  ]);

  app.config(['$httpProvider', 'adalAuthenticationServiceProvider',
    function($httpProvider, adalProvider){

      // setup security with adal

      // setup routes in the app
      
    }]);

})();