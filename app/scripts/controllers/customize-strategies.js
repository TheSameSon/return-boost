'use strict';

/**
 * @ngdoc function
 * @name returnBoostApp.controller:FindStrategiestCtrl
 * @description
 * # FindStrategiestCtrl
 * Controller of the returnBoostApp
 */
angular.module('returnBoostApp')
  .controller('CustomizeStrategiesCtrl', ['$scope', function ($scope) {
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

    $scope.strategy = {
      name: 'Strategy 1'
    }
/*
    $('#investments').mask('999999', {
         radixPoint:".",
         groupSeparator: ",",
         digits: 2,
         autoGroup: true,
         prefix: '$'
    })*/

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
