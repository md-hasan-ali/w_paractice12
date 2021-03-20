$(document).ready(function(){
    var mixer = mixitup('.protfolio-mix');
});

$(window).on('scroll', function(){
    if ($(this).scrollTop() > 20){
        $('.header-area').addClass("sticky");
    } else{
        $('.header-area').removeClass("sticky");
    }
});

