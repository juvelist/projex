$(document).ready(function () {

    $('#welcome-block').delay(10000).fadeIn();
    $('#welcome-modal').delay(10000).animate({top: '0px'});

    $('#welcome-block').delay(30000).fadeOut();
    $('#welcome-modal').delay(30000).animate({top: '-2500px'});

    $('#welcome-close').click(function () {
        $('#welcome-block').hide();
    })

});