'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]).
  filter('rating', function(){
	return function(user_rating) {
		var commnet;
		switch(user_rating){
			case '1':
				commnet = '太遜了';
				break;
			case '2':
				commnet = '不怎麼樣';
				break;
			case '3':
				commnet = '普通';
				break;
			case '4':
				commnet = '很好';
				break;
			case '5':
				commnet = '棒呆了';
				break;
		}
		return commnet;
	}
  });
