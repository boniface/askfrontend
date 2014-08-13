'use strict';

/**
 * @ngdoc function
 * @name askApp.controller:CommentCtrl
 * @description
 * # CommentCtrl
 * Controller of the askApp
 */
angular.module('askApp')
  .controller('CommentCtrl', function ($scope){

//      $scope.getCommentResource = $resource(baseUrl + 'comment/get/' + id + ':id', { id: '@id' });
//      $scope.postCommentResource = $resource(baseUrl + 'comment' + ':id', { id: '@id' });

        $scope.createComment = function(cform) {
            console.log('The Comments', cform);





            $scope.comments= $scope.getCommentResource;

            console.log('The Comments', $scope.cform);

//            new $scope.postCommentResource($scope.cform).$save();
//            $scope.comment ={};

            $scope.commentForm.$setPristine();

//            $location.path('/ask/answer/' + id);

        };

  });
