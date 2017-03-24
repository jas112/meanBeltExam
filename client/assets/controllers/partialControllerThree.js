qAndAApp.controller('PartialControllerThree', ['$scope', '$location', 'clientSideFactory',
  function($scope, $location, clientSideFactory){

    function sessionUser(){
      clientSideFactory.sessionUser(function(data){
        $scope.user = data;
      });
    }

    sessionUser();

  	$scope.addQuestion = function(newQuestion){
      console.log(newQuestion);
  		clientSideFactory.addQuestion(newQuestion);
  	}
  }
])
