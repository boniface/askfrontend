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
    .controller('MainCtrl', function ($scope, $http, $resource, baseUrl,$location) {
        $scope.questionsResource = $resource(baseUrl+'question/questions' + ':id', { id: '@id' });
        $scope.questions = $scope.questionsResource.query();

        $scope.submitResource = $resource(baseUrl+'question' + ':id', { id: '@id' },{ create: { method: 'POST' }, save: { method: 'PUT' }});

        $scope.createQuestion = function(question) {
            new $scope.submitResource(question).$create().then(function(question){
                $scope.questions.push(question);
                $scope.question.screenName='';
                $scope.question.email='';
                $scope.question.title='';
                $scope.question.detail='';
                $scope.questionForm.$setPristine();
                $location.path('/');
            });
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

        $scope.cancel = function(){
            $scope.question.screenName='';
            $scope.question.email='';
            $scope.question.title='';
            $scope.question.detail='';
            $scope.questionForm.$setPristine();
            $location.path('/');
        };

    });
