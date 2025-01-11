// izolace jQuery
// -----------------
// (function ($) {})(jQuery);
// $(function () {});
// -----------------

(() => {
  const form = document.getElementById("contactForm"),
    modal = document.getElementById("modal"),
    button = form.querySelector(".form__submit"),
    firstName = form.querySelector("#first_name"),
    lastName = form.querySelector("#last_name"),
    checkboxGeneral = form.querySelector("#general"),
    checkboxSupport = form.querySelector("#support");
})();
