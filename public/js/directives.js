'use strict';

/* Directives */

var app = angular.module('myApp.directives', []);
app.directive('appVersion', ['version', function(version) {
  return function(scope, element, attrs) {
    element.text(version);
  };
}]);

app.directive('stopEvent', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attr) {
      element.bind('click', function (e) {
        e.stopPropagation();
      });
    }
  };
});

app.directive('dictionary', function () {
  return {
    restrict: 'E'
    
  };
});