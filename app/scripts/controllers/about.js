'use strict';

/**
 * @ngdoc function
 * @name askApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the askApp
 */
angular.module('askApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTMBoilerplate',
      'AngularJS',
      'Karma'
    ];
  });
