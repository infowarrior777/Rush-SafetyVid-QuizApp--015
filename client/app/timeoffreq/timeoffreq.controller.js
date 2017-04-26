'use strict';

(function(){

class TimeoffreqComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('dashboardApp')
  .component('timeoffreq', {
    templateUrl: 'app/timeoffreq/timeoffreq.html',
    controller: TimeoffreqComponent,
    controllerAs: 'timeoffreqCtrl'
  })




.controller('TimeOffReqCtrl', function ($scope,$user) {
    
    $scope.name = name;
        $scope.location = location;

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


		$scope.employees=

		                 [  
		                    {name:'Vacation (paid)'},
							{name:'Sick Leave (paid)'},
							{name:'Jury Duty (not paid)'},
							{name:'Vote (not paid)'},
							{name:'Bereavement'},
							{name:'FMLA'},
							{name:'Maternity Leave'},
							{name:'Subpoena (not paid)'},
							{name:'Other (not paid)'}
			

						 ];


		$scope.selection=[];
		// toggle selection for a given employee by name
		$scope.toggleSelection = function toggleSelection(employeeName) {
	    var idx = $scope.selection.indexOf(employeeName);

	    // is currently selected
	    if (idx > -1) {
	      $scope.selection.splice(idx, 1);
	    }

	    // is newly selected
	    else {
	      $scope.selection.push(employeeName);
	    }
	  };







  });





})();
