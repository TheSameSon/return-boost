'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('returnBoostApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  describe('$scope.orderStrategy', function () {
    it('should set a stOrder property as sorted by', function () {
      scope.orderStrategy('name');
      expect(scope.stOrder).toBe('name');
    });

    it('should toggle ASC/DESC ordering if the stOrder is the same as passed in function, and set ASC ordering if not', function () {
      scope.orderStrategy('performance');
      expect(scope.stReverse).toBe(false);

      scope.orderStrategy('performance');
      expect(scope.stReverse).toBe(true);

      scope.orderStrategy('performance');
      expect(scope.stReverse).toBe(false);

      scope.orderStrategy('name');
      expect(scope.stReverse).toBe(false);
    });
  });
});
