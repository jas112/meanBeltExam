// MEAN Belt Exam App JS___

var qAndAApp = angular.module('qAndAApp', ['ngRoute', 'ngMessages']);

qAndAApp.config(function ($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/partial_1.html',
    controller: 'PartialControllerOne'
  })
  .when('/index', {
    templateUrl: '/partials/partial_2.html',
    controller: 'PartialControllerTwo'
  })
  .when('/new_question', {
    templateUrl: '/partials/partial_3.html',
    controller: 'PartialControllerThree'
  })
  .when('/question/:id', {
    templateUrl: '/partials/partial_4.html',
    controller: 'PartialControllerFour'
  })
  .when('/question/', {
    templateUrl: '/partials/partial_5.html',
    controller: 'PartialControllerFive'
  })
  .otherwise({
    redirectTo: '/'
  });
});
