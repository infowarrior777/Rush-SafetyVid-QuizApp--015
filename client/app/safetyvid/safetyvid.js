'use strict';

angular.module('dashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('safetyvid', {
        url: '/safetyvid',
        template: '<safetyvid></safetyvid>',
        controller: 'SafetyVidCtrl',
        sp: {
              authenticate: true
            }
      });
  });
