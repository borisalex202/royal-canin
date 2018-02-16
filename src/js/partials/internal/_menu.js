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
$(window).on('load scroll resize', function () {
    var $window = $(this),
        $documentWidth = $(document).width(),
        $header = $('.site-header'),
        $headerHeight = $header.outerHeight(),
        $headerShow = $('.js-header-show'),
        $headerShowOffset = $headerShow.offset().top + $headerShow.outerHeight(),
        $scrollTop = $window.scrollTop();

    if($scrollTop > $headerHeight && $documentWidth > 991) {
        $header.addClass('_fixed');
    } else {
        $header.removeClass('_fixed');
    }
    if($scrollTop > $headerShowOffset && $documentWidth > 991) {
        $header.addClass('_active');
    } else {
        $header.removeClass('_active');
    }
});