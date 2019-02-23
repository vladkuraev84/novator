$( document ).ready(function() {

    $('.menu-icon').click(function(){
        $(this).toggleClass('clicked');
        $('.nav').toggleClass('nav-mobile');
        $('body').toggleClass('body__mob');
        $('.contact').removeClass('show-contact');

            if($('.close-nav-mobile-block').hasClass("open-block")) {
                $('.close-nav-mobile-block').removeClass('open-block');
            } else {
                $('.close-nav-mobile-block').addClass('open-block');
            }
    });

    $('.close-nav-mobile-block').click(function(){
        $(this).toggleClass('open-block');
        $('.nav').removeClass('nav-mobile');
        $('.menu-icon').removeClass('clicked');
        $('body').removeClass('body__mob');
        $('.contact').removeClass('show-contact');
    });


    $('.nov__btn--contact').click(function(){
        $('.contact').toggleClass('show-contact');
        $('.nav').removeClass('nav-mobile');
        $('.menu-icon').removeClass('clicked');
        $('.close-nav-mobile-block').addClass('open-block');
        $('body').addClass('body__mob');
    });

    $('.contact--close').click(function(){
        $('.contact').removeClass('show-contact');
        $('.nav').removeClass('nav-mobile');
        $('.menu-icon').removeClass('clicked');
        $('.close-nav-mobile-block').removeClass('open-block');
        $('body').removeClass('body__mob');
    });

});

