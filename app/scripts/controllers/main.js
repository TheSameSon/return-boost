'use strict';

angular.module('returnBoostApp')
  .controller('MainCtrl', ['$rootScope', function ($rootScope){
/*    $timeout(function() {
      navigation.goStep(1);
    }, 2000)

    $timeout(function() {
      navigation.goStep(0);
    }, 4000)*/

  $rootScope.foo = 'bar';
  }]);
