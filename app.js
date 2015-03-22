$(document).ready(function(){
     //MOBILE MENU//   
  $('#hamburger').click(function(){
    $('#navContainer').slideToggle(100);
  });

/* Store the window width */
    var windowWidth = $(window).width();

    /* Resize Event */
  $(window).resize(function(){
      // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
      if ($(window).width() != windowWidth) {

          // Update the window width for next time
          windowWidth = $(window).width();
          if ($('#hamburger').css('display') == 'none' ){
            $('#navContainer').css('display','table');
          }
          //IOS RESIZES DURING SCROLLING APPARANTLY SO THIS CLOSES MENU
          if ($('#hamburger').css('display') != 'none'){
              $('#navContainer').css('display','');
          }
      }

      // Otherwise do nothing

  });

});




    













/*
var main = function() {
  /* Push the body and the nav over by 285px over 
  $('#coverphoto').click(function() {
    $('#coverphoto').animate({
      left: "200px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back 
  $('#coverphoto').click(function() {
    $('#coverphoto').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
};
*/




