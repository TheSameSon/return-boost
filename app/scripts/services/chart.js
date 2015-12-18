'use strict';

angular.module('returnBoostApp')
  .factory('chart', ['$http', 'helper', 'COLORS', '$q', '$timeout', function($http, helper, COLORS, $q, $timeout) {
    var chart = {},
        strategyColors = {};

    // retruns chart data obj for specific strategy
    chart.performance = function (strategies) {
      return $http({
        url: 'data/appendix-b.json',
        method: 'GET',
        transformResponse: [function (data) {
            return angular.fromJson(data.replace(/(\/\*[\w\'\s\r\n\*]*\*\/)/g, ''));
        }]
      }).then(function(response) {
        var data = [],
            series = [];

        angular.forEach(response.data, function (row, i) {
          if (i%25 === 0) {
            data.push(row);
          }
        });

        series.push({
          name: strategies[0].name,
          data: data,
          tooltip: {
            valueDecimals: 2
          }
        })

        var performanceChart = {
          title: {
              text: 'Performance',
              style: {
                color: COLORS.textColor
              }
          },
          series: series,
          xAxis: {
            type: 'datetime'
          },
          yAxis: {
            title: {
              enabled: false
            }
          }
        }

        return performanceChart;
      });
  }

  chart.risk = function (strategies) {
    var data = [],
        series = [];

    // static data
    data.push([12, 15]);
    data.push([13, 14]);

    series.push({
      name: strategies[0].name,
      data: data[0]
    });

    series.push({
      name: angular.isDefined(strategies[1]) ? strategies[1].name : strategies[0].name + '*',
      data: data[1]
    });


    var riskChart = {
      options: {
        chart: {
          type: 'column'
        }
      },
      title: {
          text: 'Risk',
          style: {
            color: COLORS.textColor
          }
      },
      series: series
    };

    // we will return a promise to immitate an $http request or to sync with any functions could be required to build data on production
    var deferred = $q.defer();

    $timeout(function() {
      deferred.resolve(riskChart);
    }, 1);

    return deferred.promise;
  }

  chart.allocation = function (strategies) { // should it take selectedAssetClasses instead?
    var series = [{
          data: [{
              name: strategies[0].name,
              y: 58
          }, {
              name: angular.isDefined(strategies[1]) ? strategies[1].name : strategies[0].name + '*',
              y: 24
          }, {
              name: angular.isDefined(strategies[2]) ? strategies[2].name : strategies[0].name + '**',
              y: 18
          }]
      }];

    var allocationChart = {
      options: {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        plotOptions: {
          pie: {
            dataLabels: {
              distance: -40
            }
          }
        }
      },
      title: {
          text: 'Allocation',
          style: {
            color: COLORS.textColor
          }
      },
      series: series
    };



    // we will return a promise to immitate an $http or to sync with any other functions could be required to build data on production
    var deferred = $q.defer();

    $timeout(function() {
      deferred.resolve(allocationChart);
    }, 1);

    return deferred.promise;
  }

  return chart;
}]);
