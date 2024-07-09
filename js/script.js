$(function(){
  // nav slide event
  $(".nav-btn").click(function(){
    $(this).toggleClass("active");
    $(".navi").toggleClass("active");
  });
  // about scroll event
  $(window).on('scroll', function(){
    let scrollTop = $(window).scrollTop() + $(window).height();
    let aboutLeftTop = $(".about-left").offset().top + 250;
    let aboutBottomTop = $(".about-bottom").offset().top + 250;
    if(scrollTop > aboutLeftTop) $(".about-left").fadeTo(0, 1);
    else $(".about-left").fadeTo(0, 0);
    if(scrollTop > aboutLeftTop) $(".about-right").fadeTo(0, 1);
    else $(".about-right").fadeTo(0, 0);
    if(scrollTop > aboutBottomTop) $(".about-bottom").fadeTo(0, 1);
    else $(".about-bottom").fadeTo(0, 0);
  });
});