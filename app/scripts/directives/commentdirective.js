'use strict';

/**
 * @ngdoc directive
 * @name askApp.directive:commentDirective
 * @description
 * # commentDirective
 */
angular.module('askApp')
  .directive('commentList', function ($resource, baseUrl) {
        return {
            link: function (scope, element, attrs) {
                scope.answerCommentsResource = $resource(baseUrl + 'comments/get/' + attrs.commentList + ':id', { id: '@id' });
                scope.comments = scope.answerCommentsResource.query();
            },
            restrict:'A',
            templateUrl: 'views/comments.html'
        };
  });
