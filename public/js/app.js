'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {templateUrl: 'partial/index'});
    $routeProvider.when('/article', {templateUrl: 'partial/article'});
    $routeProvider.when('/contribute', {templateUrl: 'partial/contribute', controller: ContributeCtrl});
    $routeProvider.when('/dictionary', {templateUrl: 'partial/dictionary', controller: DictionaryCtrl});
    $routeProvider.when('/contact', {templateUrl: 'partial/contact', controller: ContactCtrl});
    $routeProvider.when('/search', {templateUrl: 'partial/search', controller: SearchCtrl});
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  }]).
  run(function($rootScope, $location) {
    $rootScope.location = $location;
  });