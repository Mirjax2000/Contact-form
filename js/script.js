// izolace jQuery
// -----------------
// (function ($) {})(jQuery);
// $(function () {});
// -----------------

$(function () {
    var testing = $('.testing'),
        bottom = $('.bottom'),
        result = $('.result'),
        top = $('.top');

    top.children().on('click', function () {
        thys = $(this);
        result.append(thys.text());
    });
});
