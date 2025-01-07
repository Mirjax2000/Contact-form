// izolace jQuery
// -----------------
// (function ($) {})(jQuery);
// $(function () {});
// -----------------

$(function () {
  const form = $("#form"),
    first_name = $("#first_name"),
    last_name = $("#last_name"),
    email_address = $("#email_address"),
    checkbox_general = $("#general"),
    checkbox_support = $("#support"),
    checkbox_consent = $("#consent"),
    message = $("#message"),
    error = $(".form__error");
  console.log(
    first_name,
    last_name,
    email_address,
    checkbox_general,
    checkbox_support,
    checkbox_consent,
    checkbox_consent,
    message,
    error,
    form,
  );
});
