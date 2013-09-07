'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    // $routeProvider.when('/', {resolve: {redirect: 'RedirectService'}});
    $routeProvider.when('/', {templateUrl: 'partial/index', controller: MyCtrl1});
    $routeProvider.when('/article', {templateUrl: 'partial/article', controller: MyCtrl1});
    $routeProvider.when('/contribute', {templateUrl: 'partial/contribute', controller: MyCtrl2});
    $routeProvider.when('/dictionary', {templateUrl: 'partial/dictionary', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  }]).
  run(function($rootScope, $location) {
    $rootScope.location = $location;
  });