/* Появление звонка при прокрутке */
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 815) {
        $('#call-me').fadeIn();
    } else {
        $('#call-me').fadeOut();
    }
});


