'use strict';

angular.module('dashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        template: '<register></register>',
        controller: 'RegisterCtrl',
      });
  });
