'use strict';

(function(){

class SafetyvidComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('dashboardApp')
  .component('safetyvid', {
    templateUrl: 'app/safetyvid/safetyvid.html',
    controller: SafetyvidComponent,
    controllerAs: 'safetyvidCtrl'
  })

  .controller('SafetyVidCtrl', function ($scope,$user) {
    $scope.message = 'Hello';
    //$scope.user = user;
    //$scope.user = $rootsope.user
    $user.get()
    .then(function (user) {

      console.log('The current user is', user);
      $scope.user = user;
    })
    .catch(function (error) {
      console.log('Error getting user', error);
    });



   // $scope.user.fullName = user.fullName
 	//$scope.user.fullName = $user.fullName
  });


})();
