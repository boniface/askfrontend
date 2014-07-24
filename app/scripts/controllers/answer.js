'use strict';

/**
 * @ngdoc function
 * @name askApp.controller:AnswerCtrl
 * @description
 * # AnswerCtrl
 * Controller of the askApp
 */
angular.module('askApp')
  .controller('AnswerCtrl', function ($scope, $http, $resource,$location,baseUrl,$routeParams){
        var id = $routeParams.id;
        $scope.currentQuestion = null;
        $scope.questionAnswerResource = $resource(baseUrl+'question/get/'+id +':id', { id: '@id' });
        $scope.commentResource = $resource(baseUrl+'question/get/'+id +':id', { id: '@id' });
        $scope.answerResource = $resource(baseUrl+'question/get/'+id +':id', { id: '@id' });
        $scope.currentQuestion=$scope.questionAnswerResource.get();


        $scope.formData = {};

        $scope.createAnswer = function(answer) {
            new $scope.submitResource(answer).$create();
            $scope.answer.screenName='';
            $scope.answer.email='';
            $scope.answer.answer='';
            $scope.answerForm.$setPristine();
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
