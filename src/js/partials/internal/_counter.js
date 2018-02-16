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
