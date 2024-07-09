window.onload = function(){
  // tab menu slide
  const $tabMenu = $(".header-down > ul > li");
  const $tabMenuList = $(".tab-menu");

  $tabMenu.hover(function(){
    $(this).find(".tab-menu").stop().slideDown();
  },function(){
    $(this).find(".tab-menu").stop().slideUp();
  });
  // photo slide
  const $slidePhoto = $(".slide-photo");
  const $bulletsList = $(".bullets > li > a");
  let $photoIndex = 0;
  $bulletsList.eq($photoIndex).addClass("on");
  // photo slide setInterval
  function mainslide(){
    autoplay = setInterval(function(){
      $photoIndex++;
      if($photoIndex == $bulletsList.length) $photoIndex = 0;
      $bulletsList.removeClass('on').eq($photoIndex).addClass('on');
      $slidePhoto.animate({marginLeft: "-100%"}, 800, function(){
        $slidePhoto.children(":first").appendTo($slidePhoto);
        $slidePhoto.css({marginLeft: 0});
      });
    }, 8000);
  }
  mainslide();
  $slidePhoto.hover(function(){
    window.clearInterval(autoplay);
  }, function(){
    mainslide();
  });
  // photo slide bullet click
  $bulletsList.click(function(e){
    e.preventDefault();
    const clickIndex = $bulletsList.index(this);
    const step = clickIndex - $photoIndex;
    if(!step) return;
    $photoIndex = clickIndex;
    $bulletsList.removeClass("on").filter(this).addClass("on");
    if( step > 0) {
      $slidePhoto.animate({marginLeft:(-step * 100) + "%"}, 800, function(){
        $(this).removeAttr("style").children(":lt("+ step +")").appendTo(this);
      })
    }
    else {
      $slidePhoto.prepend($slidePhoto.children(":gt(" + (step-1) +")"))
      .css({marginLeft:(step*100)+"%"}).animate({marginLeft:0}, 800);
    }
  });
  // ham icon click 
  $(".ham").click(function(){
    $(this).toggleClass("active");
    $(".header-down").toggleClass("active");
  });
  // exhibition section slide
  const $ehbList = $(".ehb-list");
  let ehbItemWidth = $(".ehb-items").outerWidth();

  $(".ehb-right-btn").click(function(){
    if($ehbList.is(":animated")) return;
    $ehbList.animate({marginLeft: - ehbItemWidth}, 600, function(){
      $ehbList.children(":first").appendTo($ehbList);
      $ehbList.css({marginLeft: 0});
    });
  });
  $(".ehb-left-btn").click(function(){
    if($ehbList.is(":animated")) return;
    $ehbList.prepend($ehbList.children(":last"))
    .css({marginLeft: - ehbItemWidth})
    .animate({marginLeft: 0}, 600);
  });

  // artwork section slide
  const $awkList = $(".awk-list");
  let awkItemWidth = $(".awk-list > div").outerWidth();

  $(".awk-right-btn").click(function(){
    if($awkList.is(":animated")) return;
    $awkList.animate({marginLeft: - awkItemWidth}, 600, function(){
      $awkList.children(":first").appendTo($awkList);
      $awkList.css({marginLeft: 0});
    });
  });
  $(".awk-left-btn").click(function(){
    if($awkList.is(":animated")) return;
    $awkList.prepend($awkList.children(":last"))
    .css({marginLeft: - awkItemWidth})
    .animate({marginLeft: 0}, 600);
  });
  
}