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
    'highcharts-ng'
  ])
  .constant('COLORS', {
    warning: '#ffc65d',
    info: '#4cc3d9',
    danger: '#d96557',
    success: '#2ECC71',
    primary: '#09c',
    textColor: '#6B6B6B',
    // white: 'white',
    border: '#e4e4e4',
    bodyBg: '#e0e8f2',
    dark: '#4C5064',
    'default': '#e2e2e2',
  })
  .config(['highchartsNGProvider', function (highchartsNGProvider) {
    // highchartsNGProvider.lazyLoad(); // will load hightcharts (and standalone framework if jquery is not present) from code.hightcharts.com

    // highchartsNGProvider.lazyLoad([highchartsNGProvider.HIGHCHART, "maps/modules/map.js", "mapdata/custom/world.js"]);// you may add any additional modules and they will be loaded in the same sequence
    // highchartsNGProvider.lazyLoad([highchartsNGProvider.HIGHSTOCK, "stock/modules/exporting.js"]);// you may add any additional modules and they will be loaded in the same sequence

    //highchartsNGProvider.basePath("/scripts/"); // change base path for scripts, default is http(s)://code.highcharts.com/

  }])
  .run(['$rootScope', 'navigation', '$state', function ($rootScope, navigation, $state) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      var enabled = navigation.stepsEnabled;

      if (angular.isDefined(toState.data) && angular.isDefined(toState.data.step) && enabled.indexOf(toState.data.step.index) < 0) {
        event.preventDefault();
        navigation.goStep(enabled[enabled.length - 1]);
      } else {
        angular.element(document).scrollTop();
      }
    })
  }]);
