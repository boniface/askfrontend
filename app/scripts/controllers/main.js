'use strict';

/**
 * @ngdoc function
 * @name askApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the askApp
 */
angular.module('askApp')
    .run(function ($rootScope) {
        $rootScope.name = 'You  In';
    })
    .controller('MainCtrl', function ($scope, $http, $resource, baseUrl) {
        $scope.questionsResource = $resource(baseUrl+'question/questions' + ':id', { id: '@id' });
        $scope.questions = $scope.questionsResource.query();
    });
