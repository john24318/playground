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
    $scope.current_id = data.current_id;
  }).
  error(function(data, status, headers, config) {
    $scope.occupations = null;
  });
  
  $scope.add_occupation = function(isEdit){
      $scope.edit_occupation = isEdit;
  };

  $scope.edit_done = function(){
    if($scope.occupation.text == undefined){
      $scope.edit_occupation = false;
      return false;
    }

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
  $scope.user_filters = [];

  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });

  //get categories
  $http({method: 'GET', url: '/api/categories'}).
  success(function(data, status, headers, config) {
    $scope.categories = data.categories;
  }).
  error(function(data, status, headers, config) {
    $scope.categories = null;
  });
  
  $scope.add_filter_category = function(category){
    if($scope.user_filters.indexOf(category) == -1)
      $scope.user_filters.push(category);
  }

  $scope.remove_filter_category = function(category){
    var index = $scope.user_filters.indexOf(category);
    $scope.user_filters.splice(index, 1);
  }
}

function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];


function SearchCtrl() {
}
SearchCtrl.$inject = [];


function AdminCtrl() {
}
AdminCtrl.$inject = [];
