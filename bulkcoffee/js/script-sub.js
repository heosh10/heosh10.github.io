$(function(){
    const $listIcon = $(".list-icon");
    const $menu = $(".main-list");
    const $icon = $(".main-sns");

    $listIcon.on("click", function(){
        $menu.toggle(".active");
        $icon.toggle(".active");
    });


});