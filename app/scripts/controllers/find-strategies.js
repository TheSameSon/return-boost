'use strict';

/**
 * @ngdoc function
 * @name returnBoostApp.controller:FindStrategiestCtrl
 * @description
 * # FindStrategiestCtrl
 * Controller of the returnBoostApp
 */
angular.module('returnBoostApp')
  .controller('FindStrategiesCtrl', ['$scope', 'strategiesResolve', 'assetClassesResolve', 'dataStorage', '$filter', 'navigation', function ($scope, strategiesResolve, assetClassesResolve, dataStorage, $filter, navigation) {
    $scope.assetClasses = assetClassesResolve;
    $scope.strategies = strategiesResolve;

    $scope.selectedAssetClasses = [];
    $scope.selectedStrategies = dataStorage.selectedStrategies;

    $scope.toggleAssetClass = function (assetClass) {
      var index = $scope.selectedAssetClasses.indexOf(assetClass);

      if (index > -1) {
        $scope.selectedAssetClasses.splice(index, 1);
      } else {
        $scope.selectedAssetClasses.push(assetClass);
      }

      // unselect strategies which hasn't selected asset classes
      $scope.selectedStrategies = $filter('hasAssetClass')($scope.selectedStrategies, $scope.selectedAssetClasses);

      // update storage
      dataStorage.selectedAssetClasses = $scope.selectedAssetClasses;

      if (!angular.equals(dataStorage.selectedStrategies, $scope.selectedStrategies)) {
        dataStorage.selectedStrategies = $scope.selectedStrategies;
      }
    };

    $scope.toggleStrategy = function (strategy) {
      var index = $scope.selectedStrategies.indexOf(strategy);

      if (index > -1) {
        $scope.selectedStrategies.splice(index, 1);
      } else {
        $scope.selectedStrategies.push(strategy);
      }

       dataStorage.selectedStrategies = $scope.selectedStrategies;
    };

    // validate for next step
    $scope.next = false;

    $scope.$watch(function() { return dataStorage.selectedStrategies }, function () {
      if (dataStorage.selectedStrategies.length > 0) {
        $scope.next = true;
        navigation.stepsEnabled = [0, 1];
      } else {
        $scope.next = false;
        navigation.stepsEnabled = [0];
      }
    }, true);
  }]);
