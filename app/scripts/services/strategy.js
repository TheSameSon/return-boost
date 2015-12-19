'use strict';

angular.module('returnBoostApp')
  .factory('Strategy', ['$resource', function($resource){
    var Strategy = $resource('data/strategies.json', {
      strategyId: '@id'
    });

    return Strategy;
  }]);
