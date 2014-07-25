'use strict';

/**
 * @ngdoc function
 * @name askApp.controller:QuestionsubmitCtrl
 * @description
 * # QuestionsubmitCtrl
 * Controller of the askApp
 */
angular.module('askApp')
    .controller('QuestionsubmitCtrl', function ($scope, $http, $resource,$location,baseUrl ) {
        $scope.submitResource = $resource(baseUrl+'question' + ':id', { id: '@id' },{ create: { method: 'POST' }, save: { method: 'PUT' }});

        $scope.createQuestion = function(question) {
            new $scope.submitResource(question).$create();
            $scope.question ={};
            $scope.questionForm.$setPristine();
            $location.path('/');

        };
        $scope.isUnchanged = function(question) {
            return angular.equals(question, $scope.master);
        };
        $scope.reset = function(){
            $scope.question ={};
            $scope.questionForm.$setPristine();
        };



    });

