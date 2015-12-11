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
    'ngSanitize',
    'ngTouch',
    'nvd3'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/find-strategies', {
        templateUrl: 'views/find-strategies.html',
        controller: 'FindStrategiestCtrl',
        controllerAs: 'findStrategies'
      })
      .when('/compare-strategies', {
        templateUrl: 'views/compare-strategies.html',
        controller: 'CompareStrategiestCtrl',
        controllerAs: 'compareStrategies'
      })
      .otherwise({
        redirectTo: '/compare-strategies'
      });
  });
