'use strict';

/* Controllers */
function NavCtrl($scope, $http) {
  //get age array
  $scope.ages = [];
  for(var i=0; i<=100; i++){
    $scope.ages.push(i);
  }
  
  //get occupations
  $http({method: 'GET', url: '/api/occupations'}).
  success(function(data, status, headers, config) {
    $scope.occupations = data.occupations;
  }).
  error(function(data, status, headers, config) {
    $scope.occupations = null;
  });
  
  $scope.set_age = function(){
      $scope.user_age = this.age;
  };
  $scope.set_occupation = function(){
      $scope.user_occupation = this.occupation;
  };
}

function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
}

function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
