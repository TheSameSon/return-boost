'use strict';

describe('Controller: CompareStrategiesCtrl', function () {

  beforeEach(module('ui.router'));

  beforeEach(module('returnBoostApp', function ($provide) {
    $provide.value('strategiesResolve', [{
      id: 1,
      name: 'Test Strategy'
    }]);

    $provide.value('assetClassesResolve', []);
  }));

  var CompareStrategiesCtrl,
    scope,
    dataStorage,
    $state,
    navigation;

    beforeEach(inject(function ($controller, _$rootScope_, $injector, _$state_, strategiesResolve) {
      dataStorage = $injector.get('dataStorage');
      dataStorage.selectedStrategies.push(strategiesResolve[0]);
      navigation = $injector.get('navigation');
      scope = _$rootScope_.$new();
      $state = _$state_;

      spyOn($state, 'go');

      CompareStrategiesCtrl = $controller('CompareStrategiesCtrl', {
        $scope: scope,
      });
    }));

    describe('$scope.selectStrategy(strategy)', function () {
      it('should redirect to third step', function () {
        scope.selectStrategy(scope.selectedStrategies[0]);

        // TODO test save to storage

        expect($state.go).toHaveBeenCalledWith('strategies-customize');
      })
    });
});
