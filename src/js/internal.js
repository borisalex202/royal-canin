var config = @@include('../../config.json');


$(function() {

    $(window).on('load', function() {
        $('.icon use').each(function () {
            var $this = $(this),
                $url = $this.attr('xlink:href');

            $this.attr('xlink:href', config.path.sprites + $url);
        });
    });

    $(document).on('click', '.js-menu-toggle', function (e) {
        var $this = $(this),
            $menu = $('.site-menu');

        e.preventDefault();
        $this.toggleClass('_active');
        $menu.toggleClass('_active');
    });
    $(document).mouseup(function (e){
        var el = $('.site-menu');
        if (!el.is(e.target)
            && el.has(e.target).length === 0
            && !$(e.target).hasClass('js-menu-toggle')) {
            $('.js-menu-toggle').removeClass('_active');
            el.removeClass('_active');
        }
    });

    $('.counter')
        .counter({
            initial: '56 233',
            digitWidth: 50,
            digitHeight: 77
        })
        .counter('stop');
    $(document).on('click', '.js-inc-counter', function () {
        incCounter();
    });
});

// Functions
function incCounter() {
    $('.counter').counter('play');

    setTimeout(function(){
        $('.counter').counter('stop');
    }, 1);
}