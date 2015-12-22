window.addEffects = function() {
    $('.main_menu').addClass('slide');
    $('.logo').addClass('slide');
    $('.email').addClass('slide');
    $('.footer').addClass('slide');
    $('.loader').addClass('none');
    $('.resume-web').addClass('slide');
    $('.scale-07').toggleClass('scale-1');
}


$(function() {
    setTimeout('addEffects()', 700);

    $('.loader').addClass('hidden');

    $('.main_menu').on('click',function(){
        var $this = $(this);
        $('.place').toggleClass('other-icon');
        $('.header').toggleClass('to-right');
        $('.email').toggleClass('to-right');
        $('.nav-public').toggleClass('to-right');
        $('.main').toggleClass('to-right');

    });
});
