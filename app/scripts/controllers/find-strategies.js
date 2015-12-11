'use strict';

/**
 * @ngdoc function
 * @name returnBoostApp.controller:FindStrategiestCtrl
 * @description
 * # FindStrategiestCtrl
 * Controller of the returnBoostApp
 */
angular.module('returnBoostApp')
  .controller('FindStrategiestCtrl', ['$scope', function ($scope) {
    $scope.strategies = [
      {
        name: 'Stocks'
      },
      {
        name: 'Bonds'
      },
      {
        name: 'Real Estate'
      },
      {
        name: 'Commodities'
      }
    ];

    // TODO: create service
    $scope.selected = [];

    $scope.toggleStrategy = function(strategy) {
      var index = $scope.selected.indexOf(strategy);

      if (index > -1) {
        $scope.selected.splice(index, 1);
      } else {
        $scope.selected.push(strategy);
      }

      console.log($scope.selected);
    };

  }]);
