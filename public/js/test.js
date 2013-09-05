$(document).ready(function(){
  $('nav a[href="view1"]').hover(
    function(){
      $(this).children('span').replaceWith($(this).attr('data-original-title'));
    },
    function(){
      $(this).html('<span class="glyphicon glyphicon-user"/>');
    }
  );
  $('nav a[href="view2"]').hover(
    function(){
      $(this).children('span').replaceWith($(this).attr('data-original-title'));
    },
    function(){
      $(this).html('<span class="glyphicon glyphicon-comment"/>');
    }
  );
  $('nav a[href="view3"]').hover(
    function(){
      $(this).children('span').replaceWith($(this).attr('data-original-title'));
    },
    function(){
      $(this).html('<span class="glyphicon glyphicon-list"/>');
    }
  );
});