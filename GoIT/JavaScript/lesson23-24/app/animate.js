define(
    'animate', ['jquery'],
    function () {
        $(function () {
            function iconToggle() {
                $(this).toggleClass('active');
                $(this).next().toggleClass('active');
            }

            $('.icon').on('click', function () {
                iconToggle.call(this);
            });
        });
    }
);