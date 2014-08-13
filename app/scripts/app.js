'use strict';

/**
 * @ngdoc overview
 * @name askApp
 * @description
 * # askApp
 *
 * Main module of the application.
 */
angular
    .module('askApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap',
        'restangular'
    ])
    .constant('baseUrl', 'http://localhost:8080/api/')
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(false);
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/ask/question', {
              templateUrl: 'views/questionForm.html',
              controller: 'MainCtrl'
            })
            .when('/ask/answer/:id', {
              templateUrl: 'views/answer.html',
              controller: 'AnswerCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
