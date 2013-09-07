'use strict';

/* Controllers */
function NavCtrl($scope, $http) {
  //get age array
  $scope.ages = [];
  for(var i=0; i<=100; i++){
    $scope.ages.push(i);
  }
  
  $scope.occupation = {};

  //get occupations
  $http({method: 'GET', url: '/api/occupations'}).
  success(function(data, status, headers, config) {
    $scope.occupations = data.occupations;
    $scope.current_id = data.current_id
  }).
  error(function(data, status, headers, config) {
    $scope.occupations = null;
  });
  
  $scope.add_occupation = function(isEdit){
      $scope.edit_occupation = isEdit;
  };

  $scope.edit_done = function(){
    $scope.occupation.id = ++$scope.current_id;
    var clone = angular.copy($scope.occupation);
    $scope.occupations.push(clone);
    $scope.user_occupation = clone;
    $scope.occupation = {};
    $scope.edit_occupation = false;
  }
  $scope.edit_cancel = function(){
    $scope.edit_occupation = false;
  }

  $scope.set_age = function(){
      $scope.user_age = this.age;
  };
  $scope.set_occupation = function(){
      $scope.user_occupation = this.occupation;
  };

  $scope.set_active = function(section){
    $scope.selected = section;
  };

  $scope.is_selected = function(section) {
    return $scope.selected === section;
  }
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