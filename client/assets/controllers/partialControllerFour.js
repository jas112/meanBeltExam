qAndAApp.controller('PartialControllerFour', ['$scope', '$location', '$routeParams', 'clientSideFactory',
  function($scope, $location, clientSideFactory){

    function sessionUser(){
      clientSideFactory.sessionUser(function(data){
        $scope.user = data;
      });
    }

    sessionUser();

  	$scope.showQuestion = function(question_id){
  		clientSideFactory.showQuestion(question_id);
      $scope.question = data
  	}
  }
])
