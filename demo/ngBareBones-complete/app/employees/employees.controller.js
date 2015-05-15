(function () {
  'use strict';

  // create the employee controller
  angular.module('app').controller('ngBareBones.employeesController',
      ['datacontext',
        employeesController]);

  // employee controller function
  function employeesController(datacontext) {
    var vm = this;

    // collection of employees
    vm.employees = {};

    // activate the controller
    activate();

    function activate() {
      getEmployees();
    }

    function getEmployees() {
      return datacontext.getEmployees()
          .then(function (result) {
            vm.employees = result;
          })
          .catch(function (error) {
            console.error('employeesController.getEmployees()', error);
          });
    }
  }

})();