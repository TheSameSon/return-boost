'use strict';

angular.module('returnBoostApp')
  .directive('switcher', [function(){
    return {
      restrict: 'A',
      scope: {
        view: '@switcher',
        isSwitched: '=',
        onSwitch: '&'
      },
      link: function(scope, element, attrs) {
        if (angular.isUndefined(scope.view)) {
          scope.view = 'primary';
        }

        element.addClass('switcher btn btn-' + scope.view + ' switcher-' + scope.view);

        element.on('click', function () {
          if (attrs.disabled) {
            return false;
          }

          element.addClass('just-switched');

          scope.onSwitch();
        });

        element.on('mouseleave', function () {
          element.removeClass('just-switched');
        });

        scope.$watch('isSwitched', function (value) {
          if (value) {
            element.removeClass('switched-off btn-outline');
            element.addClass('switched-on');
          } else {
            element.removeClass('switched-on');
            element.addClass('switched-off btn-outline');
          }
        });
      }
    };
  }]);
