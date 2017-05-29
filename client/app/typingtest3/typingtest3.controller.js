'use strict';

(function(){

class Typingtest3Component {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('dashboardApp')
  .component('typingtest3', {
    templateUrl: 'app/typingtest3/typingtest3.html',
    controller: Typingtest3Component,
    controllerAs: 'typingtest3Ctrl'
  })

    .controller('typingtest3Ctrl', function ($scope,$user,$http,$window) {
    

    $user.get()
    .then(function (user) {

      console.log('The current user is', user);
      $scope.user = user;
    })
    .catch(function (error) {
      console.log('Error getting user', error);
    });


 //$scope.person = {}

 	// $scope.person = {};

    $scope.message = 'Hello';
    //$scope.answersBox = quiz.answersBox.value;
    //$scope.safetyscore = []
    // $scope.person = [{}];
    // $scope.wpm = []
    // $scope.errors = []
    // $scope.accuracy = []
    // $scope.time = []
    //$scope. = []

    $scope.wpm = $window.tStat;
    $scope.errors = $window.endTest.tErr;
    $scope.accuracy = $window.endTest.tscore;
    $scope.time = $window.endTest.tTT;




// start addscore function

    $scope.addscore = function(){
    
    
     $scope.person = [{}];
    $scope.wpm = [];
    $scope.errors = [];
    $scope.accuracy = [];
    $scope.time = [];


    $scope.wpm.push(tStat.innerText);
    $scope.errors.push(tErr.innerText);
    $scope.accuracy.push(tscore.innerText);
    $scope.time.push(tTT.innerText);
    
    $scope.person = {
    	name: $scope.user.fullName,
    	lastfour: $scope.user.customData.lastfour,
    	wpm:      $scope.wpm[0],
    	errs:   $scope.errors[0],
    	accuracy: $scope.accuracy[0],
    	time:     $scope.time[0]
    };

    // req.user.customData.wpm = $scope.person.wpm
    // req.user.customData.errs = $scope.person.errs
    // req.user.customData.accuracy = $scope.person.accuracy
    // req.user.customData.time = $scope.person.time

console.log('The person object is', $scope.person);





// start genPDF Function -----------------------------------------------------------------

// function genPDF(){

//   html2canvas(document.body, {
//     onrendered: function (canvas) {

//       var img = canvas.toDataURL("image/png");
//       var doc = new jsPDF('', 'mm', [canvas.width, canvas.height]);
//       doc.addImage(img,  'png', 0, 0, canvas.width, canvas.height);
//       doc.save('test.pdf');

//      } // closing onrendered function

//   }); // closing html2canvas 


// };   // closing genPDF function

// genPDF(); // invoking pdf generator function  


// End genPDF Function --------------------------------------------------------------------




  // $user.get()
  //   .then(function (user) {

  //     console.log('The current user is', user);
  //     $scope.user = user;


  //     req.user.customData.wpm = $scope.person.wpm
  //     req.user.customData.errs = $scope.person.errs
  //     req.user.customData.accuracy = $scope.person.accuracy
  //     req.user.customData.time = $scope.person.time
  //     console.log('The current user after adding typing score is', user);
  //   })
  //   .catch(function (error) {
  //     console.log('Error getting user', error);
  //   });










    $http.post('/api/safetyresultss', $scope.person);

    // $http.post('/api/sendemails', $scope.person);
    
    /*$http.post('/api/sendemails', $scope.person);*/
	

};  // end of addscore function 



   
    console.log($scope.person)

  }); // closing controller brackets

})(); // closing and immediately invoking this function 

