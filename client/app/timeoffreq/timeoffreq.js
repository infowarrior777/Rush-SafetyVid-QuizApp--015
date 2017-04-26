'use strict';

angular.module('dashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('timeoffreq', {
        url: '/timeoffreq',
        template: '<timeoffreq></timeoffreq>'
      });
  });
