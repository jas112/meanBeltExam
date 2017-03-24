// MEAN Belt Exam Factory__

qAndAApp.factory('clientSideFactory', ['$location', '$http', function($location, $http){

    var factory = {}

    factory.registerUser = function(user){
        console.log(user);
        $http({
            url: '/register',
            method: 'POST',
            data: user
        }).then(function(res){
            console.log(res);
            $location.url('/index');
        })
    }

    factory.loginUser = function(user){
        console.log(user);
        $http({
            url:'/login',
            method: 'POST',
            data: user
        }).then(function(res){
            console.log(res.data);
            $location.url('/index');
        });
    }

    factory.sessionUser = function(callback){
        $http({
            url: '/sessionPresence',
            method: 'GET'
        }).then(function(res){
            callback(res.data);
        }, function(res){
            $location.url('/');
        })
    }

    factory.getQuestions = function(callback){
        $http({
            url: '/questions',
            method: 'GET'
        }).then(function(res){
            callback(res.data);
        })
    }

    factory.addQuestion = function(newQuestion, callback){
        $http({
            url: '/questions',
            method: 'POST',
            data: newQuestion
        }).then(function(res){
            callback();
            console.log(res);
        }, function(res){
            $location.url('/index');
        })
    }

    factory.showQuestion = function(question_id, callback){
        $http({
            url: '/question/' + question_id,
            method: 'GET',
            data: callback
        }).then(function(res){
            callback(res.data);
        })
    }

    factory.addAnswer = function(newAnswer, question_id, callback){
        $http({
            url: '/answer/' + question_id,
            method: 'POST',
            data: newAnswer
        }).then(function(res){
            callback(question_id);
            console.log(res);
        })
    }

    factory.likeAnswer = function(answer_id){
        $http({
            url: '/like/' + answer_id,
            method: 'GET'
        }).then(function(res){
          console.log("this answer was liked!!!!");
        })
    }

    return factory;
}]);
