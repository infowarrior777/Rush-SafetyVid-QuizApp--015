'use strict';

(function(){

class LoginComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('dashboardApp')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent,
    controllerAs: 'loginCtrl'
  });

})();
