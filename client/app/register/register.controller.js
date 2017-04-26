'use strict';

(function(){

class RegisterComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('dashboardApp')
  .component('register', {
    templateUrl: 'app/register/register.html',
    controller: RegisterComponent,
    controllerAs: 'registerCtrl'
  })



  .controller('RegisterCtrl', function ($scope) {
    $scope.message = 'Hello';
    

    
  });

})();
