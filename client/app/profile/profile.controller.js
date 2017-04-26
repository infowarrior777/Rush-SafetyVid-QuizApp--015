'use strict';

(function(){

class ProfileComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('dashboardApp')
  .component('profile', {
    templateUrl: 'app/profile/profile.html',
    controller: ProfileComponent,
    controllerAs: 'profileCtrl'
  })

  .controller('ProfileCtrl', function ($scope,$http) {
    $scope.message = 'Hello';

    $scope.person = [{}];
    /*$scope.safetyscore = []*/

    $http.get('/api/safetyresultss')
    .then(function(response) {
        $scope.person = response.data;
    });

    console.log('The person object is', $scope.person);

    
  });

})();
