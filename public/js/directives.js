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

app.directive('collapseToggle', ['$compile', function ($compile){
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      $(element).on('click', function(){
        var targetID = attr.target; //td.hiddenRow
        $.ajax({
          type: 'GET',
          url: '/api/dictionary/list/' + scope.category.id + '?page=0',
          dataType: 'json'
        }).
        done(function(data){
          var ret_data = data;
        }).
        fail(function(err){
            console.log(err);
        });
        $(targetID).html('<div class="text-success" style="padding:5px 5px 0 5px"> 已收錄：</div>');
      });
    }
  };
}]);

app.directive('unsureTemplate', ['$compile', '$http', '$templateCache', function ($compile, $http, $templateCache) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'partial/unsure_template',
    link: function (scope, element, attr) {
      // var point_list = scope.point_list;
      var nid = attr.nid;
      //set click callback with jqlite for this template
      var text_button = $(element).find('button:first-child');
      var first_list = $(element).find('li:first-child');
      var second_list = $(element).find('li:nth-child(2)');
      var third_list = $(element).find('li:nth-child(3)');
      $(text_button).html(attr.text);
      first_list.on('click',function(){
        // point_list.push(nid);
        
        $.ajax({          
          type: 'POST',
          url: '/api/dictionary/add/'+attr.category+'/'+attr.nid,
          dataType: 'json',
          success: function(data){
            if(!$(second_list).hasClass('disabled')){
              $(first_list).addClass('disabled');
            }
            $(second_list).removeClass('disabled');
          },
          error: function(err){
            console.log(err);
          }
        });
      });
      second_list.on('click',function(){
        // point_list.push({nid:-1});

        $.ajax({          
          type: 'DELETE',
          url: '/api/dictionary/remove/'+attr.category+'/'+attr.nid,
          dataType: 'json',
          success: function(data){
            if(!$(first_list).hasClass('disabled')){
              $(second_list).addClass('disabled');
            }
            $(first_list).removeClass('disabled');
          },
          error: function(err){
            console.log(err);
          }
        });
      });
      third_list.children('a').attr('href','/edit/'+attr.category+'/'+attr.nid);
    }
  };
}]);
