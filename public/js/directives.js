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

app.directive('iconHover', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attr) {
      var child_span = $(element).children('span');
      element.bind('mouseenter', function (e) {
        $(element).children('span').replaceWith($(element).attr('data-original-title'));
      });
      element.bind('mouseleave', function (e) {
        $(element).html(child_span);
      });
    }
  };
});

app.directive('contactFocus', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attr) {
      element.bind('mouseenter', function (e) {
        $(element).toggleClass('panel-default').toggleClass('panel-primary');
      });
      element.bind('mouseleave', function (e) {
        $(element).toggleClass('panel-default').toggleClass('panel-primary');
      });
    }
  };
});

app.directive('ratingHover', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attr) {
      element.bind('mouseenter', function (e) {
        $('#inputRating span.glyphicon').removeClass('glyphicon-star').addClass('glyphicon-star-empty');
        $('#inputRating ul.list-inline').find('span.glyphicon').each(function(){
          $(this).removeClass('glyphicon-star-empty').addClass('glyphicon-star');
          if($(this).attr('data-rating')==$(element).attr('data-rating')){
            return false;
          }
        });
      });
      element.bind('mouseleave', function (e) {
        $('#inputRating span.glyphicon').removeClass('glyphicon-star').addClass('glyphicon-star-empty');
        if(scope.user_rating){
          $('#inputRating ul.list-inline').find('span.glyphicon').each(function(){
            $(this).removeClass('glyphicon-star-empty').addClass('glyphicon-star');
            if($(this).attr('data-rating')==scope.user_rating){
              return false;
            }
          });
        }        
      });
      element.bind('click', function (e) {
        scope.user_rating = $(element).attr('data-rating');
      });
    }
  };
});

app.directive('unsureTemplate', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'partial/unsure_template',
    link: function (scope, element, attr) {
      scope.unsure_word = attr.text;
      
    }
  };
});
