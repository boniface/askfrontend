'use strict';

/**
 * @ngdoc function
 * @name askApp.controller:AnswerCtrl
 * @description
 * # AnswerCtrl
 * Controller of the askApp
 */
angular.module('askApp')
    .controller('AnswerCtrl', function ($scope,
                                        $http,
                                        $resource,
                                        $location, $timeout, $modal, $log,
                                        baseUrl,
                                        $routeParams) {
        var id = $routeParams.id;
        $scope.currentQuestion = null;
        $scope.questionAnswerResource = $resource(baseUrl + 'question/get/' + id + ':id', { id: '@id' });
        $scope.postAnswerResource = $resource(baseUrl + 'answer' + ':id', { id: '@id' });
        $scope.getAnswerResource = $resource(baseUrl + 'answer/get/' + id + ':id', { id: '@id' });
        $scope.answers = $scope.getAnswerResource.query();

        $scope.currentQuestion = $scope.questionAnswerResource.get();

        $scope.createAnswer = function(answer) {
            $scope.answer.questionId=id;

            new $scope.postAnswerResource(answer).$save().then(function(answer){
                $scope.answers.push(answer);
                $scope.answer ={};
                $scope.answerForm.$setPristine();
                $location.path('/ask/answer/' + id);
            });
        };

        $scope.isUnchanged = function (question) {
            return angular.equals(question, $scope.master);
        };



        // MODAL WINDOW
//        $scope.open = function (_customer) {
//
////            var modalInstance = $modal.open({
////                controller: 'CommentCtrl',
////                templateUrl: 'formmodel.html',
////                resolve: {
////                    customer: function()
////                    {
////                        return _customer;
////                    }
////                }
////            });
//
//        };


    });
