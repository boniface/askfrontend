'use strict';

/**
 * @ngdoc function
 * @name askApp.controller:AnswerCtrl
 * @description
 * # AnswerCtrl
 * Controller of the askApp
 */
angular.module('askApp')
    .controller('AnswerCtrl', function ($scope, $http, $resource, $location, baseUrl, $routeParams) {
        var id = $routeParams.id;
        $scope.currentQuestion = null;
        $scope.questionAnswerResource = $resource(baseUrl + 'question/get/' + id + ':id', { id: '@id' });
        $scope.postCommentResource = $resource(baseUrl + 'comment' + ':id', { id: '@id' });
        $scope.postAnswerResource = $resource(baseUrl + 'answer' + ':id', { id: '@id' });
        $scope.getCommentResource = $resource(baseUrl + 'comment/get/' + id + ':id', { id: '@id' });
        $scope.getAnswerResource = $resource(baseUrl + 'answer/get/' + id + ':id', { id: '@id' });



        $scope.currentQuestion = $scope.questionAnswerResource.get();
//        $scope.answerId=id;

        $scope.createAnswer = function(answer) {
            $scope.answer.questionId=id;
            new $scope.postAnswerResource(answer).$save();
            $scope.answer ={};
            $scope.answerForm.$setPristine();
            $location.path('/ask/answer/' + id);

        };

        $scope.isUnchanged = function (question) {
            return angular.equals(question, $scope.master);
        };

        $scope.answers = $scope.getAnswerResource.query();

        $scope.createComment = function(comment, answerId) {

//            $scope.comment.answerId=id;

            console.log('The Comments', answerId);
            $scope.cform = {};
            $scope.cform.screenName  =comment.screenName;
            $scope.cform.email  = comment.email;
            $scope.cform.comment  = comment.comment;
            $scope.cform.answerId  = answerId;

            console.log('The Comments', $scope.cform);

            new $scope.postCommentResource($scope.cform).$save();
            $scope.comment ={};

            console.log('The FORM is ',$scope);
//            $scope.commentForm.$setPristine();

            $location.path('/ask/answer/' + id);

        };


    });
