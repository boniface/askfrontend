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

        $scope.data = {
            products: [
                { name: 'Product #1', description: 'A product',category: 'Category #1', price: 100 },
                { name: 'Product #2', description: 'A product',category: 'Category #1', price: 110 },
                { name: 'Product #3', description: 'A product',category: 'Category #2', price: 210 },
                { name: 'Product #4', description: 'A product',category: 'Category #3', price: 202 }
            ]
        };
  });
