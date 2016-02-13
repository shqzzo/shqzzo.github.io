(function($) {

    $.fn.myCarousel = function() {

        var $leftUIEL = $('.carousel-arrow-left');
        var $rightUIEL = $('.carousel-arrow-right');
        var $elementList = $('.carousel-list');

        var pixelsOffset = 225;
        var currentLeftValue = 0;
        var elementsCount = $elementList.find('li').length;
        var minimumOffset = -((elementsCount - 5) * pixelsOffset);
        var maximumOffset = 0;

        $leftUIEL.click(function () {
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += pixelsOffset;
                $elementList.animate({left: currentLeftValue + 'px'}, 500);
            }
        });

        $rightUIEL.click(function () {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= pixelsOffset;
                $elementList.animate({left: currentLeftValue + 'px'}, 500);
            }
        });
        return this;
    }

})(jQuery);
