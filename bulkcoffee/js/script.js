$(function(){
    let duration = 600;
    let delay = 6000;
    const $mainSlide = $('#main-slide > ul');
    let timerId = 0;
    $('#right-button').on('click', function(){
        if($mainSlide.is(':animated')) return;
        $mainSlide.animate({marginLeft:"-100%"}, duration, function(){
            $mainSlide.children(":first").appendTo($mainSlide);
            $mainSlide.css({marginLeft: 0});
        });
    });
    $("#left-button").on("click", function(){
        if($mainSlide.is(":animated")) return;
        $mainSlide.prepend($mainSlide.children(":last"))
        .css({marginLeft:"-100%"}).animate({marginLeft: 0}, duration);
    });

    timerId = window.setInterval(mainLeftSlide, delay);

    function mainLeftSlide (){
        $mainSlide.animate({marginLeft: "-100%"}, duration, function(){
            $mainSlide.children(":first").appendTo($mainSlide);
            $mainSlide.css({marginLeft: 0});
        });
    };

    $mainSlide.hover(function(){
        window.clearInterval(timerId);
    }, 
        function(){
            timerId = window.setInterval(mainLeftSlide, delay);
        });
        
    const $newSlide = $("#new-slides");
    
    $("#new-right").on("click", function(){
        if($newSlide.is(":animated")) return;
        $newSlide.animate({marginLeft: "-50%"}, duration, function(){
            $newSlide.children(":first").appendTo($newSlide);
            $newSlide.css({marginLeft: 0});
        });
    });
    $("#new-left").on("click", function(){
        if($newSlide.is(":animated")) return;
        $newSlide.prepend($newSlide.children(":last"))
        .css({marginLeft: "-50%"}).animate({marginLeft: 0}, duration);
    });

    const $startupList = $("#startups > ul > li");

    $startupList.on("click", function(){
        $startupList.removeClass('startups-click');
        $(this).addClass('startups-click');
    });
});