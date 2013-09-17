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

  //add occupation
  $scope.add_occupation = function(isEdit){
      $scope.edit_occupation = isEdit;
  };

  $scope.edit_done = function(){
    if(this.input_text == undefined){
      $scope.edit_occupation = false;
      return false;
    }
    $scope.occupation.text = this.input_text;
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

  //article: get categories
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

function SearchCtrl($scope, $http) {
}
SearchCtrl.$inject = ['$scope', '$http'];


function AdminCtrl($scope, $http) {
}
AdminCtrl.$inject = ['$scope', '$http'];


function ContributeCtrl($scope, $http) {
}
ContributeCtrl.$inject = ['$scope', '$http'];


function ContactCtrl($scope, $http) {
  $scope.send_comment = function(){

  }

  $scope.user_register = function(){
    if($scope.user.email != $scope.user.email_confirm){
      return false;
    }
  }
}
ContactCtrl.$inject = ['$scope', '$http'];


function DictionaryCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/dictionary/list'}).
  success(function(data, status, headers, config) {
    $scope.dictionary = data.dictionary;
  }).
  error(function(data, status, headers, config) {
    $scope.dictionary = null;
  });
  
  $scope.unsure_category = [22,23,24];
  $scope.point_list = [
    {id:22, point:0},
    {id:23, point:0},
    {id:24, point:0}
  ];
  $scope.change_category = function(isEdit){
    $scope.edit_category = isEdit;
  }

  $scope.unsure_edit_done = function(){
    $scope.edit_category = false;
  }

  $scope.unsure_edit_cancel = function(){
    $scope.edit_category = false;
  }

  $scope.get_unsure_template = function(){
    return ($scope.edit_category == true ? 'partial/edit_unsure_template' : 'partial/unsure_template');
  }

  // $($scope.categories).each(function(){
    // // bind click event for dictionary toggle

    // $http({method: 'GET', url: '/api/dictionary/list/'+this.id}).
    // success(fnuction(data, status, headers, config){

    // }).error(function(data, status, header, config){

    // });

  // });
}
DictionaryCtrl.$inject = ['$scope', '$http'];
