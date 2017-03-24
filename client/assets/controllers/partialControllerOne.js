// Login / Registration   Partial 1 Controller___

qAndAApp.controller('PartialControllerOne', ['$scope', '$location', 'clientSideFactory',
  function($scope, $location, clientSideFactory){

  	$scope.registerUser = function(newUser){
      console.log(newUser);
  		clientSideFactory.registerUser(newUser);
  	}

  	$scope.loginUser = function(user){
  		clientSideFactory.loginUser(user);
  	}
  }
])
