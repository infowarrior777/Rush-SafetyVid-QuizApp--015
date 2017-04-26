'use strict';

angular.module('dashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('safetyquiz', {
        url: '/safetyquiz',
        template: '<safetyquiz></safetyquiz>',
        sp: {
              authenticate: true
            }
      });
  });
