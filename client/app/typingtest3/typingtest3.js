'use strict';

angular.module('dashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('typingtest3', {
        url: '/typingtest3',
        template: '<typingtest-3></typingtest-3>'
      });
  });
