'use strict';

/**
 * @ngdoc function
 * @name askApp.controller:ProductlistCtrl
 * @description
 * # ProductlistCtrl
 * Controller of the askApp
 */
angular.module('askApp')
  .constant('productListActiveClass', 'btn-primary')
  .constant('productListPageCount', 3)
  .controller('ProductlistCtrl', function ($scope,
                                           $filter,
                                           productListActiveClass,
                                           productListPageCount) {
        var selectedCategory = null;
        $scope.selectedPage = 1;
        $scope.pageSize = productListPageCount;
        $scope.selectCategory = function(newCategory){
            selectedCategory = newCategory;
            $scope.selectedPage = 1;

        };
        $scope.selectPage = function (newPage) {
            $scope.selectedPage = newPage;
        };

        $scope.categoryFilterFn = function(procuct){
            return selectedCategory === null ||
                procuct.category === selectedCategory;
        };

        $scope.getCategoryClass =function(category){
            return selectedCategory === category ? productListActiveClass : '';
        };
        $scope.getPageClass = function (page) {
            return $scope.selectedPage === page ? productListActiveClass : '';
        };
  });
