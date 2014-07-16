'use strict';

/**
 * @ngdoc function
 * @name askApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the askApp
 */
angular.module('askApp')
  .controller('UserCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
