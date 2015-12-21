'use strict';

describe('Controller: FindStrategiesCtrl', function () {

  // load the controller's module
  beforeEach(module('returnBoostApp', function ($provide) {
    $provide.value('strategiesResolve', []);
    $provide.value('assetClassesResolve', []);
  }));

  var FindStrategiesCtrl,
    scope,
    dataStorage;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, $injector) {
    $httpBackend.whenGET('data/strategies.json').respond([])
    $httpBackend.whenGET('data/asset-classes.json').respond([])

    dataStorage = $injector.get('dataStorage');
    scope = $rootScope.$new();

    FindStrategiesCtrl = $controller('FindStrategiesCtrl', {
      $scope: scope
    });
  }));

  describe('$scope.toggleAssetClass', function () {
    var testAssetClass = {
      id: 1,
      name: 'Test Asset Class'
    };

    it('should add asset class to "selectedAssetClasses" array if it is not there, and remove one if vice versa', function () {
      scope.selectedAssetClasses = [];

      scope.toggleAssetClass(testAssetClass);
      expect(scope.selectedAssetClasses).toContain(testAssetClass);

      scope.toggleAssetClass(testAssetClass);
      expect(scope.selectedAssetClasses).not.toContain(testAssetClass);
    });

    it('should save selected asset classes in "dataStorage" service', function () {
      scope.selectedAssetClasses = [];

      scope.toggleAssetClass(testAssetClass);
      expect(dataStorage.selectedAssetClasses).toContain(testAssetClass);

      scope.toggleAssetClass(testAssetClass);
      expect(dataStorage.selectedAssetClasses).not.toContain(testAssetClass);
    });
  });

  describe('$scope.toggleStrategies', function () {
    var testStrategy = {
      id: 1,
      name: 'Test Strategy'
    };

    it('should add strategy to "selectedStrategies" array if it is not there, and remove one if vice versa', function () {
      scope.selectedStrategies = [];

      scope.toggleStrategy(testStrategy);
      expect(scope.selectedStrategies).toContain(testStrategy);

      scope.toggleStrategy(testStrategy);
      expect(scope.selectedStrategies).not.toContain(testStrategy);
    });

    it('should save selected strategies in "dataStorage" service', function () {
      scope.selectedStrategies = [];

      scope.toggleStrategy(testStrategy);
      expect(dataStorage.selectedStrategies).toContain(testStrategy);

      scope.toggleStrategy(testStrategy);
      expect(dataStorage.selectedStrategies).not.toContain(testStrategy);
    });
  });

  describe('Next Step Validation', function () {
    var testStrategy = {
      id: 1,
      name: 'Test Strategy'
    };

    it('should let us go to the next step if at least one strategy is selected', function () {
      scope.selectedStrategies = [];
      dataStorage.selectedStrategies = [];
      scope.$digest();

      expect(scope.next).toBe(false);

      scope.toggleStrategy(testStrategy);
      scope.$digest();
      expect(scope.next).toBe(true);
    });
  });
});
