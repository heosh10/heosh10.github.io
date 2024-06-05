$(function(){
    const $tourList = $('#tour-img > div');
    
    let duration = 600;

$("#tour-right").on("click", function(){
    if($tourList.is(":animated")) return;
    $tourList.animate({marginLeft: "-100%"}, duration, function(){
        $(this).removeAttr('style').children(':first').appendTo(this);
    });
});
$("#tour-left").on("click", function(){
    if($tourList.is(':animated')) return;
    $tourList.prepend($tourList.children().last())
    .css({marginLeft: "-100%"}).animate({marginLeft: 0}, duration);
});


const $tourTextList = $("#tour-text > ul > li");
let photoIndex = 0;

$tourTextList.on('click', function(){
    const clickIndex = $tourTextList.index(this);
    const step = clickIndex - photoIndex;

    if(!step) return;

    photoIndex = clickIndex;

    $tourTextList.removeClass('color-on').filter(this).addClass('color-on');

    if(step > 0) {
        $tourList.animate({marginLeft:(-step*100) + "%"}, duration, function(){
            $(this).removeAttr("style").children(":lt(" + step + ")").appendTo(this);
        });
    }
    else {
        $tourList.prepend($tourList.children(":gt(" + (step-1) + ")"))
        .css({marginLeft:(step*100) + "%"}).animate({marginLeft:0}, duration);
    }
});





const $productList = $("#product-slide > ul");

$("#pd-right").on("click", function(){
   if($productList.is(":animated")) return;
   $productList.animate({marginLeft:"-340px"}, duration, function(){
    $(this).removeAttr("style").children(":first").appendTo(this);
   });
});
$("#pd-left").on("click", function(){
    if($productList.is(":animated")) return;
    $productList.prepend($productList.children().last())
    .css({marginLeft: "-33.33%"}).animate({marginLeft: 0}, duration);
});

const $festivalList = $("#festival-slide");

$("#fest-right").on("click", function(){
    if($festivalList.is(":animated"));
    $festivalList.animate({marginLeft:"-100%"}, duration, function(){
        $(this).removeAttr("style").children(":first").appendTo(this);
});
});

$("#fest-left").on("click", function(){
    if($festivalList.is(":animated")) return;
    $festivalList.prepend($festivalList.children().last())
    .css({marginLeft: "-100%"}).animate({marginLeft: 0}, duration);
});

$("#wando > div:nth-child(1)")
.animate({opacity: 0})
.animate({opacity: 1}, 600);

$("#wando > div:nth-child(2)")
.delay(600)
.animate({marginTop: 0}, 1000)
.animate({marginTop: "-10%"}, 600)
.animate({marginTop: 0}, 500);

$("#wando > div:nth-child(3)")
.delay(1000)
.animate({marginLeft: 0}, 1000)
.animate({marginLeft: "10%"}, 600)
.animate({marginLeft: 0}, 500);

$("#wando > div:nth-child(4)")
.delay(1400)
.animate({marginTop: 0}, 1000)
.animate({marginTop: "10%"}, 600)
.animate({marginTop: 0}, 500);


const $festivalDat = $("#festival-dat > li");
const $festivalTable = $(".table");

$festivalDat.on("click", function(){
    let clickIndex = $festivalDat.index(this);

    $festivalDat.removeClass("on");
    $(this).addClass("on");
    $festivalTable.removeClass("table-on")
       .eq(clickIndex).addClass("table-on");

});




});
