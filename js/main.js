var modalBlockView = (function() {
    var welcomeBlock = $('#welcome-block'),
        welcomeModal = $('#welcome-modal'),
        welcomeClose = $('#welcome-close'),
        blockShowingSpeed = 700,
        blockShowingTimeIn = 10000,
        blockShowingTimeOut = 7000,
        blockRemovingTime = 1000;

    setTimeout(function(){
        welcomeBlock.fadeIn(blockShowingSpeed);
        welcomeModal.stop().animate({top: '0px'}, blockShowingSpeed);

        setTimeout(function(){
            welcomeBlock.fadeOut(blockShowingSpeed);
            welcomeModal.stop().animate({top: '-2500px'}, blockShowingSpeed);

            setTimeout(function(){
                welcomeBlock.remove();

            }, blockRemovingTime);
        }, blockShowingTimeOut);
    }, blockShowingTimeIn);

    welcomeClose.click(function () {
        welcomeBlock.fadeOut(blockShowingSpeed);
        welcomeModal.stop().animate({top: '-2500px'}, blockShowingSpeed);
    });
}());


// .stop().fadeToggle()
// .hide().remove()
