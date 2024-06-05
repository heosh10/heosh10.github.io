$(function(){
   const $mainList = $('#main-slide');
   let timerId = 0;
   let $photoIndex = 0;
   const $bulletsList = $(".bullets > li > a");

   $bulletsList.eq($photoIndex).addClass("on");

    function nextImageSlide(){
        $photoIndex++;
        if($photoIndex == $bulletsList.length) $photoIndex = 0;
    
        $bulletsList.removeClass('on').eq($photoIndex).addClass('on');
        $mainList.animate({marginLeft:"-100%"}, 800, function(){
            $(this).removeAttr('style').children(':first').appendTo(this);
            
        });
    }

    timerId = window.setInterval(nextImageSlide, 7000);

    $('#main').hover(function(){
        window.clearInterval(timerId);
    },
    function(){
        timerId = window.setInterval(nextImageSlide, 7000);
    }  
    );

    $bulletsList.on("click", function(event){
        event.preventDefault();
        const clickIndex = $bulletsList.index(this);
        const step = clickIndex - $photoIndex;
        
        if(!step) return;

        $photoIndex = clickIndex;

        $bulletsList.removeClass('on').filter(this).addClass('on');

        if(step > 0) {
            $mainList.animate({marginLeft:(-step*100)+"%"}, 800, function(){
                $(this).removeAttr("style").children(":lt("+ step +")").appendTo(this);
            });
        }
        else {
            $mainList.prepend($mainList.children(":gt("+ (step-1) +")"))
            .css({marginLeft:(step*100)+"%"}).animate({marginLeft:0}, 800);
        }
    });
    
    

    $("#main-player > div").on('click', function(){
        $("#main-player > div").removeClass('player-click');
        $(this).addClass('player-click');
    });

    const $eventList = $('#event-slide > ul');

    $('#bt-right').on('click', function(){
        if($eventList.is(":animated")) return;
        $eventList.animate({marginLeft:'-270px'}, 600, function(){
            $eventList.children().first().appendTo($eventList);
            $eventList.css('margin-left', 0);
        });
    });

    $('#bt-left').on('click', function(){
        if($eventList.is(":animated")) return;
        $eventList.prepend($eventList.children().last())
        .css({marginLeft:'-270px'}).animate({marginLeft: 0}, 600);
    });

    let $navLi = $('#nav-left > li');
    $navLi.on('click', function(){
        navLiIndex = $navLi.index(this);
        sectionTop = $('.section').eq(navLiIndex).offset().top - 100;
        $('html').animate({scrollTop:sectionTop}, 400);
    });
});