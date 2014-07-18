'use strict';

/**
 * @ngdoc function
 * @name askApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the askApp
 */
angular.module('askApp')
    .run(function($rootScope) {
        $rootScope.name = 'You  In';
    })
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML Boilerplate',
      'Angula',
      'Karma'
    ];


  });
