'use strict';

angular.module('returnBoostApp')
  .directive('offscreen', [function () {
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      templateUrl: 'views/directives/toggle-offscreen.html',
      link: function (scope, element, attrs) {
        scope.offscreenDirection = attrs.move;
        scope.isOffscreenOpen = false;

        angular.element(document).mouseup(function (e) {
          var sidebar = angular.element('.offscreen-left, .offscreen-right');

          if (!sidebar.is(e.target) && sidebar.has(e.target).length === 0 && scope.isOffscreenOpen) {
              scope.offscreen();
          }
        });
      },
      controller: function ($scope) {
        var dir,
          offscreenDirectionClass;

        $scope.offscreen = function () {
          dir = $scope.offscreenDirection ? $scope.offscreenDirection : 'ltr';

          if (dir === 'rtl' || angular.element('.app').hasClass('layout-right-sidebar')) {
            offscreenDirectionClass = 'move-right';
          } else {
            offscreenDirectionClass = 'move-left';
          }

          if ($scope.isOffscreenOpen) {
            angular.element('.app').removeClass('offscreen');
            angular.element('.app').removeClass('move-left move-right');
            $scope.isOffscreenOpen = false;
          } else {
            angular.element('.app').addClass('offscreen ' + offscreenDirectionClass);
            $scope.isOffscreenOpen = true;
          }
        };
      }
    };
  }]);
