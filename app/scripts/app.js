'use strict';

/**
 * @ngdoc overview
 * @name returnBoostApp
 * @description
 * # returnBoostApp
 *
 * Main module of the application.
 */
angular
  .module('returnBoostApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ui.utils.masks',
    'nvd3'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl',
        controllerAs: 'home',
        templateUrl: 'views/home.html'
      })
      .state('strategies-find', {
        url: '/find-strategies',
        controller: 'FindStrategiesCtrl',
        controllerAs: 'findStrategies',
        templateUrl: 'views/find-strategies.html'
      })
      .state('strategies-compare', {
        url: '/compare-strategies',
        controller: 'CompareStrategiesCtrl',
        controllerAs: 'compareStrategies',
        templateUrl: 'views/compare-strategies.html'
      })
      .state('strategies-customize', {
        url: '/customize-strategies',
        controller: 'CustomizeStrategiesCtrl',
        controllerAs: 'customizeStrategies',
        templateUrl: 'views/customize-strategies.html'
      })
      .state('strategies-follow', {
        url: '/follow-strategy',
        controller: 'FollowStrategiesCtrl',
        controllerAs: 'followStrategies',
        templateUrl: 'views/follow-strategies.html'
      })
  }]);

/*  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/find-strategies', {
        templateUrl: 'views/find-strategies.html',
        controller: 'FindStrategiesCtrl',
        controllerAs: 'findStrategies'
      })
      .when('/compare-strategies', {
        templateUrl: 'views/compare-strategies.html',
        controller: 'CompareStrategiesCtrl',
        controllerAs: 'compareStrategies'
      })
      .when('/customize-strategies', {
        templateUrl: 'views/customize-strategies.html',
        controller: 'CustomizeStrategiesCtrl',
        controllerAs: 'customizeStrategies'
      })
      .when('/follow-strategies', {
        templateUrl: 'views/follow-strategies.html',
        controller: 'FollowStrategiesCtrl',
        controllerAs: 'followStrategies'
      })
      .otherwise({
        redirectTo: '/follow-strategies'
      });
  });*/
