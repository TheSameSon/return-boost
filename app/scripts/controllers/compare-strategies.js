'use strict';

/**
 * @ngdoc function
 * @name returnBoostApp.controller:FindStrategiestCtrl
 * @description
 * # FindStrategiestCtrl
 * Controller of the returnBoostApp
 */
angular.module('returnBoostApp')
  .controller('CompareStrategiestCtrl', ['$scope', '$http', function ($scope, $http) {
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
    $scope.selected = [$scope.strategies[1]];

    $scope.toggleStrategy = function(strategy) {
      var index = $scope.selected.indexOf(strategy);

      if (index > -1) {
        $scope.selected.splice(index, 1);
      } else {
        $scope.selected.push(strategy);
      }

      console.log($scope.selected);
    };


  // Line chart
  function sinAndCos() {
    var sin = [],
      sin2 = [],
      cos = [];

    for (var i = 0; i < 100; i++) {
      sin.push({
        x: i,
        y: Math.sin(i / 10)
      });
      sin2.push({
        x: i,
        y: Math.sin(i / 10) * 0.25 + 0.5
      });
      cos.push({
        x: i,
        y: 0.5 * Math.cos(i / 10)
      });
    }

    return [{
        values: sin,
        key: 'Sine Wave',
        color: '#000'
        },
      {
        values: cos,
        key: 'Cosine Wave',
        color: '#000'
        },
      {
        values: sin2,
        key: 'Another sine wave',
        color: '#000'
        }];
    }

$http({
  url: 'http://localhost:9000/data/appendix-b.json',
  method: 'GET',
  transformResponse: [function (data) {
      return angular.fromJson(data.replace(/(\/\*[\w\'\s\r\n\*]*\*\/)/g, ''));
  }]
}).then(function(response) {
  var data = [];
  var years = {};
  angular.forEach(response.data, function(values, i) {
    if (i%10 > 0) {
      return;
    }
    var date = new Date(values[0]);

    if (angular.isUndefined(years[date.getFullYear()]) && date.getMonth() < 6) {
      years[date.getFullYear()] = values[0];
    }

    data.push({x: values[0], y: values[1]});
  })

    $scope.charts = {
      performance: {
        data: [{
            key: "Cumulative Return",
            values: data,
            color: '#000'
        }],
        options: {
            chart: {
                type: 'lineChart',
                height: 350,
                margin : {
                    top: 0,
                    right: 0,
                    bottom: 40,
                    left: 0
                },
                x: function(d){ return d.x; },
                y: function(d){ return d.y; },
                useInteractiveGuideline: true,
                xAxis: {
                    axisLabel: '',
                    tickFormat: function(ms){
                      var date = new Date(ms);
                      return date.getFullYear();
                    },
                    // tickValues: [1229040000000, 1321833600000, 2010]
                    tickValues: function() {
                      var timestamps = [];
                      for (var prop in years) {
                        timestamps.push(years[prop]);
                      }

                      return timestamps;
                    },
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: '',
                    tickFormat: function(d){
                        // return '';
                        return d;
                    }
                }
            }
        }
      },

      risk: {

      }
    }

// Inspired by Lee Byron's test data generator.
function bumpLayer(n, o) {

  function bump(a) {
    var x = 1 / (.1 + Math.random()),
        y = 2 * Math.random() - .5,
        z = 10 / (.1 + Math.random());
    for (var i = 0; i < n; i++) {
      var w = (i / n - y) * z;
      a[i] += x * Math.exp(-w * w);
    }
  }

  var a = [], i;
  for (i = 0; i < n; ++i) a[i] = o + o * Math.random();
  for (i = 0; i < 5; ++i) bump(a);
  return a.map(function(d, i) { return {x: i, y: Math.max(0, d)}; });
}

  var n = 4, // number of layers
      m = 58, // number of samples per layer
      stack = d3.layout.stack(),
      layers = stack(d3.range(n).map(function() { return bumpLayer(m, .1); })),
      yGroupMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y; }); }),
      yStackMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); });


    console.log(layers);
});

$scope.charts = {};


  }]);
