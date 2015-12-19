'use strict';

angular.module('returnBoostApp')
  .directive('bootstrapModal', [function () {
    return {
      scope: {
        title: '=modalTitle'
      },
      replace: true,
      templateUrl: 'views/directives/bootstrap-modal.html',
      transclude: true
    };

  }]);
