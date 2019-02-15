var modalBlockView = (function() {
    var welcomeBlock = $('#welcome-block'),
        welcomeModal = $('#welcome-modal'),
        welcomeClose = $('#welcome-close'),
        blockShowingspeed = 700,
        blockShowingTimeIn = 3000,
        blockShowingTimeOut = 7000,
        blockRemovingTime = 1000;

    setTimeout(function(){
        welcomeBlock.fadeIn(blockShowingspeed);
        welcomeModal.animate({top: '0px'}, blockShowingspeed);

        setTimeout(function(){
            welcomeBlock.fadeOut(blockShowingspeed);
            welcomeModal.animate({top: '-2500px'}, blockShowingspeed);

            setTimeout(function(){
                welcomeBlock.remove();

            }, blockRemovingTime);
        }, blockShowingTimeOut);
    }, blockShowingTimeIn);

    welcomeClose.click(function () {
        welcomeBlock.fadeOut(blockShowingspeed);
        welcomeModal.animate({top: '-2500px'}, blockShowingspeed);
    });
}());
