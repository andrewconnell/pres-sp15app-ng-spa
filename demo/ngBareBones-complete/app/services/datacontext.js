(function () {
  'use strict';

  // defined datacontext service
  angular.module('app').service('datacontext',
      ['$http',
        '$q',
        dataContext]);

  function dataContext($http, $q) {
    var baseSpSiteApiEndpoint = 'https://acio36503.sharepoint.com/sites/ExpenseManager/_api/';

    return {
      getEmployees: getEmployees
    };

    function getEmployees() {
      var deferred = $q.defer();

      var endpoint = baseSpSiteApiEndpoint
          + 'web/lists/getbytitle(\'Employees\')/items';

      $http({
        method : 'GET',
        url    : endpoint,
        headers: {
          'ACCEPT': 'application/json;odata=verbose'
        }
      }).success(function (response) {
        deferred.resolve(response.d.results);
      }).error(function (error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }

  }
})();