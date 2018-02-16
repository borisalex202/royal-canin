var config = @@include('../../config.json');


$(function() {
    var $image = $('.cropper');

    $(window).on('load', function() {
        $('.icon use').each(function () {
            var $this = $(this),
                $url = $this.attr('xlink:href');

            $this.attr('xlink:href', config.path.sprites + $url);
        });
    });

    @@include('./partials/internal/_sliders.js')
    @@include('./partials/internal/_menu.js')
    @@include('./partials/internal/_counter.js')

    $('.form-upload__input').on('change', function (e) {
        var $this = $(this),
            $formUpload = $this.closest('.form-upload'),
            $text = $formUpload.find('.form-upload__text'),
            $upload = $formUpload.data('upload'),
            $textAdd = $formUpload.data('add'),
            $textChange = $formUpload.data('change');

        $formUpload.data('upload', true);
        $upload = true;
        $text.html(function(){
            return $upload ? $textChange : $textAdd;
        });
        initCrop($image);
        previewFile(e.target, $image);

    });
    $(document).on('click', '.js-pet__btn', function (e) {
        var $input = $('.js-pet__input'),
            $inputName = $input.val(),
            $name = $('.js-pet__name');

        if($inputName.length) {
            $input.removeClass('_error');
            $('#upload').modal('show');
        } else {
            $input.addClass('_error');
            e.preventDefault();
            return false;
        }
        $name.text(function () {
            return $inputName.length > 0 ? $inputName : '…………';
        })
    });

});

// Functions
function incCounter() {
    $('.counter').counter('play');

    setTimeout(function(){
        $('.counter').counter('stop');
    }, 1);
}
function initCrop(el) {
    el.cropper({
        autoCropArea: 1,
        dragMode: 'move'
    });
}
function previewFile(input, el) {
    var file    = input.files[0],
        reader  = new FileReader();

    reader.addEventListener("load", function () {
        el.cropper('replace', reader.result);
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}