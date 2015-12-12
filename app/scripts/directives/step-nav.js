'use strict';

angular.module('returnBoostApp')
  .directive('stepNav', ['navigation', function (navigation) {
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/views/step-nav.html',
      link: function (scope, element, attrs) {
        scope.steps = navigation.getSteps();

        scope.current;

        scope.$on('step:initiated', function (event, value) {
          scope.current = value;
        });

        scope.$on('step:changed', function (event, value) {
          scope.current = value;
        });

        scope.goStep = function (index) {
          navigation.goStep(index);
        }
      }
    }
  }]);
