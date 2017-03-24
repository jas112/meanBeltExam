// Q & A Board Dash  Partial 2 Controller___

qAndAApp.controller('PartialControllerTwo', ['$scope', '$location', 'clientSideFactory',
  function($scope, $location, clientSideFactory){

  	function sessionUser(){
  		clientSideFactory.sessionUser(function(data){
  			$scope.user = data;
  		});
  	}

    sessionUser();

  	function getQuestions(){
  		clientSideFactory.getQuestions(function(data){
  			$scope.questions = data;
  		})
  	}

  	getQuestions();

  }
])
