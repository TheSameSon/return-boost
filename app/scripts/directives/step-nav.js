'use strict';

angular.module('returnBoostApp')
  .directive('stepNav', ['navigation', function (navigation) {
    return {
      restrict: 'E',
      templateUrl: 'views/directives/step-nav.html',
      link: function (scope) {
        scope.steps = navigation.getSteps();

        scope.stepsEnabled = [];
        scope.$watch(function() { return navigation.stepsEnabled; }, function () {
          scope.stepsEnabled = navigation.stepsEnabled;
        });

        var updateCurrent = function (index) {
          scope.current = index;
        };

        scope.$on('step:initiated', function () {
          updateCurrent(navigation.getCurrentStep());
        });

        scope.$on('step:changed', function () {
          updateCurrent(navigation.getCurrentStep());
        });

        scope.goStep = function (index) {
          navigation.goStep(index);
        };
      }
    };
  }]);
