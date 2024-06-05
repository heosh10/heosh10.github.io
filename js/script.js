$(function(){
    let duration = 1200 ;
    $('#rightslide > button').on('click', function(e){
        e.preventDefault();
        $('#rightslide').css({
            marginRight: '-960px',
            transitionDuration: duration + "ms"
        });
        $('#leftslide').css({
            marginLeft: '-960px',
            transitionDuration: duration + 'ms'
        });
        
    });
    
    
    let atvboxOffsetTop = [];
    $('.atv-box').each(function(index, element){
        let atvboxTop = $(this).offset().top + 80;
        atvboxOffsetTop.push(atvboxTop);
    });
    
    
    $(window).on('scroll', function(){
        let scrollTop = $(window).scrollTop() + $(window).height();
        
        atvboxOffsetTop.forEach(function(atvboxTop, index) {
            if(scrollTop > atvboxTop) $('.atv-box').eq(index).addClass('on');
            else $('.atv-box').eq(index).removeClass('on');
        });
        
        let activityTop = $('#activity > h2').offset().top + 700;
        
        if(scrollTop > activityTop) $('#activity > h2').css({marginLeft: '960px',}).fadeTo(0, 0.2);
        else $('#activity > h2').css({marginLeft: '190px'}).fadeTo(0, 1);
        
        
        let introTop = $('#introduction > h2').offset().top + 100;
        
        if(scrollTop > introTop) $('#introduction > h2').addClass('opacity');
        else $('#introduction > h2').removeClass('opacity');
        
        let portfolioTop = $('#portfolio').offset().top + 600;
        
        if(scrollTop > portfolioTop) $('#portfolio > div > h2').first().css({marginTop:'520px'}).end().last().css({marginTop:0});
        
        else $('#portfolio > div > h2').first().css({marginTop: 0}).end().last().css({marginTop:'520px'});
        
    });
    
    let $navLi = $('#nav > ul > li');
   $navLi.on('click', function(e){
        e.preventDefault();
       navLiIndex = $navLi.index(this);
       sectionTop = $('.section').eq(navLiIndex).offset().top - 100;
       $('html').animate({scrollTop:sectionTop}, 400);
    });
    
    let $itdiList = $('#itd-i > li')
    let $itdConList = $('#itd-con > li');

    $itdiList.on('click', function(){
        let clickIndex = $itdiList.index(this);
        $itdConList.removeClass('block');
        $itdConList.eq(clickIndex).addClass('block');
    });
    
    
  



    let $pfcon = $('#pf-con');
    let $pfconList = $pfcon.children('ul');
    duration = 600;
   
  

   $('#bt-right').on('click', function(){
    if($pfconList.is(":animated")) return;
        $pfconList.animate({marginLeft:'-33.33%'}, duration, function(){
            $pfconList.children().first().appendTo($pfconList);
        $pfconList.css('margin-left', 0);
        })
   });

   $('#bt-left').on('click', function(){
    if($pfconList.is(":animated")) return;
    $pfconList.prepend($pfconList.children().last())
    .css({marginLeft:'-33.33%'})
    .animate({marginLeft:0}, duration);
   });
});