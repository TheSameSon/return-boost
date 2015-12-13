'use strict';

angular.module('returnBoostApp')
  .factory('navigation', ['$state', '$rootScope', '$stateParams', '$timeout', function($state, $rootScope, $stateParams, $timeout){
    var navigation = {};

    var _steps = [{
        name: 'Find Strategies',
        state: 'strategies-find'
      },
      {
        name: 'Compare Strategies',
        state: 'strategies-compare'
      },
      {
        name: 'Customize Strategies',
        state: 'strategies-customize'
      },
      {
        name: 'Follow Strategy',
        state: 'strategies-follow'
      }],
      _current;


    var off = $rootScope.$on('$stateChangeSuccess', function (event, toState) {
      for (var i = 0; i < _steps.length; i++) {
        if ($state.is(_steps[i].state)) {
          _current = i;
          break;
        }
      };

      $rootScope.$broadcast('step:initiated', _current);
      off(); // unbind callback
    })

    navigation.stepsEnabled = [0];

    navigation.getSteps = function () {
      return _steps;
    }

    navigation.getCurrentStep = function () {
      return _current;
    };

    navigation.goStep = function (index) {
      var old = _current;

      if (angular.isUndefined(_steps[index])) return;

      $state.go(_steps[index].state);

      $timeout(function () {
        _current = index;

        $rootScope.$broadcast('step:changed', _current, old);
      }, 0);
    };

    return navigation;
  }])
