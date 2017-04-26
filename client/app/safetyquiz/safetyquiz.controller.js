'use strict';

(function(){

class SafetyquizComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('dashboardApp')
  .component('safetyquiz', {
    templateUrl: 'app/safetyquiz/safetyquiz.html',
    controller: SafetyquizComponent,
    controllerAs: 'safetyquizCtrl'
  })

  .controller('safetyquizCtrl', function ($scope,$user,$http) {
    

    $user.get()
    .then(function (user) {

      console.log('The current user is', user);
      $scope.user = user;
    })
    .catch(function (error) {
      console.log('Error getting user', error);
    });


 //$scope.person = {}

 	$scope.person = {};

    $scope.message = 'Hello';
    //$scope.answersBox = quiz.answersBox.value;
    //$scope.safetyscore = []
    $scope.person = [{}];
    $scope.safetyscore = []
    //$scope. = []






// start addscore function

    $scope.addscore = function(safetyscore,person){
    
    //	$scope.safetyscore = quiz.answersBox.value;



    $scope.safetyscore.push(quiz.answersBox.value);
    $scope.person = {
    	name: $scope.user.fullName,
    	lastfour: $scope.user.customData.lastfour,
    	svidscore:  $scope.safetyscore[0]
    };

console.log('The person object is', $scope.person);
//console.log('the safety score', safetyscore[0]);




/*

$scope.user.customData.safetyvidscore = $scope.person.svidscore;

$scope.user.customData.save();

$user.customData.save();

*/



/*
function addsvid2stormpath(account, req, res, next) {
    
    

    console.log('User:', account.email, 'New Safety Score is about to be saved to stormpath custom database');
    


    account.getCustomData(function(err, customData){
  customData.safetyvidscore = $scope.safetyscore[0];
  customData.save(function(err){
    if(!err) {
      console.log('safetyvidscore was saved');
    }
  });
});



    next();
  };

addsvid2stormpath();


*/









function genPDF(){

  html2canvas(document.body, {
    onrendered: function (canvas) {

      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF('', 'mm', [canvas.width, canvas.height]);
      doc.addImage(img,  'png', 0, 0, canvas.width, canvas.height);
      doc.save('test.pdf');

     } // closing onrendered function

  }); // closing html2canvas 


};   // closing genPDF function

genPDF(); // invoking pdf generator function  




    $http.post('/api/safetyresultss', $scope.person);

    $http.post('/api/sendemails', $scope.person);
    
    /*$http.post('/api/sendemails', $scope.person);*/
	

};  // end of addscore function 



    //stormpath.user.safetyvidresult = answersBox
    console.log($scope.safetyscore)

  }); // closing controller brackets

})(); // closing and immediately invoking this function 
