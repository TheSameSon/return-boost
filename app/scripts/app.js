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
    'ui.bootstrap',
    'ngSanitize',
    'ngTouch',
    'helpers',
    'ui.utils.masks',
    'angularModalService',
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
        data: {
          step: {
            index: 0,
            name: 'Find Strategies'
          }
        },
        controller: 'FindStrategiesCtrl',
        controllerAs: 'findStrategies',
        templateUrl: 'views/find-strategies.html',
        resolve: {
          strategiesResolve: ['Strategy', function (Strategy) {
            return Strategy.query().$promise;
          }],
          assetClassesResolve: ['AssetClass', function (AssetClass) {
            console.log('assetClassesResolve')
            return AssetClass.query().$promise;
          }]
        }
      })
      .state('strategies-compare', {
        url: '/compare-strategies',
        data: {
          step: {
            index: 1,
            name: 'Compare Strategies'
          }
        },
        controller: 'CompareStrategiesCtrl',
        controllerAs: 'compareStrategies',
        templateUrl: 'views/compare-strategies.html'
      })
      .state('strategies-customize', {
        url: '/customize-strategies',
        data: {
          step: {
            index: 2,
            name: 'Customize Strategies'
          }
        },
        controller: 'CustomizeStrategiesCtrl',
        controllerAs: 'customizeStrategies',
        templateUrl: 'views/customize-strategies.html'
      })
      .state('strategies-follow', {
        url: '/follow-strategy',
        data: {
          step: {
            index: 3,
            name: 'Follow Strategy'
          }
        },
        controller: 'FollowStrategiesCtrl',
        controllerAs: 'followStrategies',
        templateUrl: 'views/follow-strategies.html'
      })
  }])
  .run(['$rootScope', 'navigation', '$state', function ($rootScope, navigation, $state) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      var enabled = navigation.stepsEnabled;

      if (angular.isDefined(toState.data) && angular.isDefined(toState.data.step) && enabled.indexOf(toState.data.step.index) < 0) {
        event.preventDefault();
        navigation.goStep(enabled[enabled.length - 1]);
      }
    })
  }]);
