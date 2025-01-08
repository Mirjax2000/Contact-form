// izolace jQuery
// -----------------
// (function ($) {})(jQuery);
// $(function () {});
// -----------------
//
// $(function () {
//   const error = $(".form__error");
//   console.log(error);
//   error.data("visible", "true");
// });

(function () {
  const error_info = document.querySelectorAll(".form__error");
  error_info.forEach(function (element) {
    element.dataset.visible = "true";
  });
})();
