'use strict';

/**
 * @ngdoc function
 * @name askApp.controller:AnswerCtrl
 * @description
 * # AnswerCtrl
 * Controller of the askApp
 */
angular.module('askApp')
    .controller('AnswerCtrl', function ($scope, $http, $resource, $location, $timeout, $modal, $log, baseUrl, $routeParams) {
        var id = $routeParams.id;
        $scope.currentQuestion = null;
        $scope.questionAnswerResource = $resource(baseUrl + 'question/get/' + id + ':id', { id: '@id' });
        $scope.postAnswerResource = $resource(baseUrl + 'answer' + ':id', { id: '@id' });
        $scope.getAnswerResource = $resource(baseUrl + 'answer/get/' + id + ':id', { id: '@id' });

        $scope.answers = $scope.getAnswerResource.query();
        var answerId = null;

        $scope.cform = {};
        $scope.currentQuestion = $scope.questionAnswerResource.get();

        $scope.createAnswer = function (answer) {
            $scope.answer.questionId = id;

            new $scope.postAnswerResource(answer).$save().then(function (answer) {
                $scope.answers.push(answer);
                $scope.answer = {};
                $scope.answerForm.$setPristine();
                $location.path('/ask/answer/' + id);
            });
        };

        $scope.isUnchanged = function (question) {
            return angular.equals(question, $scope.master);
        };

        $scope.user = {
            screenName: null,
            email: null,
            comment: null,
            answerId: null,
            questionId: null
        };

        $scope.comment = function (value) {
            answerId=value;
            var modalInstance = $modal.open({
                templateUrl: 'views/commentForm.html',
                backdrop: true,
                controller: ModalInstanceCtrl,
                resolve: {
                    user: function () {
                        return $scope.user;
                    }
                }
            });

            console.log(' Modal Instance  ', modalInstance);
            modalInstance.result.then(function () {
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        var ModalInstanceCtrl = function ($scope, $modalInstance, user) {
            $scope.postCommentResource = $resource(baseUrl + 'comment' + ':id', { id: '@id' });
            $scope.cform = user;
            $scope.cform.answerId = answerId;
            $scope.cform.questionId = id;
            $scope.submitcomment = function (value) {
                console.log('The Answer is ', value);
                new $scope.postCommentResource(value).$save();
                $modalInstance.close($scope.cform);
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        };

        $scope.products =[
                { name: 'Product #1', description: 'A product',category: 'Category #1', price: 15400 },
                { name: 'Product #2', description: 'A product',category: 'Category #1', price: 110 },
                { name: 'Product #3', description: 'A product',category: 'Category #2', price: 210 },
                { name: 'Product #4', description: 'A product',category: 'Category #3', price: 202 }
            ];



    });
