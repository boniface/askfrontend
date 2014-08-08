'use strict';

/**
 * @ngdoc function
 * @name askApp.controller:CommentCtrl
 * @description
 * # CommentCtrl
 * Controller of the askApp
 */
angular.module('askApp')
  .controller('CommentCtrl', function ($scope, $http, $resource, $location, baseUrl,$routeParams){

//      $scope.getCommentResource = $resource(baseUrl + 'comment/get/' + id + ':id', { id: '@id' });
      $scope.postCommentResource = $resource(baseUrl + 'comment' + ':id', { id: '@id' });

        $scope.createComment = function(comment, answerId) {

//            $scope.comment.answerId=id;

            console.log('The Comments', answerId);
            $scope.cform = {};
            $scope.cform.screenName  =comment.screenName;
            $scope.cform.email  = comment.email;
            $scope.cform.comment  = comment.comment;
            $scope.cform.answerId  = answerId;
            $scope.cform.questionId=$routeParams.id;

//            $scope.comments= $scope.getCommentResource

            console.log('The Comments', $scope.cform);

            new $scope.postCommentResource($scope.cform).$save();
            $scope.comment ={};

            $scope.commentForm.$setPristine();

//            $location.path('/ask/answer/' + id);

        };

  });
