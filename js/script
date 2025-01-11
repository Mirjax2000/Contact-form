// izolace jQuery
// -----------------
// (function ($) {})(jQuery);
// $(function () {});
// -----------------

(() => {
  const form = document.getElementById("contactForm"),
    modal = document.getElementById("modal"),
    general = form.querySelector("#general"),
    support = form.querySelector("#support"),
    checkboxesArray = [general, support];

  checkboxesArray.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
      const current = e.target;
      if (current.checked) {
        checkboxesArray.forEach((box) => {
          box.removeAttribute("required");
          box.checked = false;
          current.checked = true;
          current.setAttribute("required", "");
        });
      } else {
        checkboxesArray.forEach((box) => {
          box.setAttribute("required", "");
        });
      }
    });
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
      modal.classList.remove("hide");
    }
  });
})();
