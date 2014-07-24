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
        $scope.formData = {};
        $scope.createQuestion = function(question) {
            new $scope.submitResource(question).$create();
            $scope.question.screenName='';
            $scope.question.email='';
            $scope.question.title='';
            $scope.question.detail='';
            $scope.questionForm.$setPristine();
            $location.path('/');

        };
        $scope.isUnchanged = function(question) {
            return angular.equals(question, $scope.master);
        };
        $scope.reset = function(){
            $scope.question.screenName='';
            $scope.question.email='';
            $scope.question.title='';
            $scope.question.detail='';
            $scope.questionForm.$setPristine();
        };

    });

