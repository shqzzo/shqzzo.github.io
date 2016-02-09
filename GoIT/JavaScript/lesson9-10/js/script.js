$(function() {

    //Navigation
    $('.dropdown').hover(
        function(){
            $(this).children('.submenu1').slideDown(500);
            jQuery('.submenu1').animate({
                backgroundColor: "#027C87"
            }, 500 );
        },
        function(){
            $(this).children('.submenu1').slideUp(500);
            jQuery('.submenu1').animate({
                backgroundColor: "#00909e"
            }, 500 );
        }
    );
    $('.dropright').hover(
        function(){
            $(this).children('.submenu2').slideDown(500);
            jQuery('.submenu2').animate({
                backgroundColor: "#027C87"
            }, 500 );
        },
        function(){
            $(this).children('.submenu2').slideUp(500);
            jQuery('.submenu2').animate({
                backgroundColor: "#00909e"
            }, 500 );
        }
    );


    // jCarousel
    $('.jcarousel').jcarousel({

    });

    // jCarousel Scroll
    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
       target: '+=1'
    });

    // jCarousel Pagination
    $('.jcarousel-pagination').jcarouselPagination({
        'item': function(page) {
            if(page == 1)
                return '<a class="jlink" href="#' + page + '" class="active"></a>';
            else
                return '<a class="jlink" href="#' + page + '"></a>';
        }
    })
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        });

    //jCarousel Autoscroll
    $('.jcarousel').jcarouselAutoscroll({
        interval: 3000,
        target: '+=1',
        autostart: true
    });

    // jQuery Custom Select Box
        $('.customSelect').customSelect();

});
